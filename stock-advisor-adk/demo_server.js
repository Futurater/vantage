const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  if (req.method === 'POST' && req.url === '/analyze') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const symbol = (data.symbol || 'UNKNOWN').toString().toUpperCase();
        const demo = {
          company_overview: `${symbol} is a major company in its sector. This is a brief demo overview.`,
          market_sentiment: 'neutral - stable revenue, mixed growth indicators',
          suggestion: 'hold',
          reasoning: 'The company shows steady fundamentals but lacks near-term catalysts for strong growth.',
          confidence: 'low',
          disclaimer: 'This is not financial advice.'
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(demo));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'invalid json' }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(port, () => console.log(`Demo server listening on ${port}`));
