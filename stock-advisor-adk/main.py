import os
import json
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from google import genai
from google.genai import types
from dotenv import load_dotenv

from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI(
    title="Stock Advisor Agent",
    description="A minimalist Google ADK Stock Advisor agent powered by Gemini."
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class StockRequest(BaseModel):
    symbol: str

class StockResponse(BaseModel):
    company_overview: str
    market_sentiment: str
    suggestion: str
    reasoning: str
    disclaimer: str

@app.post("/analyze", response_model=StockResponse)
def analyze_stock(request: StockRequest):
    if not request.symbol:
        raise HTTPException(status_code=400, detail="Stock symbol is required.")
    
    # Needs GEMINI_API_KEY environment variable set
    try:
        client = genai.Client()
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to initialize Gemini Client. Make sure GEMINI_API_KEY is set.")
    
    prompt = f"""
    You are an expert Stock Advisor Agent. Analyze the stock for the symbol or company name: {request.symbol}.
    You must return a JSON response strictly adhering to the following structure:
    {{
        "company_overview": "A brief overview of the company's business model and sector",
        "market_sentiment": "Current market sentiment regarding this stock",
        "suggestion": "Buy, Sell, or Hold",
        "reasoning": "A concise reasoning for your buy/sell/hold suggestion",
        "disclaimer": "This is artificial intelligence-generated analysis and does not constitute financial advice. Please consult a qualified financial advisor before making any investment decisions."
    }}
    Important: The response must be pure JSON, ready to be parsed. Always emphasize that this is NOT financial advice.
    """

    try:
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                temperature=0.2,
            ),
        )
        
        result = json.loads(response.text)
        
        # Ensure 'disclaimer' is always present in the response
        if 'disclaimer' not in result or "not financial advice" not in result['disclaimer'].lower():
            result['disclaimer'] = "WARNING: This is AI-generated analysis and NOT financial advice. Please consult a professional advisor."
            
        return StockResponse(**result)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    # Cloud Run assigns port dynamically via the PORT environment variable.
    port = int(os.environ.get("PORT", 7321))
    uvicorn.run(app, host="0.0.0.0", port=port)
