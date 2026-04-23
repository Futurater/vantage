Render deployment steps for this monorepo
========================================

This repository contains multiple services in subfolders:

- `backend/` — Node/Express API (port 3002)
- `frontend/` — Landing site (Create React App)
- `dashboard/` — React dashboard (Create React App)
- `stock-advisor-adk/` — Demo advisor (Node fallback `demo_server.js`)

Guidance to deploy each on Render (manual steps via Render dashboard):

1) Create Backend (Web Service)
  - In Render: New -> Web Service
  - Connect your repo and pick the branch
  - Root Directory: `backend` (set in the UI)
  - Environment: `Node` (select Node 18)
  - Build Command: `npm install`
  - Start Command: `node index.js` (or leave to use `npm start` which is now `node index.js`)
  - Set Environment Variables:
    - `MONGO_URL` (or `MONGO_URI`) — your MongoDB connection string (MongoDB Atlas recommended)
    - `JWT_SECRET` — a secure secret for signing JWTs
    - Optionally `NODE_ENV=production`
  - Health Check Path: `/me` or `/allHoldings`

2) Create Dashboard (Static Site)
  - In Render: New -> Static Site
  - Root Directory: `dashboard`
  - Build Command: `npm install && npm run build`
  - Publish Directory: `build`
  - (No start command required)
  - After deploy, note the generated site URL (e.g. `https://your-dashboard.onrender.com`).

3) Create Frontend (Landing) (Static Site)
  - In Render: New -> Static Site
  - Root Directory: `frontend`
  - Build Command: `npm install && npm run build`
  - Publish Directory: `build`
  - After deploy, use the site URL as your public landing page.

4) Create Stock Advisor Demo (Web Service)
  - In Render: New -> Web Service
  - Root Directory: `stock-advisor-adk`
  - Environment: `Node` (we added a minimal `package.json` that runs `demo_server.js`)
  - Build Command: `npm install`
  - Start Command: `npm start`
  - (Optional) Set `GOOGLE_API_KEY` if you plan to run the Python Gemini integration; the Node demo returns canned responses.

Notes & tips
-----------
- The project is a monorepo; when creating each service in Render, make sure to set the "Root Directory" to the subfolder for that service.
- Backend `CORS` is enabled; restrict `Origin` in production if you want tighter security. You can set `CORS_ORIGIN` env var and use middleware to permit only your deployed frontends.
- For production, use a managed MongoDB (Atlas) and set `MONGO_URL` in Render's environment variables.
- Configure `JWT_SECRET` to a secure value via Render's Dashboard (Environment -> Environment Variables).
- If you prefer to automate everything, create a `render.yaml` and use the Render Dashboard CLI — the instructions above map to the fields used in `render.yaml`.

Post-deploy checks
------------------
- Backend: `curl https://<backend-url>/me` with `Authorization: Bearer <token>` to validate user endpoint.
- Dashboard & Landing: Open the static site URLs. Login/signup on the landing should redirect to the dashboard with `?token=...` and the dashboard will persist it.

If you'd like, I can also:
- Create a `render.yaml` to declare all services in this repo (I can add placeholders for repo/branch and env var names).
- Add a small server health-check endpoint or readiness probe.

GitHub Actions (optional)
-------------------------
I added a GitHub Actions workflow `.github/workflows/render-deploy.yml` that can trigger Render deploys via the Render API when you push to `main`.

To use the workflow you must add the following GitHub Secrets in your repository settings:

- `RENDER_API_KEY` — a Render API key (create in Render dashboard)
- `RENDER_SERVICE_ID_BACKEND` — Render service ID for the backend Web Service
- `RENDER_SERVICE_ID_DASHBOARD` — Render service ID for the dashboard Static Site
- `RENDER_SERVICE_ID_FRONTEND` — Render service ID for the landing Static Site
- `RENDER_SERVICE_ID_ADVISOR` — Render service ID for the stock-advisor Web Service (optional)

The workflow will call the Render API to trigger deploys for each configured service id.
