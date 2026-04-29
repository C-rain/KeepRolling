# Keep 滑板教室純 SEO 官網

Keep 滑板教室官方網站已改為純前台 SEO 官網，主軸是台中滑板教學、台中滑板教室、台中滑板課程與滑板教練相關關鍵字。網站不包含會員、購物車、線上付款、訂單、後台或資料庫。

## 網站定位

- 預設語言：繁體中文
- 預設時區：`Asia/Taipei`
- 主要轉換：LINE 課程諮詢
- 保留頁面：首頁、課程介紹、課程詳細、教練團隊、滑板專欄、關於 Keep、聯絡我們
- 移除功能：會員、購物車、商店、結帳、金流、訂單、後台、Prisma、API routes

## SEO 關鍵字

網站內容聚焦以下搜尋意圖：

- 台中滑板教學
- 台中滑板教室
- 台中滑板課程
- 台中滑板教學推薦
- 滑板教學推薦
- 台中滑板課程推薦
- 台中滑板教室推薦
- 台中滑板教練

## 安裝與啟動

```bash
npm install
npm run dev
```

本機預覽：

- [http://localhost:3000](http://localhost:3000)

## 環境變數

建立 `.env`：

```powershell
Copy-Item .env.example .env
```

目前只需要前台設定：

```env
APP_BASE_URL="http://localhost:3000"
APP_TIMEZONE="Asia/Taipei"
NEXT_PUBLIC_SITE_NAME="Keep 滑板教室"
NEXT_PUBLIC_LINE_URL="https://lin.ee/keep-skate-class"
NEXT_PUBLIC_CONTACT_PHONE="04-2378-8808"
NEXT_PUBLIC_CONTACT_EMAIL="hello@keepskateclass.tw"
```

## 內容維護

主要內容集中在：

- `src/content/site-content.ts`

可在這裡維護：

- 站點名稱、電話、Email、LINE、地址、地圖
- 課程介紹與課程 FAQ
- 教練資料
- 部落格文章
- SEO 關鍵字

## SEO 實作

- `src/lib/seo.ts`：metadata、canonical、Open Graph、Twitter card、JSON-LD helper
- `src/app/sitemap.ts`：公開頁面 sitemap
- `src/app/robots.ts`：robots 設定，封鎖 `/api/`
- JSON-LD：`LocalBusiness`、`Course`、`Article`、`FAQPage`、`BreadcrumbList`

## 驗證指令

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

測試重點：

- 不存在購物車、結帳、會員、金流、後台與資料庫路由
- 所有 SEO 關鍵字有內容承接
- 導覽只保留公開 SEO 頁面
- LocalBusiness 與 Course structured data 可正常輸出

## 部署到 Vercel

Vercel 可使用預設設定：

- Install Command：`npm install`
- Build Command：`npm run build`
- Output：Next.js 預設

上線前請更新：

- `APP_BASE_URL` 為正式網域
- `NEXT_PUBLIC_LINE_URL` 為正式 LINE 官方帳號連結
- 電話、Email、地址、Google Map、教練與課程內容

## 明確不包含

此版本不包含：

- 線上購物與商品頁
- 線上付款與金流
- 會員登入與會員中心
- 訂單管理
- 管理後台
- 資料庫與 Prisma
- 課程時段預約
