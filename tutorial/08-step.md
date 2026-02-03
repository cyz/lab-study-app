# Step 8: Commit and Code Review with GitHub Copilot

> **Summary:**
> In this step, you'll learn how to use GitHub Copilot to automatically generate meaningful commit messages based on your code changes and to perform code reviews before committing. These features help improve your Git workflow and maintain high code quality.

## ⌨️ Activity: Generating a Commit Message

Let's use GitHub Copilot to generate a commit message for the improvements you've made:

1. **Open the Source Control view** in VS Code by clicking the Git icon or pressing `Ctrl+Shift+G` (`Cmd+Shift+G` on macOS).

2. Stage your changes by clicking the `+` icon next to the modified files or using the "Stage All Changes" option.

   <details>
      <summary>📸 Show screenshot</summary>
       <img src="images/7-stage-changes.png" alt="Screenshot of staging all changes" />
   </details>
   
3. **Click the GitHub Copilot icon** in the commit message input area (looks like a sparkle or AI icon).

   <details>
      <summary>📸 Show screenshot</summary>
       <img src="images/7-generate-commit-message.png" alt="Screenshot of commit interface with Copilot button" />
   </details>

4. **Wait for Copilot to analyze your changes** and generate a commit message automatically. The message will appear in the commit input field.

5. **Review and edit** the generated message if needed. Even with AI assistance, it's good practice to verify the message accurately reflects your changes.

6. **Complete the commit** by clicking the checkmark icon or pressing `Ctrl+Enter` (`Cmd+Enter` on macOS).

<details>
  <summary>Example of a generated commit message</summary>

```
feat: Implement study plan generation with Next.js and React

- Add GitHub Models AI client for study plan generation
- Create StudyPlanForm component with Tailwind CSS styling
- Implement API route for handling study plan requests
- Add form validation with error handling and visual feedback
- Create StudyPlanDisplay component for rendering results
- Add accessibility improvements following WCAG 2.1 AA standards

This provides users with an AI-powered tool to create personalized
learning paths based on their goals, skill level, and available time.
```

</details>

## ⌨️ Activity: Performing Code Reviews with Copilot

Before finalizing your commit, use GitHub Copilot to review your code changes:

1. **Open the Command Palette** with `Ctrl+Shift+P` (`Cmd+Shift+P` on macOS).

2. **Search for "GitHub Copilot: Review Changes"** and select it.

3. **Wait for Copilot to analyze your changes** and provide feedback on potential issues or improvements.

   <details>
      <summary>📸 Show screenshot</summary>
       <img src="images/7-code-review.png" alt="Screenshot of code review feature" />
   </details>

4. Review the suggestions provided by Copilot, which may include:
   - Potential bugs or logic errors
   - Performance optimizations
   - Security vulnerabilities
   - Code style improvements
   - Missing error handling
   - TypeScript type improvements
   - Accessibility issues
   - Best practice violations

5. Address any relevant suggestions before proceeding with your commit.

6. Generate a new commit message that reflects any additional improvements you've made.

## ⌨️ Activity: Using Conventional Commits

Adopt conventional commit format for better project history:

1. Ask Copilot to format your commit message using conventional commits:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Format my staged changes as a conventional commit message with type, scope, and description
   > ```

2. Conventional commit types:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes (formatting, semicolons, etc.)
   - `refactor:` Code refactoring
   - `perf:` Performance improvements
   - `test:` Adding or updating tests
   - `chore:` Maintenance tasks

3. Example conventional commits:

```
feat(ui): add study plan form with validation
fix(api): handle GitHub API rate limiting errors
docs(readme): update setup instructions for Next.js
refactor(prompts): simplify AI prompt building logic
style(components): apply consistent Tailwind CSS classes
```

## 💡 Best Practices for Using These Features

1. **Always review generated commit messages** before committing to ensure accuracy and completeness.

2. **Add context when needed** - AI may not understand the "why" behind certain changes or business requirements.

3. **Consider Copilot's code review as complementary** - it doesn't replace human code review, especially for architecture decisions.

4. **Combine with accessibility checks** from the previous step for comprehensive quality assurance.

5. **Use these features consistently** to build good development habits and maintain clean Git history.

6. **Keep commits atomic** - each commit should represent one logical change, making it easier for Copilot to generate meaningful messages.

7. **Review security suggestions carefully** - Copilot may identify potential security issues that need immediate attention.

## ⌨️ Activity: Create a Pull Request Description

Use Copilot to generate a comprehensive PR description:

1. After committing, push your changes to GitHub:

```bash
git push origin main
```

2. When creating a Pull Request on GitHub, use Copilot to generate the description:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Generate a pull request description for my StudyPlan AI implementation including:
   > - Summary of changes
   > - Key features added
   > - Testing instructions
   > - Screenshots or demo steps
   > ```

---

| [← Creating Custom Chat Modes for Accessibility Testing](07-step.md) | [Next: Review and next steps →](09-step.md) |
|:-----------------------------------|------------------------------------------:|
