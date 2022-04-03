#==================== Dependencies Stage =======================#

# Create the image based on the official latest Node image from Dockerhub
FROM node:16-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# Set /app as the working directory
WORKDIR /app

# Copy dependency definitions
COPY package.json yarn.lock ./

# Install dependencies in /app
RUN yarn install --frozen-lockfile


#==================== Building Stage =======================#

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

# Set /app as the working directory
WORKDIR /app

# Get all the code needed to run the app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

#Build the app
RUN yarn build


#==================== Running Stage =======================#

# Production image, copy all the files and run next
FROM node:16-alpine AS runner

# Set /www as the working directory
WORKDIR /app

# Set the node envinroment
ENV NODE_ENV production

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Expose the listening port
EXPOSE 3000
ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]