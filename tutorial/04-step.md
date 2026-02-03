# Step 4: Building the User Interface

> **Summary:**
> In this step, you'll create React components for the study plan form and display, using modern React patterns and Tailwind CSS for styling.

## React Components in Next.js

Next.js 13+ uses two types of components:

- **Server Components** (default): Render on the server, can access databases and APIs directly
- **Client Components** (with `'use client'`): Interactive components that run in the browser

## ⌨️ Activity: Create the Study Plan Form Component

Let's build the form that collects user input for generating personalized study plans.

1. Create or open `nextjs-app/components/StudyPlanForm.tsx`.

2. Use Copilot to implement the form component:

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > Create a React client component for a study plan form with these requirements:
    >
    > - Use 'use client' directive for client-side interactivity
    > - Include form fields: area (select), level (select), weekly_hours (number), duration_months (number), specific_objectives (textarea)
    > - Use Tailwind CSS for styling with a modern, clean design
    > - Include a submit button with loading state
    > - Handle form submission with async/await
    > - Call the /api/generate-plan endpoint
    > - Emit events or callbacks to parent component with results
    > - Add proper TypeScript types
    > ```

3. The component should follow this structure:

```typescript
'use client';

import { useState } from 'react';

interface StudyPlanFormProps {
  onPlanGenerated: (plan: string) => void;
}

export default function StudyPlanForm({ onPlanGenerated }: StudyPlanFormProps) {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Call API
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
    </form>
  );
}
```

## ⌨️ Activity: Create the Study Plan Display Component

Now let's create a component to display the AI-generated study plan in a readable format.

1. Create or open `nextjs-app/components/StudyPlanDisplay.tsx`.

2. Use Copilot to implement the display component:

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > Create a React component to display study plans with these requirements:
    >
    > - Accept a plan prop with the AI-generated content
    > - Use Tailwind CSS for beautiful, readable formatting
    > - Display the plan with proper headings, lists, and spacing
    > - Add a copy-to-clipboard button
    > - Add a download as text/PDF button
    > - Show a loading state while plan is being generated
    > - Handle markdown formatting if the plan uses markdown
    > - Add proper TypeScript types
    > ```

## ⌨️ Activity: Update the Home Page

Let's integrate our components into the main page.

1. Open `nextjs-app/app/page.tsx`.

2. Update it to use our new components:

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > Update the home page to integrate StudyPlanForm and StudyPlanDisplay:
    >
    > - Import both components
    > - Use state to manage the generated plan
    > - Pass the onPlanGenerated callback to the form
    > - Conditionally render the display component when a plan is generated
    > - Add a hero section with app title and description
    > - Use Tailwind CSS for a modern, responsive layout
    > - Add proper TypeScript types
    > ```

3. The page structure should look like this:

```typescript
'use client';

import { useState } from 'react';
import StudyPlanForm from '@/components/StudyPlanForm';
import StudyPlanDisplay from '@/components/StudyPlanDisplay';

export default function Home() {
  const [generatedPlan, setGeneratedPlan] = useState<string>('');

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">StudyPlan AI</h1>
      <StudyPlanForm onPlanGenerated={setGeneratedPlan} />
      {generatedPlan && <StudyPlanDisplay plan={generatedPlan} />}
    </main>
  );
}
```

## ⌨️ Activity: Test the User Interface

1. Ensure the development server is running (`npm run dev`).

2. Open your browser to `http://localhost:3000`.

3. Fill out the form with sample data:
   - Area: Backend Development
   - Level: Beginner
   - Weekly Hours: 10
   - Duration: 3 months
   - Objectives: "Learn Node.js and build REST APIs"

4. Click "Generate Study Plan" and verify:
   - Loading state appears during generation
   - Study plan displays correctly when complete
   - Copy and download buttons work (if implemented)

<details>
  <summary>🤔 Styling Tips</summary>

Use Tailwind CSS classes for consistent styling:
- `bg-blue-500 hover:bg-blue-600` for buttons
- `p-4 rounded-lg shadow-md` for cards
- `space-y-4` for vertical spacing
- `grid grid-cols-1 md:grid-cols-2` for responsive layouts

</details>

---

| [← API Routes and AI Integration](03-step.md) | [Next: Crafting Prompts for AI →](05-step.md) |
|:-----------------------------------|------------------------------------------:|
