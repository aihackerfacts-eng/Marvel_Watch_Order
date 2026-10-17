# Marvel Watch Order — upgraded starter project

## Features
- Responsive desktop/mobile layout with mobile navigation
- Toggle between release order and an **approximate** MCU story order
- Search and filters by title, type, year and watched status
- Poster image paths (TMDB-style). Some may need verification/replacement; see image notes below.
- Official India streaming-service links and JustWatch India search
- Local progress without an account
- Optional Supabase email/password accounts and per-user cloud watch-progress sync

## Folder structure
```text
marvel-watch-order-v2/
├── index.html
├── style.css
├── script.js
├── config.example.js
├── schema.sql
└── README.md
```
After copying `config.example.js` to `config.js`, that file is added locally and used by the page. Keep `config.js` out of public source control if you later add private project metadata. The browser Supabase anon/public key is designed to be public; never use a service-role key in frontend code.

## Run locally on Windows 11
1. Extract the ZIP.
2. Double-click `index.html` to preview the site. Browsing features and local progress work without Supabase.
3. For auth/cloud sync, use a local static server instead of opening as `file://`:
   - Install Python from python.org if needed.
   - Open PowerShell in this folder.
   - Run `py -m http.server 8000`
   - Open `http://localhost:8000`
   - Stop server with Ctrl+C.

## Enable accounts and cloud sync with Supabase (free tier may be available)
1. Create a project at https://supabase.com/ and wait for provisioning.
2. Open Project Settings → API. Copy the **Project URL** and **anon/public key**.
3. Copy `config.example.js` and name the copy `config.js`.
4. Paste the Project URL into `supabaseUrl` and anon/public key into `supabaseAnonKey`. Do NOT paste a service_role/secret key.
5. In Supabase → SQL Editor, run the contents of `schema.sql`.
6. In Supabase → Authentication → URL Configuration, add `http://localhost:8000` to the allowed redirect/site URLs as appropriate.
7. In Authentication settings, configure email confirmation to suit your test setup. For real deployments, keep confirmation enabled.
8. Start the local server using the steps above, create an account, and mark a title watched. Sign in on another browser/device to load the same cloud progress.
9. For production, configure the deployed domain in Supabase Auth URL settings and use HTTPS.

## Important limitations / fixes before public launch
- The story order is an editorial approximation, not an official definitive timeline. Multiverse stories, shorts, season boundaries and overlapping events can be debated; adjust `story` values in `script.js` as you prefer.
- Poster paths are illustrative TMDB-style paths and some entries may be missing or invalid. Verify each image against the right title. TMDB has its own API and image-use terms; obtain permission or use a licensed image source before public/commercial deployment. Do not scrape or redistribute copyrighted artwork without checking rights.
- Streaming links lead to official provider destinations or JustWatch India. They do not guarantee a title is available, included in a subscription, available in Hindi, or free. Verify the exact title/language/price with the provider.
- The catalogue is a starter set of MCU and selected Marvel Studios projects, not every Marvel adaptation. Verify current release status, years and upcoming dates before launch.
- This is a static frontend plus Supabase hosted auth/database; no custom server is needed. Supabase security relies on the provided RLS policies. Do not disable RLS.
