# Tutorial do Laboratório

**Idiomas disponíveis**: [English](../../README.md), [Português (Brasil) (começa aqui)](README.md) e [Español](../es/README.md).

## 📚 Partes do Laboratório

> **Nota:** Os tutoriais detalhados em português estão em processo de tradução. Enquanto isso, consulte a [versão em inglês](../../README.md) que foi completamente atualizada para Next.js.

1. [Configuração do Ambiente e Introdução ao StudyPlan AI](../../01-step.md)
2. [Visão Geral da Estrutura da Aplicação](../../02-step.md)
3. [Rotas de API e Integração com IA](../../03-step.md)
4. [Construção da Interface do Usuário](../../04-step.md)
5. [Criação de Prompts para IA](../../05-step.md)
6. [Adicionar Validação de Formulários](../../06-step.md)
7. [Criar Modos de Chat Personalizados para Testes de Acessibilidade](../../07-step.md)
8. [Commit e Revisão de Código com GitHub Copilot](../../08-step.md)
9. [Revisão e Próximos Passos](../../09-step.md)

## 🔄 Mudanças Importantes

Esta aplicação migrou de **Python/Flask** para **Next.js/React**. As principais mudanças incluem:

- **Frontend**: Agora usa React com Next.js para renderização no lado do servidor
- **Backend**: API Routes do Next.js ao invés de Flask
- **Estilização**: Tailwind CSS para design moderno e responsivo
- **TypeScript**: Maior segurança de tipos e melhor experiência de desenvolvimento
- **Arquitetura**: Aplicação full-stack moderna com hot-reload

## 🚀 Início Rápido

```bash
# Instalar dependências
npm install

# Configurar token do GitHub
# Criar .env.local e adicionar: GITHUB_TOKEN=seu_token_aqui

# Iniciar servidor de desenvolvimento
npm run dev

# Abrir http://localhost:3000
```

## 📖 Recursos Adicionais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do React](https://react.dev)
- [GitHub Models](https://github.com/marketplace/models)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 💡 Principais Benefícios da Migração

1. **Performance**: Renderização no servidor e otimizações automáticas
2. **Experiência do Desenvolvedor**: Hot-reload instantâneo e TypeScript
3. **SEO**: Melhor indexação com Server-Side Rendering
4. **Escalabilidade**: Arquitetura moderna e preparada para crescimento
5. **Manutenibilidade**: Código mais organizado e testável

---

Para o conteúdo completo e atualizado, consulte os tutoriais em [inglês](../../README.md).
