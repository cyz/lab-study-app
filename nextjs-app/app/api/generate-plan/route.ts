import { NextRequest, NextResponse } from 'next/server';
import { StudyPlanRequestSchema } from '@/lib/types';
import { GitHubModelsClient } from '@/lib/github-client';
import { buildStudyPlanPrompt } from '@/lib/prompts';

/**
 * API Route: POST /api/generate-plan
 * Gera um plano de estudos personalizado usando GitHub Models
 */
export async function POST(request: NextRequest) {
  try {
    // Parse e valida o body da requisição com Zod
    const body = await request.json();
    const validatedData = StudyPlanRequestSchema.parse(body);

    // Inicializa o cliente GitHub Models
    const githubClient = new GitHubModelsClient();

    // Constrói o prompt baseado nos dados validados
    const messages = buildStudyPlanPrompt(
      validatedData.area,
      validatedData.nivel,
      validatedData.tempo_semanal,
      validatedData.duracao_meses,
      validatedData.objetivos_especificos
    );

    // Chama a API do GitHub Models
    const plan = await githubClient.chatCompletion({
      messages,
      temperature: 0.7,
      max_tokens: 2000,
    });

    // Retorna a resposta estruturada
    return NextResponse.json({
      plano_estruturado: plan,
      sucesso: true,
      metadata: {
        area: validatedData.area,
        nivel: validatedData.nivel,
        tempo_semanal: validatedData.tempo_semanal,
        duracao_meses: validatedData.duracao_meses,
      },
    });
  } catch (error) {
    // Tratamento de erros de validação do Zod
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          sucesso: false,
          erro: 'Dados inválidos',
          detalhes: error.message,
        },
        { status: 400 }
      );
    }

    // Outros erros
    console.error('Error generating study plan:', error);
    return NextResponse.json(
      {
        sucesso: false,
        erro: error instanceof Error ? error.message : 'Erro desconhecido',
      },
      { status: 500 }
    );
  }
}

// Configuração da rota
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
