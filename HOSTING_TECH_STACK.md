  # WeWIN / AnSchool — Tóm tắt công nghệ & chọn phương án host

  Tài liệu này giúp bạn đánh giá **phương án hosting khả thi** dựa trên stack thực tế trong repo `wewin-webapp`.

  ---

  ## 1. Tổng quan dự án

  Repo hiện có **hai luồng** song song:

  | Luồng | Mô tả | Trạng thái |
  |---|---|---|
  | **Mới (khuyến nghị)** | React + Vite → ASP.NET Core API → PostgreSQL | Đang phát triển, có đủ game & sidebar mới |
  | **Cũ (legacy)** | HTML tĩnh (`home.html`, `choosegame.html`…) → Google Apps Script | Vẫn còn trong repo, deploy GitHub Pages kiểu cũ |

  **Sản phẩm thật nên dùng luồng mới** nếu bạn cần nghĩa tiếng Việt đầy đủ, sidebar Unit 1/5, và dữ liệu từ PostgreSQL.

  ---

  ## 2. Công nghệ chi tiết

  ### 2.1 Frontend (luồng mới)

  | Hạng mục | Công nghệ |
  |---|---|
  | Framework | **React 19** + **TypeScript** |
  | Build tool | **Vite 8** |
  | UI | Tailwind CSS (CDN), HTML/CSS tùy chỉnh |
  | Routing | Multi-page (`choosegame.html`, `home.html`…) + query string |
  | Gọi API | `fetch` → biến `VITE_API_BASE_URL` (mặc định `http://localhost:5222/api`) |
  | Tài nguyên tĩnh | `frontend/public/assets/` — ảnh `.jpg`, audio `.mp3` (~**107 MB**, ~1.200 file) |
  | Từ điển VI | `frontend/public/data/vietnameseDictionary.json` (~418 từ) |
  | Output build | `frontend/dist/` (HTML + JS bundle + assets) |

  **Đặc điểm host:** chỉ cần **static hosting** (GitHub Pages, Cloudflare Pages, Nginx…). **Không** chạy Node.js trên server production.

  **Biến môi trường lúc build:**

  ```bash
  VITE_API_BASE_URL=https://your-api-domain.com/api
  ```

  Nếu site nằm dưới subpath (vd. `username.github.io/wewin-webapp/`), cần thêm `base` trong `vite.config.ts`.

  ---

  ### 2.2 Backend (luồng mới)

  | Hạng mục | Công nghệ |
  |---|---|
  | Runtime | **.NET 10** (`net10.0`) |
  | Framework | **ASP.NET Core Web API** (Minimal API) |
  | ORM | **Entity Framework Core 10** |
  | Database driver | **Npgsql** (PostgreSQL) |
  | Excel import | **ClosedXML** |
  | Speech | **Microsoft.CognitiveServices.Speech** (Azure) |
  | Static files | `UseStaticFiles()` — `backend/wwwroot/` (~**71 MB** media đã tải) |
  | CORS | Cấu hình `Cors:Origins` trong `appsettings.json` |
  | Rate limit | Speech: 20 request/phút |

  **Port mặc định dev:** `http://localhost:5222`

  **Đặc điểm host:** cần **process chạy liên tục** (VM, container, PaaS có always-on). **Không phù hợp** serverless ngủ (Render free) hoặc **Vercel** cho API .NET + DB.

  ---

  ### 2.3 Database

  | Hạng mục | Chi tiết |
  |---|---|
  | Engine | **PostgreSQL** (bắt buộc) |
  | Schema | EF Core migrations trong `backend/Data/Migrations/` |
  | Dữ liệu chính | `Units`, `GameItems` (~5.600+ dòng từ vựng), `MediaAssets`, `Users`, `GameSessions`, `Scores`, `SpeechAttempts` |
  | Import ban đầu | Excel `GameWewin.xlsx` qua `POST /api/admin/import/excel` |
  | Connection string | `ConnectionStrings__DefaultConnection` (env) |

  **Ước lượng dung lượng DB:** vài chục MB — phù hợp free tier Neon/Supabase nếu quy mô vừa.

  ---

  ### 2.4 Dịch vụ bên thứ ba (tùy chọn)

  | Dịch vụ | Dùng cho | Bắt buộc? |
  |---|---|---|
  | **Azure Cognitive Services Speech** | Game phát âm, chấm điểm | Không — thiếu key thì endpoint speech lỗi; game khác vẫn chạy |
  | **Google Apps Script** (legacy) | API cũ cho `home.html` root | Chỉ nếu giữ bản HTML cũ |

  ---

  ### 2.5 API chính (frontend gọi)

  ```
  GET  /api/health
  GET  /api/app/bootstrap?game=
  GET  /api/units?level=&game=
  GET  /api/game/all?slug=&level=&week=&game=
  GET  /api/game/listenchoose|lookchoose|pronunciation
  POST /api/game/session
  POST /api/game/score
  POST /api/speech/pronunciation   (multipart audio, cần Azure)
  POST /api/admin/import/excel     (admin only)
  POST /api/admin/import/media     (admin only)
  ```

  ---

  ## 3. Yêu cầu kỹ thuật khi host

  ### Frontend

  - [x] Static file hosting (HTTPS)
  - [x] Hỗ trợ ~110 MB assets (ảnh + mp3) — GitHub Pages/Cloudflare Pages đều được
  - [x] CORS không áp dụng cho static (chỉ API cần CORS)
  - [ ] Cấu hình `VITE_API_BASE_URL` trỏ đúng API production khi build
  - [ ] (Nếu GitHub Pages subpath) cấu hình `base` trong Vite

  ### Backend

  - [x] Chạy **.NET 10** (Docker hoặc runtime trên VM)
  - [x] **PostgreSQL** reachable (connection string SSL cho cloud DB)
  - [x] RAM tối thiểu ~512 MB–1 GB (khuyến nghị 1 GB+)
  - [x] Disk ~200 MB (app + wwwroot media tùy chọn)
  - [x] Upload file tối đa **10 MB** (speech audio)
  - [x] CORS cho domain frontend (GitHub Pages URL)
  - [ ] Biến môi trường: `ConnectionStrings__DefaultConnection`, `AzureSpeech__Key`, `AzureSpeech__Region`
  - [ ] Chạy migration: `dotnet ef database update` (hoặc auto-migrate lúc deploy)

  ### Database

  - [x] PostgreSQL 14+ (Neon, Supabase, self-host đều được)
  - [x] Backup định kỳ (quan trọng cho sản phẩm thật)
  - [x] SSL connection (cloud DB thường bắt buộc)

  ---

  ## 4. Ma trận nền tảng host

  ### Frontend — static

  | Nền tảng | Khả thi | Free lâu dài | Sản phẩm thật | Ghi chú |
  |---|---|---|---|---|
  | **GitHub Pages** | ✅ | ✅ | ✅ | Dễ, miễn phí; chú ý subpath `/wewin-webapp/` |
  | **Cloudflare Pages** | ✅ | ✅ | ✅ | CDN nhanh, custom domain dễ |
  | Vercel (static) | ✅ | ✅ | ✅ | Tương đương Pages |
  | Backend host file tĩnh | ✅ | Tùy | ✅ | Cùng domain với API, đơn giản CORS |

  ### Backend API — .NET 10

  | Nền tảng | Khả thi | Free lâu dài | Sản phẩm thật | Ghi chú |
  |---|---|---|---|---|
  | **Oracle Cloud Always Free (VM)** | ✅ | ✅ | ✅ | Tự Docker; không ngủ; cần quản trị |
  | **VPS trả phí** (Hetzner, Contabo…) | ✅ | ❌ (~$5–7/th) | ✅✅ | Ổn định nhất cho giá rẻ |
  | **Máy trường + Cloudflare Tunnel** | ✅ | ✅ | ✅ | Không tốn cloud; phụ thuộc mạng trường |
  | Render / Railway (paid) | ✅ | ❌ | ✅✅ | Ít ops, always-on |
  | Render / Fly free | ⚠️ | ✅ | ❌ | Ngủ / quota — không cho lớp học thật |
  | **Vercel** | ❌ | — | ❌ | Không phù hợp .NET + PostgreSQL |
  | Azure App Service | ✅ | Trial | ✅✅ | Tốt nếu có budget / student credit |

  ### Database — PostgreSQL

  | Nền tảng | Khả thi | Free lâu dài | Sản phẩm thật | Ghi chú |
  |---|---|---|---|---|
  | **Neon** | ✅ | ✅ | ✅ (quy mô nhỏ–vừa) | Serverless Postgres, free ~0.5 GB |
  | **Supabase** | ✅ | ✅ | ✅ | Postgres + dashboard; theo dõi pause project |
  | Postgres trên cùng VM | ✅ | ✅ | ✅ | Oracle / VPS — backup tự làm |
  | Render Postgres | ✅ | ❌ | ✅ | Trả phí |

  ### Legacy — Google Apps Script only

  | Nền tảng | Khả thi | Ghi chú |
  |---|---|---|
  | GitHub Pages + GAS | ✅ | Không cần .NET/Postgres; dữ liệu & tính năng mới **không** có |

  ---

  ## 5. Phương án đề xuất theo mục tiêu

  ### A. Miễn phí, dùng lâu dài, sản phẩm thật (quy mô trường học)

  ```
  [Cloudflare Pages hoặc GitHub Pages]  →  frontend/dist
  [Oracle Cloud Free VM + Docker]       →  backend .NET
  [Neon PostgreSQL free]                →  database
  ```

  - **Ưu:** $0, API không ngủ (VM), frontend ổn định  
  - **Nhược:** Tự quản trị VM, backup, cập nhật

  ### B. Ít vận hành nhất với ngân sách nhỏ (~$5–12/tháng)

  ```
  [GitHub Pages]     →  frontend (free)
  [Railway / Render paid hoặc VPS]  →  backend Docker
  [Neon hoặc DB trên VPS]           →  PostgreSQL
  ```

  - **Ưu:** Ổn định, ít phải SSH vào server  
  - **Nhược:** Chi phí hàng tháng thấp nhưng không zero

  ### C. Trường có PC/server sẵn

  ```
  [GitHub Pages]              →  frontend
  [PC trường + Cloudflare Tunnel]  →  backend + Postgres local
  ```

  - **Ưu:** Kiểm soát dữ liệu tại trường, $0 hosting cloud  
  - **Nhược:** Điện, internet, bảo trì máy

  ### D. Giữ bản cũ (không khuyến nghị cho tính năng mới)

  ```
  [GitHub Pages]  →  home.html, choosegame.html (root)
  [Google Apps Script]  →  API + dữ liệu
  ```

  - **Ưu:** Đơn giản, free  
  - **Nhược:** Không có PostgreSQL, nghĩa VI/sidebar mới từ bản .NET

  ---

  ## 6. Kiến trúc tham khảo (luồng mới)

  ```mermaid
  flowchart LR
    subgraph Client
      Browser[Học sinh / Trình duyệt]
    end

    subgraph StaticHost["Static host (free)"]
      Pages[GitHub Pages / Cloudflare Pages]
      Assets[assets/images + audios ~107MB]
      Dict[vietnameseDictionary.json]
    end

    subgraph APIHost["API host (VM / PaaS)"]
      DotNet[ASP.NET Core 10 API]
      WWW[wwwroot/media tùy chọn]
    end

    subgraph Data
      PG[(PostgreSQL)]
    end

    subgraph Optional
      Azure[Azure Speech]
    end

    Browser --> Pages
    Pages --> Assets
    Pages --> Dict
    Browser -->|HTTPS JSON| DotNet
    DotNet --> PG
    Browser -->|POST audio| DotNet
    DotNet --> Azure
  ```

  ---

  ## 7. Checklist trước khi go-live

  ### Frontend
  - [ ] `npm run build` với `VITE_API_BASE_URL` production
  - [ ] Deploy `frontend/dist` (gồm `assets/` và `data/`)
  - [ ] Kiểm tra đường dẫn `base` nếu dùng GitHub Pages project site

  ### Backend
  - [ ] Dockerfile / publish .NET 10
  - [ ] Env: `ConnectionStrings__DefaultConnection`, `Cors__Origins__0` = URL Pages
  - [ ] `dotnet ef database update` + import/sync dữ liệu
  - [ ] (Tuỳ chọn) Azure Speech key cho game phát âm
  - [ ] Health check: `GET /api/health`

  ### Vận hành
  - [ ] Backup PostgreSQL định kỳ
  - [ ] HTTPS trên cả frontend và API
  - [ ] Giám sát downtime (UptimeRobot free…)

  ---

  ## 8. Kết luận ngắn

  | Câu hỏi | Trả lời |
  |---|---|
  | Frontend lên GitHub Pages được không? | **Có** — đây là lựa chọn tốt |
  | Backend lên Vercel được không? | **Không** — không phù hợp stack .NET + Postgres |
  | DB free cho sản phẩm thật? | **Neon / Supabase** — được nếu quy mô vừa + có backup |
  | API free không ngủ? | **Oracle VM free** hoặc **máy trường** — không dùng Render free |
  | Combo cân bằng nhất (free, lâu dài) | **Pages + Oracle VM + Neon** |

  ---

  ## 9. File tham chiếu trong repo

  | File / thư mục | Nội dung |
  |---|---|
  | `frontend/` | React + Vite client |
  | `backend/` | ASP.NET Core API |
  | `backend/Data/Migrations/` | Schema PostgreSQL |
  | `frontend/public/assets/` | Ảnh & audio game |
  | `MIGRATION_DOTNET_REACT.md` | Hướng dẫn chạy local |
  | `home.html` (root) | Bản legacy GAS |

  ---

  *Tài liệu tạo để hỗ trợ quyết định hosting — cập nhật theo stack repo tại thời điểm migrate .NET + React.*
