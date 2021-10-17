FROM  node:latest as builder

RUN mkdir -p /home/node
WORKDIR /home/node

COPY --chown=root:root . .
USER root
RUN chmod +x runner.sh
RUN npm install

RUN npm install -g sequelize-cli

# Default port exposure
EXPOSE 3001

CMD ["./runner.sh"]
# CMD ["/bin/sh",  "-c",  "envsubst < /var/www/assets/env.template.js > /var/www/assets/env.js && exec nginx -g 'daemon off;'"]

