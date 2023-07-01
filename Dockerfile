# Build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Production stage
FROM node:18-alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/build ./build
RUN npm install -g serve
CMD ["serve", "-s", "build"]