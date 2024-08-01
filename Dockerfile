# Get latest nginx image 
FROM nginx@sha256:6af79ae5de407283dcea8b00d5c37ace95441fd58a8b1d2aa1ed93f5511bb18c
# Copy build into nginx image
COPY ./build /var/www
# Copy nginx config file to default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Run server
# -g daemon off; is used so Docker can track the process properly,
# otherwise the container will stop immediately after starting
CMD ["nginx", "-g", "daemon off;"]
