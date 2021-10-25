FROM  node:latest as builder

RUN mkdir -p /home/react
WORKDIR /home/react

COPY --chown=root:root . .
USER root
RUN npm install
RUN npm run build


# => Run container
FROM nginx:1.15.2-alpine as release
# Nginx config
RUN rm -f /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /var/www/*

# Static build
COPY --from=builder /home/react/build /var/www


# Default port exposure
EXPOSE 80

