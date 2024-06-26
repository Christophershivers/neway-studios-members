FROM node:18-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=Europe/Stockholm
ARG PUBLIC_HELLO
ARG DB_URL

ENV DB_URL=$DB_URL

COPY . /usr/src/app
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install
RUN npm run build

FROM node:19.7-alpine
WORKDIR /usr/src/app

ARG TZ=Europe/Stockholm
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json
RUN npm i --only=production

COPY --from=sk-build /usr/src/app/build /usr/src/app/build

EXPOSE 3005
CMD ["node", "build/index.js"]