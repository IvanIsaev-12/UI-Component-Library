# Contributing to UI Component Library

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+
- Git

### Setup Development Environment

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/ui-component-lib.git
   cd ui-component-lib
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Build packages:

   ```bash
   pnpm build
   ```

4. Run Storybook for development:

   ```bash
   pnpm --filter=docs storybook
   ```

5. Run tests:
   ```bash
   pnpm --filter=@ui-component-lib/ui test
   ```

## 📝 Development Workflow

### Creating a New Component

1. Create component directory:

   ```bash
   mkdir -p packages/ui/src/components/YourComponent
   ```

2. Create component files:
   - `YourComponent.tsx` - Component implementation
   - `index.tsx` - Export file
   - `YourComponent.test.tsx` - Tests

3. Component template:

   ```typescript
   import * as React from "react";
   import { cn } from "../../lib/cn";

   interface YourComponentProps extends React.HTMLAttributes<HTMLDivElement> {
     // Your props
   }

   const YourComponent = React.forwardRef<HTMLDivElement, YourComponentProps>(
     ({ className, ...props }, ref) => {
       return (
         <div
           ref={ref}
           className={cn("base-classes", className)}
           {...props}
         />
       );
     }
   );

   YourComponent.displayName = "YourComponent";

   export { YourComponent };
   export type { YourComponentProps };
   ```

4. Add tests with accessibility checks:

   ```typescript
   import { render, screen } from "@testing-library/react";
   import { axe, toHaveNoViolations } from "jest-axe";
   import { YourComponent } from "./YourComponent";

   expect.extend(toHaveNoViolations);

   describe("YourComponent", () => {
     it("renders correctly", () => {
       render(<YourComponent>Content</YourComponent>);
       expect(screen.getByText("Content")).toBeInTheDocument();
     });

     it("has no accessibility violations", async () => {
       const { container } = render(<YourComponent>Content</YourComponent>);
       const results = await axe(container);
       expect(results).toHaveNoViolations();
     });
   });
   ```

5. Create Storybook story:

   ```typescript
   import type { Meta, StoryObj } from "@storybook/react";
   import { YourComponent } from "@ui-component-lib/ui";

   const meta: Meta<typeof YourComponent> = {
   	title: "Components/YourComponent",
   	component: YourComponent,
   	tags: ["autodocs"],
   };

   export default meta;
   type Story = StoryObj<typeof YourComponent>;

   export const Default: Story = {
   	args: {
   		children: "Your component content",
   	},
   };
   ```

6. Export from main index:
   ```typescript
   // packages/ui/src/index.ts
   export * from "./components/YourComponent";
   ```

### Testing Guidelines

- **Write tests for all components**
- **Include accessibility tests** using jest-axe
- **Test user interactions** with Testing Library
- **Test keyboard navigation** where applicable
- **Aim for high coverage** (>80%)

Run tests:

```bash
# Run all tests
pnpm test

# Watch mode
pnpm --filter=@ui-component-lib/ui test --watch

# Coverage
pnpm --filter=@ui-component-lib/ui test:coverage
```

### Code Style

- Use TypeScript for all new code
- Follow existing patterns
- Use `React.forwardRef` for components
- Export types alongside components
- Use `cn()` utility for className merging
- Use Radix UI primitives where possible

Run linter:

```bash
pnpm lint
```

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation 
- `test:` - Test additions or changes

Examples:

```
feat: add Form component
fix: resolve Button disabled state styling
docs: update installation instructions
test: add accessibility tests for Dialog
```

## 🔄 Pull Request Process

1. **Create a feature branch:**

   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Run all checks:**

   ```bash
   pnpm lint
   pnpm typecheck
   pnpm test
   pnpm build
   ```

4. **Commit your changes** with conventional commits

5. **Push to your fork:**

   ```bash
   git push origin feat/your-feature-name
   ```

6. **Create a Pull Request** with:
   - Clear title and description
   - Screenshots/GIFs for UI changes
   - Test coverage information
   - Breaking changes highlighted

### PR Checklist

- [ ] Tests pass locally
- [ ] Linter passes
- [ ] TypeScript compiles without errors
- [ ] Accessibility tests included
- [ ] Storybook story added/updated
- [ ] Documentation updated if needed
- [ ] CHANGELOG.md updated (for significant changes)

## 🐛 Reporting Bugs

Create an issue with:

- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Environment details (Node version, browser, etc.)
- Screenshots if applicable
- Minimal reproduction example

## 💡 Suggesting Features

Create an issue with:

- Clear use case description
- Expected behavior
- Example API (if applicable)
- Mock-ups or examples (if applicable)

## 📚 Documentation

- Update README.md for API changes
- Add JSDoc comments for new props
- Update Storybook stories
- Add examples for complex features

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Collaborate in good faith

## 💬 Getting Help

- Open a discussion on GitHub
- Check existing issues and PRs
- Review documentation and examples

Thank you for contributing! 🎉
