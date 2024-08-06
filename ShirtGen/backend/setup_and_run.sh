#!/bin/bash

# Check if virtual environment directory exists
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install required packages
echo "Installing dependencies..."
pip install -r requirements.txt

# Start FastAPI server
echo "Starting FastAPI server..."
python3 -m uvicorn app.main:app --reload &

# Keep the script running
echo "Press Ctrl+C to exit"
wait