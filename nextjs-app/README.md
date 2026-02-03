# StudyPlan AI - Next.js Version

> 🎓 Migração da aplicação StudyPlan AI de Python/Flask para **Next.js 14 + TypeScript**

## 🚀 Stack Tecnológica

- **Next.js 14** (App Router) - Framework React para produção
- **TypeScript** - Type safety e melhor DX
- **Tailwind CSS** - Estilização utilitária
- **Zod** - Validação de schemas e tipos
- **GitHub Models** - IA via Azure OpenAI SDK
- **React Markdown** - Renderização de Markdown

## 📦 Instalação

```bash
cd nextjs-app

# Instalar dependências
npm install

# Copiar arquivo de ambiente
cp .env.example .env

# Adicionar seu GitHub Token no .env
# GITHUB_TOKEN=seu_token_aqui
```

## 🔑 Obter GitHub Token

1. Acesse: https://github.com/settings/tokens
2. Crie um novo token (classic)
3. Dê permissões necessárias para GitHub Models
4. Copie o token para o arquivo `.env`

## 🏃 Executar

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start

# Verificar tipos TypeScript
npm run type-check

# Linter
npm run lint
```

## 📁 Estrutura do Projeto

```
nextjs-app/
├── app/
│   ├── api/
│   │   └── generate-plan/
│   │       └── route.ts          # API endpoint POST /api/generate-plan
│   ├── layout.tsx                # Layout principal da aplicação
│   ├── page.tsx                  # Homepage com dashboard
│   └── globals.css               # Estilos globais + Tailwind
├── components/
│   ├── StudyPlanForm.tsx         # Formulário de entrada
│   └── StudyPlanResult.tsx       # Display do plano gerado
├── lib/
│   ├── types.ts                  # Tipos TypeScript + Schemas Zod
│   ├── github-client.ts          # Cliente GitHub Models API
│   └── prompts.ts                # Builders de prompts para IA
├── public/                       # Assets estáticos
├── package.json                  # Dependências e scripts
├── tsconfig.json                 # Configuração TypeScript
├── tailwind.config.js            # Configuração Tailwind
├── next.config.js                # Configuração Next.js
└── .env                          # Variáveis de ambiente
```

## 🎯 Principais Diferenças da Versão Python

### ✅ Melhorias

1. **Type Safety com TypeScript**
   - Erros detectados em tempo de desenvolvimento
   - IntelliSense completo no VS Code
   - Refatoração segura

2. **Validação com Zod**
   - Runtime validation + type inference
   - Mensagens de erro claras
   - Integração perfeita com TypeScript

3. **Next.js App Router**
   - Server Components por padrão
   - API Routes nativas
   - Melhor performance e SEO
   - Hot reload instantâneo

4. **Componentes React**
   - UI componentizada e reutilizável
   - Estado gerenciado com hooks
   - Renderização eficiente

### 🔄 Equivalências

| Python/Flask | Next.js/TypeScript |
|--------------|-------------------|
| `app.py` | `app/layout.tsx` + `app/page.tsx` |
| `app/api/api.py` | `app/api/generate-plan/route.ts` |
| `app/services/github_client.py` | `lib/github-client.ts` |
| `app/services/prompts.py` | `lib/prompts.ts` |
| `app/models/__init__.py` | `lib/types.ts` |
| `app/templates/index.html` | `app/page.tsx` + `components/` |
| `requirements.txt` | `package.json` |

## 🧪 Exemplo de Uso do Zod

```typescript
// Define o schema
const UserSchema = z.object({
  name: z.string().min(3),
  age: z.number().min(18),
});

// Valida dados
const result = UserSchema.parse({ name: "João", age: 25 });
// ✅ result é tipado automaticamente!

// Se falhar, lança ZodError com detalhes
```

## 🔧 Configuração do GitHub Models

O cliente usa `@azure/openai` que é compatível com GitHub Models:

```typescript
const client = new OpenAIClient(
  'https://models.inference.ai.azure.com',
  new AzureKeyCredential(process.env.GITHUB_TOKEN!)
);
```

## 📝 API Endpoint

**POST** `/api/generate-plan`

```json
{
  "area": "backend",
  "nivel": "intermediario",
  "tempo_semanal": 10,
  "duracao_meses": 3,
  "objetivos_especificos": "Aprender Node.js e TypeScript"
}
```

**Response:**
```json
{
  "plano_estruturado": "# PLANO DE ESTUDOS...",
  "sucesso": true,
  "metadata": {
    "area": "backend",
    "nivel": "intermediario",
    "tempo_semanal": 10,
    "duracao_meses": 3
  }
}
```

## 🎨 Personalização

### Adicionar novos campos no formulário

1. Atualizar schema em [`lib/types.ts`](lib/types.ts)
2. Atualizar form em [`components/StudyPlanForm.tsx`](components/StudyPlanForm.tsx)
3. Atualizar prompt em [`lib/prompts.ts`](lib/prompts.ts)

### Customizar estilos

Edite [`tailwind.config.js`](tailwind.config.js) para mudar cores do tema:

```js
colors: {
  primary: {
    500: '#SUA_COR',
    // ...
  }
}
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Zod Documentation](https://zod.dev/)
- [GitHub Models](https://github.com/marketplace/models)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

MIT License - veja [LICENSE](../LICENSE)
