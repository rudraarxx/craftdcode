# Testing Standards

**Analysis Date:** 2026-04-26

## Frameworks & Tools

- **Vitest**: Primary test runner for unit and integration tests.
- **React Testing Library**: Used for component testing.
- **jsdom**: Browser simulation for Vitest.

## Structure

- Tests are located in the `__tests__` directory in the root.
- Test files follow the `.test.ts` or `.test.tsx` naming convention.

## Current Coverage

- **Sanity Tests**: Basic environment validation in `sanity.test.ts`.
- **Planned**: Component-level tests for interactive elements (Hero, Contact Form, Horizontal Scroll).

## Running Tests

```bash
# Run tests once
yarn test

# Run tests in watch mode
yarn test:watch
```

---

*Testing audit: 2026-04-26*
*Update when adding new testing layers*
