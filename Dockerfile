# syntax = docker/dockerfile:1
ARG BUN_VERSION=1.4.4
FROM oven/bun:${BUN_VERSION}-slim AS base
WORKDIR /app

FROM base AS build
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3
COPY package.json bun.lock ./
COPY vendor/braces-3.0.4-local.4.tgz ./vendor/braces-3.0.4-local.4.tgz
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM base
ENV NODE_ENV=production
COPY --from=build /app /app
USER bun
EXPOSE 3080
CMD ["bun", "module/cli.ts", "server"]
