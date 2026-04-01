# Publishing Guide

This guide covers how to publish the `@ui-component-lib/ui` package to npm and deploy documentation.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **npm Authentication**: Login locally
   ```bash
   npm login
   ```
3. **GitHub Permissions**: Write access to the repository

## Publishing to npm

### Manual Publishing

#### 1. Update Version

Choose the version bump type based on [Semantic Versioning](https://semver.org/):

- **Patch** (1.0.0 → 1.0.1): Bug fixes, small changes
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
- **Major** (1.0.0 → 2.0.0): Breaking changes

Update version in `packages/ui/package.json`:

```json
{
	"version": "1.0.1"
}
```

#### 2. Update CHANGELOG.md

Add release notes following [Keep a Changelog](https://keepachangelog.com/) format:

```markdown
## [1.0.1] - 2026-03-31

### Fixed

- Fixed Button disabled state styling
- Resolved Dialog close animation issue

### Added

- Added new size variant for Avatar component
```

#### 3. Run Pre-publish Checks

```bash
# Run all checks
pnpm check

# Or run individually:
pnpm lint
pnpm typecheck
pnpm test
pnpm build:ui
```

#### 4. Test Package Contents

Verify what will be published:

```bash
cd packages/ui
npm pack --dry-run
```

This shows files that will be included. Verify:

- ✅ `dist/` directory
- ✅ `README.md`
- ✅ `LICENSE`
- ✅ `package.json`
- ❌ No source files (`src/`)
- ❌ No test files (`*.test.tsx`)
- ❌ No config files (`tsconfig.json`, `vitest.config.ts`)

#### 5. Publish to npm

```bash
cd packages/ui
pnpm publish --access public
```

Or use the release script from root:

```bash
pnpm release
```

#### 6. Create Git Tag

```bash
git tag v1.0.1
git push origin v1.0.1
```

### Automated Publishing (Recommended)

#### Setup GitHub Secrets

1. Get your npm token:

   ```bash
   npm token create
   ```

2. Add to GitHub Secrets:
   - Go to repository Settings → Secrets and variables → Actions
   - Add secret: `NPM_TOKEN` with your token value

#### Publish via GitHub Actions

Push a version tag to trigger automatic publishing:

```bash
# Update version in package.json first
git add .
git commit -m "chore: release v1.0.1"
git tag v1.0.1
git push origin main --tags
```

The workflow will:

1. ✅ Run all tests
2. ✅ Build the package
3. ✅ Publish to npm
4. ✅ Create GitHub release

#### Manual Workflow Trigger

You can also trigger publishing manually:

1. Go to Actions → "Publish to npm"
2. Click "Run workflow"
3. Select branch
4. Enter version number
5. Click "Run workflow"

## Deploying Storybook

### Automatic Deployment (Recommended)

Storybook automatically deploys to GitHub Pages on every push to `dev` branch:

1. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

2. **Push to dev**:

   ```bash
   git push origin dev
   ```

3. **Access Storybook**:
   - URL: `https://ivanisaev-12.github.io/ui-component-lib/`

### Manual Deployment

Build and deploy manually:

```bash
# Build Storybook
pnpm build:docs

# The output is in apps/docs/storybook-static/
# Deploy to your hosting service
```

### Deploy to Other Platforms

#### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd apps/docs
vercel --prod
```

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
cd apps/docs
netlify deploy --prod --dir=storybook-static
```

## Version Management Strategy

### Semantic Versioning

Follow [SemVer](https://semver.org/) principles:

**MAJOR.MINOR.PATCH** (e.g., 2.3.1)

- **MAJOR**: Breaking changes
  - Removing components or props
  - Changing component behavior significantly
  - Updating peer dependencies (React, Next.js major versions)

- **MINOR**: New features (backward compatible)
  - Adding new components
  - Adding new optional props
  - New features that don't break existing code

- **PATCH**: Bug fixes (backward compatible)
  - Fixing bugs
  - Small style adjustments
  - Documentation updates

### Pre-release Versions

For testing before official release:

```bash
# Alpha release
"version": "1.1.0-alpha.1"

# Beta release
"version": "1.1.0-beta.1"

# Release candidate
"version": "1.1.0-rc.1"
```

Publish with tag:

```bash
pnpm publish --tag alpha
pnpm publish --tag beta
pnpm publish --tag rc
```

Install pre-release:

```bash
npm install @ui-component-lib/ui@alpha
npm install @ui-component-lib/ui@beta
```

## Verification After Publishing

### 1. Check npm Registry

Visit: `https://www.npmjs.com/package/@ui-component-lib/ui`

Verify:

- ✅ Correct version displayed
- ✅ README renders properly
- ✅ Files tab shows correct structure
- ✅ Dependencies listed correctly

### 2. Test Installation

In a test project:

```bash
npm install @ui-component-lib/ui@latest

# Or with specific version
npm install @ui-component-lib/ui@1.0.1
```

### 3. Test Import

```tsx
import { Button } from "@ui-component-lib/ui";
import "@ui-component-lib/ui/styles.css";

function App() {
	return <Button>Test</Button>;
}
```

### 4. Check Storybook Deployment

Visit your Storybook URL and verify:

- ✅ All components load
- ✅ Stories work correctly
- ✅ Theme switching works
- ✅ No console errors

## Rollback Procedure

If you need to unpublish or deprecate:

### Unpublish (within 72 hours)

```bash
npm unpublish @ui-component-lib/ui@1.0.1
```

**⚠️ Warning**: Only works within 72 hours of publishing.

### Deprecate (after 72 hours)

```bash
npm deprecate @ui-component-lib/ui@1.0.1 "This version has critical bugs. Use 1.0.2 instead."
```

### Publish Fixed Version

Always publish a fixed version rather than unpublishing:

```bash
# Fix the issue
# Bump version to 1.0.2
pnpm release
```

## Troubleshooting

### Publishing Fails

**Error: "You must be logged in to publish packages"**

```bash
npm login
```

**Error: "You do not have permission to publish"**

Check package name isn't taken:

```bash
npm search @ui-component-lib/ui
```

Consider scoping: `@yourname/ui`

**Error: "Package name too similar to existing package"**

Choose a more unique name.

### Build Fails

```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build:ui
```

### Bundle Size Too Large

Check what's included:

```bash
cd packages/ui
npm pack
tar -xzf ui-component-lib-ui-1.0.0.tgz
du -sh package/
```

Optimize:

- Check `.npmignore`
- Verify `files` in `package.json`
- Remove unnecessary dependencies

### Type Definitions Missing

Ensure `tsup.config.ts` includes:

```typescript
export default defineConfig({
	dts: true, // Generate .d.ts files
	// ...
});
```

## Best Practices

1. **Always test before publishing**

   ```bash
   pnpm check
   ```

2. **Use semantic versioning consistently**

3. **Update CHANGELOG.md with every release**

4. **Tag releases in Git**

   ```bash
   git tag -a v1.0.1 -m "Release 1.0.1"
   git push --tags
   ```

5. **Announce releases**
   - GitHub Releases
   - Twitter/Social media
   - Project documentation

6. **Monitor after publishing**
   - Check npm download stats
   - Watch for bug reports
   - Monitor GitHub issues

7. **Keep dependencies updated**

   ```bash
   pnpm update
   ```

8. **Test in real projects**
   - Create example projects
   - Get user feedback
   - Fix issues quickly

## Release Checklist

- [ ] Version bumped in `package.json`
- [ ] `CHANGELOG.md` updated
- [ ] All tests passing (`pnpm test`)
- [ ] Linter passing (`pnpm lint`)
- [ ] Types check passing (`pnpm typecheck`)
- [ ] Package builds successfully (`pnpm build:ui`)
- [ ] Package contents verified (`npm pack --dry-run`)
- [ ] Git changes committed
- [ ] Git tag created
- [ ] Published to npm
- [ ] Storybook deployed
- [ ] GitHub release created
- [ ] Installation tested in fresh project
- [ ] Documentation updated

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/ui-component-lib/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/ui-component-lib/discussions)
- **npm**: [@ui-component-lib/ui](https://www.npmjs.com/package/@ui-component-lib/ui)
