# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-04-05

### Added

- **Design Token System** - Enhanced semantic color tokens for better theming
  - Added `--color-danger` token for both light and dark modes
  - Improved semantic color consistency across all components

### Changed

- **Component Theming Improvements** - Updated 23 components to use semantic design tokens:
  - `Input` - Now uses `foreground-muted`, `placeholder`, and `danger` tokens
  - `Select` - Consistent token usage across all sub-components (Trigger, Content, Item, Label, Separator)
  - `Badge`, `Button`, `Accordion`, `Alert`, `Avatar`, `Breadcrumb`, `Card`, `Checkbox`, `Dialog`, `Divider`, `Popover`, `Progress`, `Radio`, `Skeleton`, `Switch`, `Toast`, `Tooltip` - All updated for better theming consistency

- **Accessibility Enhancements**
  - `Input` - Improved ARIA attributes with better error and tip handling
  - `Select` - Better development-time accessibility warnings

### Fixed

- **Documentation** - Updated Storybook URLs to correct repository naming (UI-Component-Library)
- **Styling** - Improved dark mode color consistency across components

## [1.0.0] - 2026-03-27

### Added

#### Components (25 total)

- **Button** - Flexible button with 7 variants (primary, secondary, danger, success, warning, outline, ghost)
- **Input** - Text input with label, placeholder, and error states
- **Textarea** - Multi-line text input
- **Badge** - Status indicators with color variants
- **Avatar** - User profile images with fallback initials
- **Divider** - Visual content separator (horizontal/vertical)
- **Spinner** - Loading indicator with size variants
- **Typography** - Text elements (h1-h6, p, blockquote, code, list)
- **Checkbox** - Checkbox with label and accessibility support
- **Radio** - Radio button groups
- **Switch** - Toggle switch component
- **Select** - Dropdown select menu with Radix UI
- **Card** - Content container with Header, Title, Description, Content, Footer sub-components
- **Table** - Data table with Header, Body, Row, Head, Cell, Caption sub-components
- **Skeleton** - Loading placeholder with animation
- **Breadcrumb** - Hierarchical navigation
- **Tabs** - Tab navigation with panels
- **DropdownMenu** - Context menu with items, separators, and labels
- **Alert** - Notification messages with variants (default, success, warning, danger)
- **Toast** - Temporary notification system with useToast hook
- **Progress** - Progress indicator
- **Dialog** - Modal dialog with overlay
- **Popover** - Floating content container
- **Tooltip** - Hover information display
- **Accordion** - Collapsible content sections

#### Features

- Full TypeScript support with comprehensive type definitions
- Dark mode support for all components
- Accessibility testing with jest-axe
- Tailwind CSS 4.0 integration
- Radix UI primitives for accessibility
- Server Component compatible (Next.js 13+)
- Tree-shakeable imports
- Responsive design patterns

#### Development Tools

- Turborepo monorepo setup
- Storybook 10 documentation
- Vitest for testing
- ESLint and Prettier configuration
- Shared TypeScript configs
- pnpm workspace management

#### Documentation

- Complete Storybook documentation (25 story files)
- Comprehensive README with usage examples
- Component API documentation
- Installation and setup guide
- Next.js integration guide

#### Testing

- 26 test files covering all components
- Unit tests with React Testing Library
- Accessibility tests with jest-axe
- 100% component coverage

### Infrastructure

- Monorepo architecture with apps/ and packages/
- Build system with tsup
- CSS distribution via styles.css
- npm package exports configuration
- MIT License

