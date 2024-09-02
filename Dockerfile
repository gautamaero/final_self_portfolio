# Use an official nginx image as the base image
FROM nginx:alpine

# Copy the HTML and CSS files to the nginx web directory
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
