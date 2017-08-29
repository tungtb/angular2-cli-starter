FROM nginx

MAINTAINER tungtb <tranbatungbk@gmail.com>

# Install NPM
#RUN npm install && npm run build:prod

# Bundle app source
COPY dist /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

EXPOSE 80
