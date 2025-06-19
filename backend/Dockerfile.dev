# Use base image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port (optional, just for documentation)
EXPOSE 5000

# Start server
CMD ["npm", "run", "dev"]
