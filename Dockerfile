# Get latest nginx image 
FROM nginx@sha256:25dfd5639707178771a975038014083a92e27c9b15523a9ff00daa3a7e445ce1
# Copy build into nginx image
COPY ./build /var/www
# Copy nginx config file to default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Run server
# -g daemon off; is used so Docker can track the process properly,
# otherwise the container will stop immediately after starting
CMD ["nginx", "-g", "daemon off;"]
