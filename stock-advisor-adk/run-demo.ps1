# run-demo.ps1 - Run the stock advisor demo locally
# Usage: Open PowerShell in the workspace root and run:
#  .\Zerodha\stock-advisor-adk\run-demo.ps1

function Has-Command($name) {
    $cmd = Get-Command $name -ErrorAction SilentlyContinue
    return $null -ne $cmd
}

if (Has-Command "python") {
    Write-Host "Python found. Setting up virtualenv and running demo..."
    python -m venv venv
    . .\venv\Scripts\Activate.ps1
    pip install -r ".\Zerodha\stock-advisor-adk\requirements.txt"
    $env:GOOGLE_API_KEY = 'MOCK'
    $env:PORT = '8080'
    Write-Host "Starting the app (foreground). Press Ctrl+C to stop."
    python .\Zerodha\stock-advisor-adk\main.py
    exit 0
}

if (Has-Command "docker") {
    Write-Host "Docker found. Building and running container (demo mode)..."
    docker build -t stock-advisor-adk "Zerodha\stock-advisor-adk"
    docker run -d -e GOOGLE_API_KEY=MOCK -p 8080:8080 --name stock-advisor-adk stock-advisor-adk
    Write-Host "Container started. Access http://localhost:8080/analyze"
    exit 0
}

Write-Host "Neither Python nor Docker was found on this machine."
Write-Host "Please install one of them, then re-run this script."
Write-Host "Python (recommended): https://www.python.org/downloads/"
Write-Host "Docker Desktop: https://www.docker.com/get-started"
Write-Host "After installing Python, run these commands manually in PowerShell:"
Write-Host "  python -m venv venv"
Write-Host "  . .\venv\Scripts\Activate.ps1"
Write-Host "  pip install -r \"Zerodha\stock-advisor-adk\requirements.txt\""
Write-Host "  $env:GOOGLE_API_KEY='MOCK'"
Write-Host "  python .\Zerodha\stock-advisor-adk\main.py"
