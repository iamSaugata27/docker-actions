FROM node:alpine
COPY . .
RUN npm install
# ARG LANGUAGE
# ARG DEV
ENV LANGUAGE=$LANGUAGE
ENV DEV=$DEV
CMD [ "npm","run","server" ]