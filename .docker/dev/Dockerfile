#==================== Running Stage=======================#

# Create the image for the builder stage
FROM node:16-alpine

# Set /app as the working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package*.json yarn.lock ./

# Install dependencies in /app
RUN yarn install

# add app
COPY . ./

# Expose Port 3000 since this is our dev environment
EXPOSE 3000

# create build
CMD ["yarn", "dev"]