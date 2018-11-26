# Get latest nginx image 
FROM nginx
# Copy build into nginx image
COPY ./build/* ./
# Copy nginx config file to default.conf
COPY ./nginx.conf /default.conf
# Run server
CMD ["nginx", "-g", "daemon off;"]