#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Installing dependencies from requirements.txt..."
pip install -r requirements.txt

echo "Dependencies installed successfully."
