FROM  node:latest as builder

RUN mkdir -p /home/node
WORKDIR /home/node

COPY --chown=node:node . .
USER node
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
COPY --from=builder /home/node/build /var/www


# Default port exposure
EXPOSE 80

