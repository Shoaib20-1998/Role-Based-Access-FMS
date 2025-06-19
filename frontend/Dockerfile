# frontend/Dockerfile

# Step 1: Build the app
FROM node:18 as builder

WORKDIR /app

COPY package*.json  ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve the build
FROM node:18

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
