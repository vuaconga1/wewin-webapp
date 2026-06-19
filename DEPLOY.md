# Hướng dẫn deploy WeWIN — GitHub Pages + Oracle VM + Neon

Tài liệu này hướng dẫn **từng bước** deploy luồng mới (React + .NET + PostgreSQL).

**Kiến trúc mục tiêu:**

```
Học sinh (HTTPS)
    → https://vuaconga1.github.io/wewin-webapp/     (frontend static)
    → https://api.yourdomain.com/api/...            (backend .NET trên Oracle VM)
    → Neon PostgreSQL                               (database)
```

**Thời gian ước tính:** 2–4 giờ lần đầu (tạo tài khoản cloud, cấu hình VM, đẩy dữ liệu).

---

## Mục lục

1. [Chuẩn bị trên máy local](#1-chuẩn-bị-trên-máy-local)
2. [Neon PostgreSQL](#2-neon-postgresql)
3. [Đưa dữ liệu lên Neon](#3-đưa-dữ-liệu-lên-neon)
4. [Oracle Cloud VM](#4-oracle-cloud-vm)
5. [Deploy backend (Docker)](#5-deploy-backend-docker)
6. [HTTPS cho API](#6-https-cho-api-bắt-buộc)
7. [GitHub Pages (frontend)](#7-github-pages-frontend)
8. [Kiểm tra sau deploy](#8-kiểm-tra-sau-deploy)
9. [Vận hành & backup](#9-vận-hành--backup)
10. [Xử lý lỗi thường gặp](#10-xử-lý-lỗi-thường-gặp)

---

## 1. Chuẩn bị trên máy local

### 1.1 Phần mềm cần có

| Công cụ | Dùng cho |
|---|---|
| Git | Push code |
| Node.js 22+ | Build frontend |
| .NET 10 SDK | Migration DB, test API |
| PostgreSQL client (`psql`, `pg_dump`) | Backup/restore DB |
| SSH client | Kết nối Oracle VM |

### 1.2 Xác nhận app chạy được local

```powershell
cd E:\AnSchool\wewin-webapp\backend
dotnet run
# Mở http://localhost:5222/api/health → phải trả {"ok":true,...}
```

```powershell
cd E:\AnSchool\wewin-webapp\frontend
npm install
npm run dev
# Mở http://localhost:5173
```

### 1.3 Assets (~107 MB) phải có trong repo hoặc trên máy build

Thư mục `frontend/public/assets/` cần ~1.200 file ảnh/mp3. Nếu thiếu:

```powershell
cd E:\AnSchool\wewin-webapp\frontend
npm run assets:download
```

**Quan trọng:** GitHub Actions build từ repo — nếu `assets/` chưa commit/push, site production sẽ thiếu ảnh âm thanh.

```powershell
cd E:\AnSchool\wewin-webapp
git add frontend/public/assets
git status   # kiểm tra kích thước trước khi push
```

---

## 2. Neon PostgreSQL

### 2.1 Tạo project

1. Vào [https://neon.tech](https://neon.tech) → đăng ký (GitHub/Google).
2. **New Project** → đặt tên `wewin`.
3. **Region:** chọn **Singapore (`ap-southeast-1`)** hoặc Tokyo — gần VN nhất trong các lựa chọn Neon.
4. PostgreSQL version: **16** (hoặc 15+).

### 2.2 Lấy connection string

Neon Dashboard → **Connection details** → chọn **.NET** hoặc **Connection string**.

Ví dụ:

```
Host=ep-cool-name-12345678.ap-southeast-1.aws.neon.tech;Port=5432;Database=neondb;Username=neondb_owner;Password=SECRET;SSL Mode=Require;Trust Server Certificate=true
```

Lưu vào file tạm — dùng ở bước 3 và 5.

### 2.3 Tạo schema (migration)

Trên máy local, chạy migration trỏ vào Neon:

```powershell
cd E:\AnSchool\wewin-webapp\backend
$env:ConnectionStrings__DefaultConnection="Host=ep-xxxx.ap-southeast-1.aws.neon.tech;Port=5432;Database=neondb;Username=neondb_owner;Password=YOUR_PASSWORD;SSL Mode=Require;Trust Server Certificate=true"
dotnet ef database update
```

Nếu chưa cài `dotnet-ef`:

```powershell
dotnet tool install --global dotnet-ef
```

Kết quả: Neon có đủ bảng (`Units`, `GameItems`, …).

---

## 3. Đưa dữ liệu lên Neon

Bạn đã có DB local đầy đủ (~5.600 `GameItems`). Cách nhanh nhất: **pg_dump → restore**.

### Cách A — Dump từ PostgreSQL local (khuyến nghị)

**Bước 1 — Dump trên Windows:**

```powershell
pg_dump -h localhost -U postgres -d wewin -F c -f E:\AnSchool\wewin.dump
```

(Nhập password PostgreSQL local khi được hỏi.)

**Bước 2 — Restore lên Neon:**

Lấy connection string Neon, tách host/user/password/database. Ví dụ với `psql`:

```powershell
pg_restore -h ep-xxxx.ap-southeast-1.aws.neon.tech -U neondb_owner -d neondb --no-owner --no-acl -v E:\AnSchool\wewin.dump
```

> Nếu báo lỗi “relation already exists” vì đã chạy migration: dùng `--clean` hoặc xóa schema trên Neon rồi restore lại.

**Bước 3 — Kiểm tra:**

Trên Neon SQL Editor:

```sql
SELECT COUNT(*) FROM "GameItems";
-- Kỳ vọng: ~5600+
```

### Cách B — Import Excel qua API (nếu không có dump local)

1. Copy `GameWewin.xlsx` lên VM hoặc mount vào container.
2. Sau khi API chạy (bước 5), gọi:

```bash
curl -X POST "https://api.yourdomain.com/api/admin/import/excel"
```

> Endpoint admin **không có xác thực** — chỉ dùng lúc setup, sau đó chặn bằng firewall hoặc tắt route.

---

## 4. Oracle Cloud VM

### 4.1 Tạo tài khoản & VM

1. [https://cloud.oracle.com](https://cloud.oracle.com) → Sign up (cần thẻ — Always Free không bị charge nếu chỉ dùng free tier).
2. **Compute → Instances → Create instance**
3. Cấu hình gợi ý:

| Mục | Giá trị |
|---|---|
| Name | `wewin-api` |
| Region | **Singapore** hoặc **Japan** |
| Image | Ubuntu 22.04 |
| Shape | **Ampere A1.Flex** — 1 OCPU, 6 GB RAM (đủ dùng) |
| Boot volume | 50 GB |
| SSH key | Tạo mới, tải file `.key` về máy |

4. **Networking → Public subnet** — bật public IPv4.
5. Create instance → ghi lại **Public IP** (vd. `123.45.67.89`).

### 4.2 Mở port (Security List / NSG)

Vào **VCN → Security Lists → Ingress Rules**, thêm:

| Port | Source | Mục đích |
|---|---|---|
| 22 | Your IP/0.0.0.0/0 | SSH |
| 80 | 0.0.0.0/0 | HTTP (Caddy) |
| 443 | 0.0.0.0/0 | HTTPS (Caddy) |

> Không mở port 8080 ra internet — API chỉ listen localhost, Caddy reverse proxy.

### 4.3 SSH vào VM

```powershell
ssh -i C:\path\to\your.key ubuntu@123.45.67.89
```

### 4.4 Cài Docker trên Ubuntu

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io docker-compose-v2 git
sudo usermod -aG docker ubuntu
```

Đăng xuất SSH rồi vào lại để group `docker` có hiệu lực.

```bash
docker --version
docker compose version
```

---

## 5. Deploy backend (Docker)

### 5.1 Đưa code lên VM

**Cách 1 — Git clone (đơn giản):**

```bash
cd ~
git clone https://github.com/vuaconga1/wewin-webapp.git
cd wewin-webapp
```

**Cách 2 — Chỉ copy thư mục `backend/` + `deploy/`** qua `scp` nếu repo private.

### 5.2 Tạo file `.env` trên VM

```bash
cd ~/wewin-webapp/deploy
cp .env.example .env
nano .env
```

Điền connection string Neon thật và CORS:

```env
ConnectionStrings__DefaultConnection=Host=ep-....neon.tech;...
Cors__Origins__0=https://vuaconga1.github.io
AzureSpeech__Key=          # tuỳ chọn
AzureSpeech__Region=southeastasia
```

### 5.3 Build & chạy container

```bash
cd ~/wewin-webapp/deploy
docker compose build
docker compose up -d
docker compose logs -f api
```

Kiểm tra nội bộ VM:

```bash
curl http://127.0.0.1:8080/api/health
```

Kỳ vọng: JSON `ok: true`.

### 5.4 Tự khởi động lại khi reboot

`docker-compose.yml` đã có `restart: unless-stopped`. Đảm bảo Docker service bật:

```bash
sudo systemctl enable docker
```

---

## 6. HTTPS cho API (bắt buộc)

GitHub Pages chạy **HTTPS**. Trình duyệt **chặn** gọi API HTTP (mixed content). API **phải có HTTPS**.

### Phương án A — Domain + Caddy (khuyến nghị lâu dài)

1. Đăng ký subdomain miễn phí (vd. [DuckDNS](https://www.duckdns.org)) → `wewin-api.duckdns.org` trỏ về IP Oracle VM.
2. Trên VM:

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install -y caddy
```

3. Sửa `deploy/Caddyfile` — thay `api.yourdomain.com` bằng domain thật.
4. Copy Caddyfile:

```bash
sudo cp ~/wewin-webapp/deploy/Caddyfile /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

Caddy tự lấy chứng chỉ Let's Encrypt. API public:

```
https://wewin-api.duckdns.org/api/health
```

### Phương án B — Cloudflare Tunnel (không cần mở port 80/443)

Phù hợp nếu không muốn domain riêng:

```bash
# Trên VM — làm theo hướng dẫn cloudflared
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-arm64.deb -o cloudflared.deb
sudo dpkg -i cloudflared.deb
cloudflared tunnel login
cloudflared tunnel create wewin
cloudflared tunnel route dns wewin api-wewin.yourdomain.com
```

Tạo file config trỏ `http://127.0.0.1:8080`. Cloudflare cấp URL HTTPS `*.trycloudflare.com` hoặc custom hostname.

> Ghi lại URL HTTPS cuối cùng — dùng làm `VITE_API_BASE_URL`.

---

## 7. GitHub Pages (frontend)

### 7.1 Bật GitHub Pages

1. Repo [vuaconga1/wewin-webapp](https://github.com/vuaconga1/wewin-webapp) → **Settings → Pages**
2. **Source:** chọn **GitHub Actions** (không chọn branch `main` / root).

### 7.2 Cấu hình biến API URL

Repo → **Settings → Secrets and variables → Actions → Variables**

| Tên | Giá trị ví dụ |
|---|---|
| `VITE_API_BASE_URL` | `https://wewin-api.duckdns.org/api` |

(Không có dấu `/` cuối sau `api`.)

### 7.3 Push code & chạy workflow

File workflow: `.github/workflows/deploy-frontend.yml`

```powershell
cd E:\AnSchool\wewin-webapp
git add .
git commit -m "Add deploy config"
git push origin main
```

Hoặc: GitHub → **Actions** → **Deploy frontend to GitHub Pages** → **Run workflow**.

### 7.4 URL sau deploy

Project site (repo tên `wewin-webapp`):

```
https://vuaconga1.github.io/wewin-webapp/
```

Trang vào:

```
https://vuaconga1.github.io/wewin-webapp/choosegame.html
```

`vite.config.ts` dùng `VITE_BASE_PATH=/wewin-webapp/` — assets tự có prefix đúng.

### 7.5 Build thủ công (tuỳ chọn)

```powershell
cd E:\AnSchool\wewin-webapp\frontend
copy .env.production.example .env.production
# Sửa VITE_API_BASE_URL trong .env.production
npm run build
# Upload thư mục dist/ lên Pages (nếu không dùng Actions)
```

---

## 8. Kiểm tra sau deploy

### Checklist

| # | Kiểm tra | Cách |
|---|---|---|
| 1 | API health | Mở `https://YOUR-API/api/health` |
| 2 | CORS | DevTools → Network khi mở Pages, gọi `/api/units` không lỗi CORS |
| 3 | Units | `https://YOUR-API/api/units?game=kindergarten` trả JSON có data |
| 4 | Frontend | Login → chọn game → sidebar có Unit 1, 5 |
| 5 | Ảnh/mp3 | Game hiện ảnh, phát được audio |
| 6 | Nghĩa VI | Không hiện `3.4` thay vì tiếng Việt |
| 7 | Phát âm | Cần `AzureSpeech__Key` — nếu trống game pronunciation lỗi (các game khác vẫn OK) |

### Lệnh test nhanh

```powershell
curl https://wewin-api.duckdns.org/api/health
curl "https://wewin-api.duckdns.org/api/units?game=starters"
```

Trên trình duyệt (F12 → Console), không được có:

- `Mixed Content` — API chưa HTTPS
- `CORS policy` — thiếu origin trong `Cors__Origins__0`
- `404` cho `/wewin-webapp/assets/...` — thiếu assets trong repo

---

## 9. Vận hành & backup

### Backup Neon (hàng tuần)

Neon Dashboard → **Branches** / **Backup** hoặc:

```powershell
pg_dump "postgresql://user:pass@ep-....neon.tech/neondb?sslmode=require" -F c -f wewin-backup.dump
```

### Giám sát uptime (miễn phí)

[UptimeRobot](https://uptimerobot.com) — monitor:

- `https://vuaconga1.github.io/wewin-webapp/choosegame.html`
- `https://YOUR-API/api/health`

### Cập nhật backend

```bash
ssh ubuntu@VM-IP
cd ~/wewin-webapp && git pull
cd deploy && docker compose build && docker compose up -d
```

### Cập nhật frontend

Push lên `main` (thư mục `frontend/`) → GitHub Actions tự deploy.

### Bảo mật admin

Sau khi import xong, cân nhắc:

- Chặn `/api/admin/*` bằng firewall IP trên Caddy
- Hoặc tắt route import trên production

---

## 10. Xử lý lỗi thường gặp

### CORS error từ GitHub Pages

- `Cors__Origins__0` phải là `https://vuaconga1.github.io` (không có `/wewin-webapp`).
- Restart container sau khi sửa `.env`:

```bash
cd ~/wewin-webapp/deploy && docker compose up -d --force-recreate
```

### Mixed Content / API không gọi được

- Frontend HTTPS + API HTTP → **không được**. Bật HTTPS (mục 6).

### Neon connection failed

- Thêm `SSL Mode=Require;Trust Server Certificate=true` vào connection string.
- Kiểm tra password không có ký tự đặc biệt cần escape.

### Neon chậm lần đầu sau vài giờ không dùng

- Free tier scale-to-zero → query đầu tiên mất 2–5 giây. Bình thường.
- Có thể cron ping mỗi 5 phút nếu cần.

### Ảnh/audio 404 trên Pages

- `frontend/public/assets/` chưa push lên GitHub.
- Hoặc `VITE_BASE_PATH` sai — phải là `/wewin-webapp/` cho project site.

### Oracle VM không SSH được

- Kiểm tra Security List port 22.
- Kiểm tra public IP đúng instance.

### `dotnet ef` không tìm thấy

```powershell
dotnet tool install --global dotnet-ef
```

### Docker build lỗi .NET 10

Image dùng `mcr.microsoft.com/dotnet/sdk:10.0`. Nếu chưa có trên máy build, pull thủ công:

```bash
docker pull mcr.microsoft.com/dotnet/sdk:10.0
docker pull mcr.microsoft.com/dotnet/aspnet:10.0
```

---

## Tóm tắt thứ tự làm

```
1. Neon: tạo DB + migration
2. pg_dump local → restore Neon
3. Oracle: tạo VM + Docker
4. deploy/.env + docker compose up
5. Caddy/Cloudflare → HTTPS cho API
6. GitHub: variable VITE_API_BASE_URL + bật Pages Actions
7. git push → kiểm tra site
```

---

## File deploy trong repo

| File | Mục đích |
|---|---|
| `backend/Dockerfile` | Build image .NET API |
| `deploy/docker-compose.yml` | Chạy API trên VM |
| `deploy/.env.example` | Mẫu biến môi trường |
| `deploy/Caddyfile` | HTTPS reverse proxy |
| `frontend/.env.production.example` | Build frontend local |
| `.github/workflows/deploy-frontend.yml` | CI deploy Pages |

---

*Cập nhật theo repo `vuaconga1/wewin-webapp` — stack React + .NET 10 + PostgreSQL.*
