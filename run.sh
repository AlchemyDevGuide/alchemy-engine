#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Running requirements.sh..."
bash requirements.sh

echo "Starting the application..."
# Replace this with your actual command to run the application
python main.py
