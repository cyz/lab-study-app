# Step 6: Adding Form Validation

> **Summary:**
> In this step, you'll implement client-side validation for the study plan form using React hooks and modern JavaScript validation techniques.

## Why Form Validation Matters

Form validation ensures:
- Users provide all required information
- Data is in the correct format before submission
- Immediate feedback prevents frustration
- Backend receives valid, complete data

## ⌨️ Activity: Implement Client-Side Validation

Let's add comprehensive validation to our StudyPlanForm component.

1. Open `nextjs-app/components/StudyPlanForm.tsx`.

2. Use Copilot to add validation logic:

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > Add form validation to the StudyPlanForm component with these requirements:
    >
    > - Validate all required fields (area, level, weeklyHours, durationMonths, specificObjectives)
    > - Show error messages for empty or invalid fields
    > - Highlight invalid fields with red borders
    > - Validate number ranges: weeklyHours (1-168), durationMonths (1-24)
    > - Validate textarea minimum length (10 characters)
    > - Clear errors when fields are corrected
    > - Prevent form submission if validation fails
    > - Add TypeScript types for error state
    > ```

3. Implement validation using React state:

```typescript
const [errors, setErrors] = useState<{[key: string]: string}>({});

const validateForm = () => {
  const newErrors: {[key: string]: string} = {};
  
  if (!area) newErrors.area = 'Please select an area';
  if (!level) newErrors.level = 'Please select a level';
  if (weeklyHours < 1 || weeklyHours > 168) {
    newErrors.weeklyHours = 'Hours must be between 1 and 168';
  }
  // ... more validations
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;
  // Proceed with submission
};
```

## ⌨️ Activity: Add Visual Feedback

Enhance the user experience with clear visual indicators.

1. Update your form fields to show validation state:

```typescript
<input
  type="number"
  value={weeklyHours}
  onChange={(e) => setWeeklyHours(Number(e.target.value))}
  className={`
    w-full px-4 py-2 border rounded-lg
    ${errors.weeklyHours ? 'border-red-500' : 'border-gray-300'}
    focus:outline-none focus:ring-2 focus:ring-blue-500
  `}
/>
{errors.weeklyHours && (
  <p className="text-red-500 text-sm mt-1">{errors.weeklyHours}</p>
)}
```

2. Add a helper function to clear errors on input change:

```typescript
const handleInputChange = (field: string, value: any) => {
  // Clear error for this field
  if (errors[field]) {
    setErrors(prev => {
      const newErrors = {...prev};
      delete newErrors[field];
      return newErrors;
    });
  }
  // Update field value
  // ...
};
```

## ⌨️ Activity: Implement Advanced Validation

Add more sophisticated validation rules:

1. Use Copilot to add pattern matching and custom validation:

    > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
    >
    > ```prompt
    > Add advanced validation features:
    >
    > - Prevent special characters in text fields (allow only letters, numbers, spaces)
    > - Validate that specific objectives is meaningful (not just random characters)
    > - Add real-time validation as user types (debounced)
    > - Show character count for textarea (minimum 10, maximum 500)
    > - Add success indicators (green checkmarks) for valid fields
    > - Create a validation summary showing all errors at once
    > ```

## 🧪 Test the Form Validation

After implementing validation, thoroughly test it:

1. Try submitting the form with all fields empty
2. Enter invalid values (negative numbers, excessive hours)
3. Enter very short objectives (< 10 characters)
4. Fill fields correctly and verify errors clear
5. Check that success indicators appear for valid fields
6. Test that form only submits when all validations pass

### Test Cases

| Test | Expected Behavior |
|------|-------------------|
| Submit empty form | Show errors on all required fields |
| Enter 0 weekly hours | Show "must be at least 1" error |
| Enter 200 weekly hours | Show "maximum 168 hours" error |
| Type 5-char objective | Show "minimum 10 characters" error |
| Fix invalid field | Error disappears, success indicator appears |
| All fields valid | Form submits successfully |

## Best Practices

1. **Validate Early**: Check inputs as users type (with debouncing)
2. **Clear Messaging**: Error messages should be specific and helpful
3. **Visual Hierarchy**: Use colors and icons to indicate status
4. **Accessibility**: Ensure error messages are announced to screen readers
5. **Progressive Enhancement**: Validate on client, re-validate on server

<details>
  <summary>🎨 Styling Tips for Validation States</summary>

```typescript
// Error state
className="border-red-500 bg-red-50 focus:ring-red-500"

// Success state  
className="border-green-500 bg-green-50 focus:ring-green-500"

// Default state
className="border-gray-300 bg-white focus:ring-blue-500"
```

</details>

---

| [← Crafting Prompts for AI](05-step.md) | [Next: Creating Custom Chat Modes for Accessibility Testing →](07-step.md) |
|:-----------------------------------|------------------------------------------:|
