# Get latest nginx image 
FROM nginx
# Copy build into nginx image
COPY ./build/* /usr/share/nginx/html/
# Copy nginx config file to default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Run server
CMD ["nginx", "-g", "daemon off