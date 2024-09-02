#!/bin/bash

# Build the Docker image
docker build -t my-self-portfolio .

# Run the Docker container with volume mounting
docker run -d -p 8080:80 -v /c/Users/mechaerogautam/Dropbox/self_portfolio:/usr/share/nginx/html my-self-portfolio
