# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/main/containers/javascript-node

# [Choice] Node.js version
ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

## Set environment variables
ENV NODE_ENV=development

## Set working directory
WORKDIR /workspaces/lab-study-app

## Copy package files and install dependencies
COPY nextjs-app/package*.json ./nextjs-app/
RUN cd nextjs-app && npm install

## Expose the port used by Next.js
EXPOSE 3000

## Set default command
CMD ["bash", "-c", "cd nextjs-app && npm run dev"]
