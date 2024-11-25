FROM node:lts-alpine AS base

# Load environment variables
ARG AUTH_SECRET
ARG AUTH_GITHUB_ID
ARG AUTH_GITHUB_SECRET
ARG AUTH_GOOGLE_ID
ARG AUTH_GOOGLE_SECRET

ENV AUTH_SECRET=${AUTH_SECRET} \
    AUTH_GITHUB_ID=${AUTH_GITHUB_ID} \
    AUTH_GITHUB_SECRET=${AUTH_GITHUB_SECRET} \
    AUTH_GOOGLE_ID=${AUTH_GOOGLE_ID} \
    AUTH_GOOGLE_SECRET=${AUTH_GOOGLE_SECRET} \
    AUTH_TRUST_HOST=true

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable pnpm && pnpm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]