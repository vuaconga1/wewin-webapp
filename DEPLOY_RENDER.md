# Deploy WeWIN — Render Free + Neon + GitHub Pages

```
GitHub Pages (free)  →  https://vuaconga1.github.io/wewin-webapp/
Render Free (free)   →  https://wewin-api.onrender.com
Neon (free)          →  PostgreSQL (đã import data)
```

**Không cần thẻ tín dụng** để dùng Render Free.

---

## Hạn chế Render Free (cần biết trước)

| Hạn chế | Ảnh hưởng |
|---|---|
| **Ngủ sau 15 phút** không có request | Lần mở đầu chậm **~30–90 giây** (.NET cold start) |
| **512 MB RAM** | Đủ chạy API WeWIN |
| **750 giờ/tháng** | ~1 service chạy 24/7 vẫn trong hạn |
| **500 phút build/tháng** | Đủ vài lần deploy |

→ Phù hợp **dùng thử / lớp học nhỏ**. Cần ổn định hơn → Vietnix ~119k/tháng.

---

## Bước 1 — Đăng ký Render

1. [https://render.com](https://render.com) → **Get Started**
2. Đăng nhập bằng **GitHub** (cùng account `vuaconga1`)
3. **Không** thêm thẻ nếu chỉ dùng Free

---

## Bước 2 — Tạo Web Service

1. Dashboard → **New +** → **Web Service**
2. Connect repo **`vuaconga1/wewin-webapp`**
3. Cấu hình:

| Mục | Giá trị |
|---|---|
| **Name** | `wewin-api` |
| **Region** | **Singapore** (gần Neon + VN) |
| **Branch** | `tin` |
| **Root Directory** | `backend` |
| **Runtime** | **Docker** |
| **Instance Type** | **Free** |

### Advanced (mở rộng)

| Mục | Giá trị |
|---|---|
| **Dockerfile Path** | `Dockerfile` |
| **Health Check Path** | `/api/health` |

### Port

Render hỏi port container → nhập **`8080`** (khớp `backend/Dockerfile`).

---

## Bước 3 — Environment Variables

Trong **Environment** → Add Environment Variable:

```env
ASPNETCORE_ENVIRONMENT=Production
ASPNETCORE_URLS=http://+:8080

ConnectionStrings__DefaultConnection=Host=ep-calm-scene-aox9u9c0-pooler.c-2.ap-southeast-1.aws.neon.tech;Port=5432;Database=neondb;Username=neondb_owner;Password=PASSWORD_NEON;SSL Mode=Require;Trust Server Certificate=true

Cors__Origins__0=https://vuaconga1.github.io

AzureSpeech__Key=
AzureSpeech__Region=southeastasia
```

- Thay `PASSWORD_NEON` bằng password Neon thật (nên **reset** trên Neon Dashboard)
- **Không** commit password vào git

---

## Bước 4 — Deploy

1. Bấm **Create Web Service**
2. Đợi **Build** lần đầu (~10–20 phút — tải .NET 10 SDK)
3. Khi status **Live**, URL dạng:

```
https://wewin-api.onrender.com
```

### Kiểm tra

```powershell
curl https://wewin-api.onrender.com/api/health
curl "https://wewin-api.onrender.com/api/units?game=kindergarten"
```

Kỳ vọng: `ok: true` + JSON units.

> Lần đầu sau khi ngủ: đợi ~1 phút, refresh lại.

---

## Bước 5 — GitHub Pages

1. Repo GitHub → **Settings → Secrets and variables → Actions → Variables**
2. Thêm / sửa:

| Name | Value |
|---|---|
| `VITE_API_BASE_URL` | `https://wewin-api.onrender.com/api` |

3. **Settings → Pages → Source:** GitHub Actions
4. **Actions** → **Deploy frontend to GitHub Pages** → **Run workflow**

Mở:

```
https://vuaconga1.github.io/wewin-webapp/choosegame.html
```

F12 → Network: không lỗi CORS / Mixed Content.

---

## Bước 6 — Giảm ngủ trong giờ học (tuỳ chọn)

Render ngủ sau **15 phút** không traffic.

**UptimeRobot** (free):

1. [uptimerobot.com](https://uptimerobot.com) → monitor HTTP
2. URL: `https://wewin-api.onrender.com/api/health`
3. Interval: **5 phút**

→ API không ngủ trong giờ học (Render không khuyến khích nhưng dùng được cho trường học).

---

## Cách 2 — Dùng Blueprint (`render.yaml`)

Repo có file `render.yaml` ở root.

1. Render → **New +** → **Blueprint**
2. Chọn repo `wewin-webapp`, branch `tin`
3. Render hỏi `ConnectionStrings__DefaultConnection` → dán connection string Neon
4. Apply

Sau đó vẫn làm **Bước 5** (GitHub variable).

---

## Cập nhật code

Push lên branch `tin` → Render **auto deploy** (nếu bật Auto-Deploy).

Xem log: **Render Dashboard → wewin-api → Logs**.

---

## Lỗi thường gặp

| Lỗi | Cách xử lý |
|---|---|
| Build fail / OOM | Xem Logs; build lại; Free 512MB đủ runtime, build chạy trên server Render |
| `Unhealthy` | Port phải **8080**; health check `/api/health` |
| CORS | `Cors__Origins__0=https://vuaconga1.github.io` (không có `/wewin-webapp`) |
| DB failed | Kiểm tra Neon password + `SSL Mode=Require` |
| Request đầu rất chậm | Cold start — bình thường; ping health trước giờ học |
| `Root Directory` sai | Phải là `backend` |

---

## Checklist

```
[ ] Render account (GitHub login, không cần thẻ)
[ ] Web Service: Docker, branch tin, root backend, Free, Singapore
[ ] Port 8080, health /api/health
[ ] Env: ConnectionStrings + Cors
[ ] Live + /api/health OK
[ ] GitHub VITE_API_BASE_URL
[ ] Test choosegame.html
```

---

*Neon đã có 5.602 GameItems — không cần import lại.*
