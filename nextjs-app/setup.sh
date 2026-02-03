#!/bin/bash

# 🚀 Script de Setup Rápido - StudyPlan AI Next.js

set -e

echo "🎓 StudyPlan AI - Next.js Setup"
echo "================================"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado!"
    echo "📥 Instale Node.js 18+ em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) encontrado"
echo ""

# Verificar se npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado!"
    exit 1
fi

echo "✅ npm $(npm -v) encontrado"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

echo ""
echo "✅ Dependências instaladas!"
echo ""

# Configurar .env
if [ ! -f .env ]; then
    echo "🔐 Configurando variáveis de ambiente..."
    cp .env.example .env
    echo "⚠️  IMPORTANTE: Edite o arquivo .env e adicione seu GITHUB_TOKEN"
    echo ""
    echo "   1. Acesse: https://github.com/settings/tokens"
    echo "   2. Crie um novo token"
    echo "   3. Adicione no arquivo .env"
    echo ""
else
    echo "✅ Arquivo .env já existe"
    echo ""
fi

echo "🎉 Setup concluído!"
echo ""
echo "📝 Próximos passos:"
echo "   1. Configure seu GITHUB_TOKEN no arquivo .env"
echo "   2. Execute: npm run dev"
echo "   3. Acesse: http://localhost:3000"
echo ""
echo "📚 Documentação:"
echo "   - README.md: Instruções gerais"
echo "   - MIGRATION_GUIDE.md: Comparação Python vs Next.js"
echo ""
