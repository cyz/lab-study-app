import { ChatMessage, AREA_MAPPING, LEVEL_MAPPING } from './types';

/**
 * Constrói o prompt para geração de plano de estudos
 * @param area Área de interesse
 * @param nivel Nível atual
 * @param tempo Horas disponíveis por semana
 * @param duracao Duração desejada em meses
 * @param objetivos Objetivos específicos (opcional)
 * @returns Array de mensagens formatadas para o modelo
 */
export function buildStudyPlanPrompt(
  area: string,
  nivel: string,
  tempo: number,
  duracao: number,
  objetivos?: string
): ChatMessage[] {
  const systemPrompt = `You are an expert in technology education with over 10 years of experience.
Your mission is to create personalized, practical, and realistic study plans for technology professionals.

GUIDELINES:
- ALWAYS respond in English
- Be specific with technologies, tools, and resources
- Include hands-on projects in each phase
- Consider the student's available time
- Provide detailed weekly schedule
- Suggest free resources when possible
- Include monthly evaluation milestones

RESPONSE FORMAT:
Structure as a professional plan with clear sections and specific schedule.`;

  const userPrompt = `Create a complete and personalized study plan for:

📊 STUDENT PROFILE:
- Area of interest: ${AREA_MAPPING[area] || area}
- Current level: ${LEVEL_MAPPING[nivel] || nivel}
- Available time: ${tempo} hours per week
- Desired duration: ${duracao} months
- Specific objectives: ${objetivos || 'Not specified'}

📋 REQUIRED STRUCTURE:

## 1. PROFILE ANALYSIS
- Assessment of current level
- Realistic expectations for available time

## 2. WEEKLY SCHEDULE
- Division of ${tempo} weekly hours
- Specific activities for each day
- Theory/practice balance

## 3. MONTHLY ROADMAP
- Objectives and deliverables for each month
- Progressive practical projects
- Evaluation milestones

## 4. RECOMMENDED RESOURCES
- Specific online courses (with links if possible)
- Relevant technical books
- Tools and technologies
- Communities and networking

## 5. PRACTICAL PROJECTS
- Project for each month
- Growth in complexity
- Professional portfolio

## 6. SUCCESS TIPS
- How to maintain motivation
- How to deal with difficulties
- Next steps after completion

Be specific, motivational and VERY practical!`;

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
}
