FROM node:18-alpine AS builder
WORKDIR /app

ENV NODE_OPTIONS="--max_old_space_size=4096"

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN npm run build


FROM node:18-alpine
WORKDIR /app


COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/.next /app/.next

RUN npm install --production

EXPOSE 3000
CMD ["npm", "start"]
