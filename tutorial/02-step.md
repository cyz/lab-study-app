# Step 2: Application Structure Overview

> **Summary:**
> In this step, you'll explore the Next.js application structure, understand the file organization, and learn how the components interact with each other.

## Understanding Next.js App Structure

The StudyPlan AI application follows Next.js 13+ App Router conventions. Let's explore the key directories and files:

### Project Structure

```
nextjs-app/
├── app/
│   ├── api/               # API Routes
│   │   └── generate-plan/ # Study plan generation endpoint
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── StudyPlanForm.tsx # Form for user input
│   └── StudyPlanDisplay.tsx # Display generated plans
├── lib/                   # Utility functions
│   ├── githubClient.ts   # GitHub AI Models client
│   └── prompts.ts        # AI prompt templates
├── public/               # Static assets
├── .env.local           # Environment variables (not committed)
├── package.json         # Dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration
```

### Key Components

1. **API Routes (`app/api/`)**: Server-side endpoints that handle requests and communicate with GitHub AI Models.

2. **Pages (`app/`)**: React components that render the user interface using server and client components.

3. **Components (`components/`)**: Reusable React components for forms, displays, and UI elements.

4. **Libraries (`lib/`)**: Utility functions, API clients, and helper modules.

## ⌨️ Activity: Explore the Application Structure

1. In the **Copilot Chat** panel, switch to **Ask** mode and request an overview:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Explain the Next.js app structure in this project. What is the purpose of each main directory?
   > ```

2. Open `nextjs-app/package.json` and review the dependencies. Notice the key packages:
   - `next`: The Next.js framework
   - `react` and `react-dom`: React library for building UI
   - `tailwindcss`: Utility-first CSS framework
   - `typescript`: Type-safe JavaScript

3. Examine the `nextjs-app/app/layout.tsx` file. This is the root layout that wraps all pages:

   ```bash
   cat nextjs-app/app/layout.tsx
   ```

4. Check the main page at `nextjs-app/app/page.tsx`:

   ```bash
   cat nextjs-app/app/page.tsx
   ```

## ⌨️ Activity: Understanding API Routes

Next.js API Routes allow you to create backend endpoints without a separate server. Let's explore how they work:

1. Navigate to `nextjs-app/app/api/` directory and list the available routes:

   ```bash
   ls -la nextjs-app/app/api/
   ```

2. Use Copilot to understand the API structure:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > How do Next.js API routes work? Show me examples from this project.
   > ```

3. The API routes in Next.js 13+ use the App Router pattern:
   - Each route is a `route.ts` or `route.js` file
   - They export functions named after HTTP methods (`GET`, `POST`, etc.)
   - They receive `Request` objects and return `Response` objects

<details>
  <summary>🤔 How it works?</summary><br/>

Next.js API Routes run on the server and can:
- Access environment variables securely
- Make external API calls
- Process data before sending to the client
- Handle authentication and authorization

This architecture keeps sensitive operations (like API keys) on the server while providing a seamless API for the frontend.

</details>

## ⌨️ Activity: Verify the Development Environment

Let's ensure everything is configured correctly:

1. Check that the development server is running:

   ```bash
   # If not running, start it
   npm run dev
   ```

2. Open your browser to `http://localhost:3000` (or use the Ports tab in Codespaces)

3. Verify you can see the StudyPlan AI interface

4. Open the browser's Developer Tools (F12) and check the Console for any errors

<details>
  <summary>🤷 Having trouble?</summary>

1. **Port already in use:**
   ```bash
   # Kill the process on port 3000
   npx kill-port 3000
   # Then restart
   npm run dev
   ```

2. **Dependencies not installed:**
   ```bash
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Environment variables missing:**
   - Ensure `.env.local` exists with your `GITHUB_TOKEN`
   - Restart the development server after adding environment variables

</details>

---

| [← Introduction to StudyPlan App and Environment Setup](01-step.md) | [Next: API Routes and AI Integration →](03-step.md) |
|:-----------------------------------|------------------------------------------:|
