# Step 3: API Routes and AI Integration

> **Summary:**
> In this step, you'll implement the Next.js API route that connects to GitHub's AI models and handles study plan generation requests.

## Next.js API Routes Overview

In Next.js 13+ with the App Router, API routes are created as `route.ts` files inside the `app/api/` directory. These routes handle HTTP requests and can communicate with external services like GitHub AI Models.

## ⌨️ Activity: Implement the GitHub Models Client

The GitHub Models client is essential for communicating with AI services. Let's implement it using TypeScript and the Azure AI Inference library.

1. Open or create `nextjs-app/lib/githubClient.ts`. This file will contain the client that communicates with GitHub's AI capabilities.

2. Open the **Copilot Chat** panel, switch to **Agent** mode, and ask Copilot to implement the client:

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > Create a GitHub Models client in TypeScript using these requirements:
    >
    > - Use ModelClient from @azure-rest/ai-inference
    > - Use AzureKeyCredential from @azure/core-auth  
    > - Connect to https://models.inference.ai.azure.com
    > - Use the model gpt-4o-mini
    > - Include proper TypeScript types for requests and responses
    > - Handle errors with detailed error messages
    > - Add JSDoc comments for documentation
    > ```

<details>
  <summary>🤔 How it works?</summary><br/>

The **GitHubModelsClient** integrates with GitHub's AI models to generate personalized study plans. It uses the **Azure AI Inference library** to establish secure connections, handles authentication through **GitHub tokens** from environment variables, and formats messages for AI processing.

The client includes proper error handling to ensure the application remains functional and provides meaningful feedback when issues occur.

</details>

## ⌨️ Activity: Create the API Route

Now let's create the API endpoint that will receive requests from the frontend and return AI-generated study plans.

1. Create or open `nextjs-app/app/api/generate-plan/route.ts`.

2. Use Copilot to implement the POST handler:

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > Implement a Next.js API route POST handler for study plan generation:
    >
    > - Parse JSON request body with area, level, weekly_hours, duration_months, specific_objectives
    > - Validate that all required fields are present
    > - Use the GitHub Models client to generate a study plan
    > - Return JSON response with the generated plan
    > - Include proper error handling with appropriate HTTP status codes
    > - Add TypeScript types for request and response
    > ```

3. The API route should follow this pattern:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Validate input
    // Call AI service
    // Return response
    return NextResponse.json({ success: true, plan: '...' });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error message' },
      { status: 500 }
    );
  }
}
```

## ⌨️ Activity: Test the API Endpoint

Let's test the API endpoint to ensure it's working correctly:

1. With the development server running (`npm run dev`), open a new terminal.

2. Test the endpoint using curl:

```bash
curl -X POST http://localhost:3000/api/generate-plan \
  -H "Content-Type: application/json" \
  -d '{
    "area": "backend",
    "level": "beginner",
    "weekly_hours": 10,
    "duration_months": 3,
    "specific_objectives": "Learn Node.js and build REST APIs"
  }'
```

3. You should receive a JSON response with the generated study plan.

<details>
  <summary>🤷 Having trouble?</summary>

1. **401 Unauthorized Error:**
   - Verify your `.env.local` file has the correct `GITHUB_TOKEN`
   - Ensure the token has `read:user` scope
   - Restart the development server after adding the token

2. **Module not found errors:**
   ```bash
   npm install @azure-rest/ai-inference @azure/core-auth
   ```

3. **TypeScript errors:**
   - Ensure `tsconfig.json` is properly configured
   - Check that all imports are correct
   - Run `npm run build` to see detailed type errors

</details>

---

| [← Application Structure Overview](02-step.md) | [Next: Building the User Interface →](04-step.md) |
|:-----------------------------------|------------------------------------------:|
