
.PHONY: install dev build start test lint format clean help

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install project dependencies
	@echo "Installing dependencies..."
	npm install

dev: ## Run the development server
	@echo "Starting development server..."
	npm run dev

build: ## Build the application for production
	@echo "Building application..."
	npm run build

start: ## Start the production server
	@echo "Starting production server..."
	npm start

test: ## Run tests
	@echo "Running tests..."
	npm test

lint: ## Run code linting with ESLint
	@echo "Linting code..."
	npm run lint

format: ## Format code using Prettier
	@echo "Formatting code..."
	npm run format

clean: ## Remove temporary files and caches
	@echo "Cleaning temporary files..."
	rm -rf .next
	rm -rf node_modules
	rm -rf out
	find . -type f -name "*.log" -delete

build: ## Build Docker image
	@echo "Building Docker image..."
	docker build -t lab-study-app -f .devcontainer/Dockerfile .

docker-run: ## Run the application in Docker
	@echo "Running application in Docker..."
	docker run -p 8000:8000 lab-study-app
