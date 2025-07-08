# Claude Code Commands

## Project Architecture

### Next.js Configuration
- **Router**: Using App Router (not Pages Router)
- **Location**: All pages in `src/app/` directory
- **Layout**: Root layout in `src/app/layout.tsx`

### Build Cache Issues
If you encounter build cache errors mentioning Pages Router files (`_document.js`, `_app.js`):
```bash
rm -rf .next
npm run dev
```

## Code Quality

### Linting and Formatting
- `npm run check` - Run Biome linting and formatting checks
- `npm run check:unsafe` - Run Biome linting and formatting with automatic fixes

These commands use Biome for code quality enforcement and should be run before committing changes to ensure consistent code style and catch potential issues.