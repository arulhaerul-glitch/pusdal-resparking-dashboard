#!/bin/bash

# Automated Setup Script for Resparking Dashboard

# Exit on error
set -e

# Update package lists
apt-get update

# Install necessary packages
apt-get install -y package1 package2 package3

# Clone the repository
git clone https://github.com/arulhaerul-glitch/pusdal-resparking-dashboard.git

# Navigate into the project directory
cd pusdal-resparking-dashboard

# Install dependencies
npm install

# Run the application
npm start

echo "Setup completed successfully!"