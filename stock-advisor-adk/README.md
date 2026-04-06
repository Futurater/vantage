Stock Advisor ADK (minimal)

Overview

This is a minimal Python HTTP agent that uses Google's Generative API (Gemini) to produce a brief stock analysis and a buy/sell/hold suggestion. It is intentionally minimal for a hackathon submission.

Files

- main.py — Flask app with POST /analyze
- requirements.txt — Python dependencies
- Dockerfile — Build image for Cloud Run

Setup

1. Configure environment variables (locally or in Cloud Run):
   - `GOOGLE_API_KEY` — your Google API key or service account key set up for the Generative API
   - `MODEL` — optional, the Gemini model id (e.g. `gemini-1.5` or a model you have access to). Defaults to `gemini-1.5`.

2. Run locally (example):

```bash
python -m venv venv
. venv/Scripts/activate   # Windows
pip install -r requirements.txt
set GOOGLE_API_KEY=your_key_here
python main.py
```

3. Example request:

```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"symbol": "RELIANCE"}' \
  http://localhost:8080/analyze
```

Response JSON (example keys):

- `company_overview`
- `market_sentiment`
- `suggestion`
- `reasoning`
- `confidence`
- `disclaimer` — This is not financial advice.

Deploy to Cloud Run

Build and push image (example):

```bash
gcloud builds submit --tag gcr.io/PROJECT-ID/stock-advisor-adk
gcloud run deploy stock-advisor-adk --image gcr.io/PROJECT-ID/stock-advisor-adk --platform managed --region REGION --allow-unauthenticated --set-env-vars GOOGLE_API_KEY=YOUR_KEY,MODEL=gemini-1.5
```

Notes & limitations

- This project is a minimal template. You'll need a valid Google API key and access to a Gemini model to produce meaningful results.
- The service intentionally includes the disclaimer "This is not financial advice." in every response.
- Adjust the prompt and parsing logic in `main.py` to suit your API response shape or preferred Gemini model.

License

MIT (use at your own risk)