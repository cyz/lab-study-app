# Step 7: Creating Custom Chat Modes for Accessibility Testing

> **Summary:**
> In this step, you'll learn how to create specialized GitHub Copilot chat modes for accessibility testing. You'll implement a custom assistant that identifies accessibility issues in React applications, suggests improvements based on WCAG standards, and helps integrate accessibility checks into your development workflow. [Explore advanced customization options for GitHub Copilot chat](https://code.visualstudio.com/docs/copilot/customization/overview).

## Understanding Custom Chat Modes

Custom chat modes in GitHub Copilot allow you to tailor the assistant for specialized development tasks. By creating a mode dedicated to accessibility testing, you ensure Copilot focuses exclusively on identifying and resolving accessibility issues in your React/Next.js code.

To build this mode, we'll use the **Awesome GitHub Copilot Customizations** repository—a curated collection of prompts, instructions, and chat modes that extend Copilot across languages, domains, and workflows.

This repository provides three main resources you can use when defining your custom chat mode:

* **[![Awesome Prompts](https://img.shields.io/badge/Awesome-Prompts-blue?logo=githubcopilot)](https://github.com/github/awesome-copilot/blob/main/README.prompts.md)** – Task-specific prompts for generating code, documentation, or solving targeted problems.
* **[![Awesome Instructions](https://img.shields.io/badge/Awesome-Instructions-blue?logo=githubcopilot)](https://github.com/github/awesome-copilot/blob/main/README.instructions.md)** – Project-wide or file-specific coding standards and best practices.
* **[![Awesome Chat Modes](https://img.shields.io/badge/Awesome-Chat_Modes-blue?logo=githubcopilot)](https://github.com/github/awesome-copilot/blob/main/README.chatmodes.md)** – Ready-to-use personas and conversation modes tailored for different developer roles and contexts.

## ⌨️ Activity: Create a Custom Accessibility Chat Mode

We'll implement the accessibility assistant mode using the [Accessibility mode](https://github.com/github/awesome-copilot/blob/main/chatmodes/accesibility.chatmode.md) from the GitHub repository.

1. **Open Copilot Chat** by clicking the Copilot icon in the VS Code sidebar.

2. In the Copilot Chat panel, select **⚙️ Configure Chat** > **Modes** > **Create new custom chat mode file**. By default, chat mode files are located in the `.github/chatmodes` folder.

   <details>
      <summary>📸 Show screenshot</summary>
       <img src="images/6-configure-chat-instructions.png" alt="Screenshot showing the Chat view, and Configure Chat menu, highlighting the Configure Chat button" />
   </details>

3. Name the chat mode `accessibility`. It will appear in the chat mode dropdown list.
   
4. Once the `accessibility.chatmode.md` file is created, copy its content from the [Accessibility mode repository](https://github.com/github/awesome-copilot/blob/main/chatmodes/accesibility.chatmode.md) using the "Copy raw file" option.

   <details>
      <summary>📸 Show screenshot</summary>
       <img src="images/6-copy-raw.png" alt="Screenshot showing how to copy the raw file content" />
   </details>

5. Open the Copilot Chat panel and select `accessibility` from the chat mode dropdown list.

   <details>
      <summary>📸 Show screenshot</summary>
       <img src="images/6-chat-mode-dropdown.png" alt="Screenshot showing the Chat view, highlighting the chat mode dropdown list" />
   </details>

6. Ask Copilot to check your React components for accessibility issues:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social\&logo=github%20copilot)
   >
   > ```prompt
   > Check the accessibility in StudyPlanForm.tsx and page.tsx
   > ```

7. Review the suggestions from the Accessibility chat assistant. Common issues include:
   - Missing ARIA labels
   - Insufficient color contrast
   - Keyboard navigation problems
   - Missing focus indicators
   - Improper heading hierarchy
   - Missing alt text for images

8. Use **Agent mode** to update your components and fix identified accessibility issues:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social\&logo=github%20copilot)
   >
   > ```prompt
   > Fix all accessibility issues in StudyPlanForm.tsx following WCAG 2.1 AA standards
   > ```

## ⌨️ Activity: Test Accessibility Improvements

After implementing the accessibility fixes, verify the improvements:

1. **Keyboard Navigation Test:**
   - Use only the `Tab` key to navigate through all interactive elements
   - Verify all buttons, inputs, and links are reachable
   - Check that focus indicators are visible

2. **Screen Reader Test (Optional):**
   - Enable a screen reader (NVDA on Windows, VoiceOver on Mac)
   - Navigate through the form
   - Verify all labels and instructions are read correctly

3. **Color Contrast Test:**
   - Use browser DevTools to check contrast ratios
   - Ensure text meets WCAG AA standards (4.5:1 for normal text)

4. **ARIA Attributes Test:**
   - Inspect elements in DevTools
   - Verify proper ARIA labels, roles, and states

## Common Accessibility Improvements

Here are typical improvements the accessibility mode will suggest:

```typescript
// Before
<button onClick={handleSubmit}>Submit</button>

// After
<button 
  onClick={handleSubmit}
  aria-label="Generate study plan"
  disabled={isLoading}
  aria-busy={isLoading}
>
  Submit
</button>

// Before
<input type="text" value={area} onChange={handleChange} />

// After
<label htmlFor="area" className="block text-sm font-medium mb-1">
  Study Area
</label>
<input 
  id="area"
  type="text" 
  value={area} 
  onChange={handleChange}
  aria-required="true"
  aria-invalid={!!errors.area}
  aria-describedby={errors.area ? "area-error" : undefined}
/>
{errors.area && (
  <p id="area-error" className="text-red-500 text-sm" role="alert">
    {errors.area}
  </p>
)}
```

---

| [← Adding Form Validation](06-step.md) | [Next: Commit and Code Review with GitHub Copilot →](08-step.md) |
|:-----------------------------------|------------------------------------------:|
