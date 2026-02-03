import { z } from 'zod';

/**
 * Schema de validação para requisição de plano de estudo
 * Zod fornece validação em runtime + inferência de tipos TypeScript
 */
export const StudyPlanRequestSchema = z.object({
  area: z.enum(['backend', 'frontend', 'fullstack', 'data_science', 'ai_ml'], {
    required_error: 'Área é obrigatória',
    invalid_type_error: 'Área inválida',
  }),
  nivel: z.enum(['iniciante', 'intermediario', 'avancado'], {
    required_error: 'Nível é obrigatório',
    invalid_type_error: 'Nível inválido',
  }),
  tempo_semanal: z.number().int().min(1).max(40, 'Máximo de 40 horas por semana'),
  duracao_meses: z.number().int().min(1).max(24, 'Máximo de 24 meses'),
  objetivos_especificos: z.string().optional(),
});

/**
 * Schema de validação para resposta de plano de estudo
 */
export const StudyPlanResponseSchema = z.object({
  plano_estruturado: z.string(),
  sucesso: z.boolean(),
  metadata: z.record(z.any()).optional(),
  erro: z.string().optional(),
});

// Inferir tipos TypeScript dos schemas Zod
export type StudyPlanRequest = z.infer<typeof StudyPlanRequestSchema>;
export type StudyPlanResponse = z.infer<typeof StudyPlanResponseSchema>;

// Tipos adicionais para o cliente GitHub
export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ChatCompletionOptions {
  messages: ChatMessage[];
  temperature?: number;
  max_tokens?: number;
}

// Mapeamentos de área e nível
export const AREA_MAPPING: Record<string, string> = {
  backend: 'Backend Development',
  frontend: 'Frontend Development',
  fullstack: 'Full-Stack Development',
  data_science: 'Data Science',
  ai_ml: 'Artificial Intelligence and Machine Learning',
};

export const LEVEL_MAPPING: Record<string, string> = {
  iniciante: 'Beginner (little or no experience)',
  intermediario: 'Intermediate (has been programming for some time)',
  avancado: 'Advanced (significant professional experience)',
};
