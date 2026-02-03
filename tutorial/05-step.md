# Step 5: Crafting Prompts for AI

> **Summary:**
> In this step, you'll learn how to craft effective prompts for AI content generation. You'll implement a structured prompt system that produces high-quality, personalized study plans.

## Understanding AI Prompts

The quality of AI-generated study plans depends on how prompts are written. A robust prompt system typically includes:

* **System Message** – Defines the AI's role, expertise, and behavioral guidelines
* **User Message** – Contains the specific request with structured data

## ⌨️ Activity: Create Prompt Templates

Let's implement a prompt builder that creates personalized, effective prompts for study plan generation.

1. Create or open `nextjs-app/lib/prompts.ts`.

2. Use Copilot to implement the prompt functions:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Create TypeScript functions for building AI prompts with these requirements:
   >
   > **System Prompt Function:**
   > - Define the AI as an education specialist with 10+ years of experience
   > - Instruct to create practical, structured, and realistic plans
   > - Request inclusion of hands-on projects and specific resources
   > - Emphasize progressive learning and clear milestones
   >
   > **User Prompt Function:**
   > - Accept parameters: area, level, weeklyHours, durationMonths, objectives
   > - Create a detailed request template using these parameters
   > - Request weekly schedules, specific resources, practical projects
   > - Ask for monthly evaluation milestones
   > - Return properly formatted string
   >
   > **Main Builder Function:**
   > - Combine system and user prompts
   > - Return an array of message objects compatible with Azure AI
   > - Include proper TypeScript types and interfaces
   > ```

3. Your prompt structure should look like this:

```typescript
export interface StudyPlanRequest {
  area: string;
  level: string;
  weeklyHours: number;
  durationMonths: number;
  specificObjectives: string;
}

export function buildStudyPlanPrompt(request: StudyPlanRequest) {
  const systemPrompt = getSystemPrompt();
  const userPrompt = getUserPrompt(request);
  
  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt }
  ];
}
```

## ⌨️ Activity: Test Different Prompt Variations

Let's test how different prompts affect the AI's output quality.

1. Create a test file or use the Copilot Chat to test prompts:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Show me how the buildStudyPlanPrompt function output looks for these examples:
   >
   > 1. Backend beginner, 10 hours/week, 3 months, "Build REST APIs with Node.js"
   > 2. Frontend intermediate, 15 hours/week, 4 months, "Master React and Next.js"
   > 3. Data Science advanced, 20 hours/week, 6 months, "Implement ML models in production"
   > ```

2. Review the generated prompts and adjust if needed to ensure they:
   - Are clear and specific
   - Include all relevant context
   - Request structured output
   - Emphasize practical, actionable content

## ⌨️ Activity: Integrate Prompts with API Route

Now let's use the prompt builder in our API route.

1. Open `nextjs-app/app/api/generate-plan/route.ts`.

2. Import and use the prompt builder:

```typescript
import { buildStudyPlanPrompt } from '@/lib/prompts';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Build the prompt
    const messages = buildStudyPlanPrompt(body);
    
    // Call AI service with the prompt
    const response = await githubClient.chat(messages);
    
    return NextResponse.json({ success: true, plan: response });
  } catch (error) {
    // Error handling
  }
}
```

## Best Practices for AI Prompts

1. **Be Specific**: Clearly state what you want the AI to generate
2. **Provide Context**: Include relevant background information
3. **Structure Requests**: Ask for organized, formatted output
4. **Set Constraints**: Specify limits (time, resources, complexity)
5. **Iterate**: Test and refine prompts based on output quality

## Example Prompt Scenarios

| Area | Level | Weekly Time | Duration | Specific Goal |
|------|-------|-------------|----------|---------------|
| Backend | Beginner | 10 hours | 3 months | "Build REST APIs with Node.js and Express" |
| Frontend | Intermediate | 15 hours | 4 months | "Master React, Next.js, and TypeScript" |
| Data Science | Advanced | 20 hours | 6 months | "Implement ML models with Python and TensorFlow" |
| Full Stack | Beginner | 12 hours | 6 months | "Create a complete MERN stack application" |
| DevOps | Intermediate | 18 hours | 5 months | "Master Docker, Kubernetes, and CI/CD" |

These examples test different areas, skill levels, and goals, helping you understand how your prompt system adapts to various scenarios.

---

| [← Building the User Interface](04-step.md) | [Next: Adding Form Validation →](06-step.md) |
|:-----------------------------------|------------------------------------------:|
