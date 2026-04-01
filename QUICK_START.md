# Quick Start Guide

## Installation

```bash
# Clone the repository
git clone https://github.com/IvanIsaev-12/UI-Component-Library.git
cd UI-Component-Library

# Install dependencies
pnpm install

# Build the UI package
pnpm build:ui
```

## Common Commands

### Development

```bash
# Run Storybook (component documentation)
pnpm dev:docs

# Run demo apps
pnpm dev:profile    # Profile app on :3001
pnpm dev:cv         # CV app on :3002
pnpm dev:all        # All apps simultaneously

# Build UI package in watch mode
pnpm --filter=@ui-component-lib/ui dev
```

### Testing

```bash
# Run all tests
pnpm test

# Run UI tests only
pnpm test:ui

# Run tests in watch mode
pnpm --filter=@ui-component-lib/ui test --watch

# Run tests with coverage
pnpm --filter=@ui-component-lib/ui test:coverage
```

### Code Quality

```bash
# Run all quality checks (lint, typecheck, test, build)
pnpm check

# Run linter
pnpm lint

# Type check
pnpm typecheck

# Format code
pnpm format

# Check formatting (without changing files)
pnpm format:check
```

### Building

```bash
# Build UI package only
pnpm build:ui

# Build everything
pnpm build

# Build Storybook for production
pnpm build:docs

# Clean all build artifacts
pnpm clean
```

### Publishing

```bash
# Run all checks before publishing
pnpm check

# Publish to npm (after checks pass)
pnpm release

# Or manually
cd packages/ui
pnpm publish --access public
```

## Development Workflow

### Working on a Component

```bash
# 1. Create feature branch
git checkout -b feat/new-component

# 2. Start Storybook
pnpm dev:docs

# 3. Create your component
# - packages/ui/src/components/YourComponent/YourComponent.tsx
# - packages/ui/src/components/YourComponent/YourComponent.test.tsx
# - packages/ui/src/components/YourComponent/index.tsx

# 4. Add story
# - apps/docs/src/stories/YourComponent.stories.tsx

# 5. Export from index
# - Add to packages/ui/src/index.ts

# 6. Run checks
pnpm check

# 7. Commit and push
git add .
git commit -m "feat: add YourComponent"
git push origin feat/new-component

# 8. Create PR on GitHub
# CI will run automatically
```

### Publishing a New Version

```bash
# 1. Update version in packages/ui/package.json
# 2. Update CHANGELOG.md

# 3. Run all checks
pnpm check

# 4. Commit and tag
git add .
git commit -m "chore: release v1.0.1"
git tag v1.0.1

# 5. Push with tags
git push origin main --tags

# GitHub Actions will:
# - Run tests
# - Build package
# - Publish to npm
# - Create GitHub Release
```

## Project Structure

```
ui-component-lib/
├── apps/
│   ├── cv-app/           # Demo: CV application
│   ├── docs/             # Storybook documentation
│   └── profile/          # Demo: Profile application
├── packages/
│   ├── eslint-config/    # Shared ESLint config
│   ├── tokens/           # Design tokens
│   └── ui/               # Main component library
│       ├── dist/         # Built output (generated)
│       ├── src/
│       │   ├── components/  # All components
│       │   ├── lib/         # Utilities (cn, etc.)
│       │   ├── index.ts     # Main export
│       │   └── styles.css   # Global styles
│       └── package.json
├── .github/
│   ├── workflows/                # CI/CD pipelines
│   ├── CONTRIBUTING.md           # Contribution guide
│   └── PULL_REQUEST_TEMPLATE.md  # Issue templates
└── package.json                  # Root workspace config
```

## Available Scripts Reference

| Script          | Description            | Usage             |
| --------------- | ---------------------- | ----------------- |
| `pnpm check`    | Run all quality checks | Before committing |
| `pnpm build:ui` | Build UI package       | After changes     |
| `pnpm test`     | Run all tests          | Continuous        |
| `pnpm dev:docs` | Start Storybook        | Development       |
| `pnpm format`   | Format all code        | Before commit     |
| `pnpm release`  | Check & publish        | Release time      |
| `pnpm clean`    | Clean everything       | Fresh start       |

## Common Issues

### Build Fails

```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build:ui
```

### Tests Fail

```bash
# Make sure UI is built first
pnpm build:ui
pnpm test:ui
```

### Storybook Won't Start

```bash
# Build UI package first
pnpm build:ui
pnpm dev:docs
```

### Package Not Found

```bash
# Rebuild the UI package
pnpm build:ui

# Check it exists
ls -la packages/ui/dist/
```

## Important Notes

### pnpm Commands

**Note:** Unlike npm, pnpm doesn't have a `ci` command. Use:

- ✅ `pnpm install --frozen-lockfile` (in CI)
- ✅ `pnpm check` (run all quality checks)
- ❌ ~~`pnpm ci`~~ (doesn't exist)

### Monorepo Filtering

To run commands in specific packages:

```bash
# Single package
pnpm --filter=@ui-component-lib/ui build

# Multiple packages
pnpm --filter=@ui-component-lib/ui --filter=docs build

# All packages
pnpm -r build
```

### Turborepo Caching

Turborepo caches build outputs. To bypass cache:

```bash
pnpm build --force

# Or clean cache
rm -rf node_modules/.cache/turbo
```

## Getting Help

- **Contributing Guide**: [.github/CONTRIBUTING.md](./.github/CONTRIBUTING.md)
- **Publishing Guide**: [PUBLISHING.md](./PUBLISHING.md)
- **CI/CD Setup**: [CI_CD_SETUP.md](./CI_CD_SETUP.md)
- **GitHub Issues**: [Create an issue](https://github.com/IvanIsaev-12/UI-Component-Library/issues)

## Next Steps

1. ✅ Run `pnpm install`
2. ✅ Run `pnpm build:ui`
3. ✅ Run `pnpm dev:docs`
4. 🎉 Start building components!

---

**Quick Links:**

- 📚 [Full Documentation](./README.md)
- 🤝 [Contributing Guide](./.github/CONTRIBUTING.md)
- 🚀 [Publishing Guide](./PUBLISHING.md)
- 🔧 [CI/CD Setup](./CI_CD_SETUP.md)
