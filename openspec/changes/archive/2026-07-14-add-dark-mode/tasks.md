## 1. Setup

- [x] 1.1 Add new color tokens file `src/styles/_theme-variables.scss` and declare CSS variables for light and dark themes
- [x] 1.2 Add an import for the new variables in `src/styles.scss`
- [x] 1.3 Add a small inline script to `src/index.html` to read `rpg-theme` and add `.theme-dark` to `document.documentElement` before Angular bootstraps

## 2. Core Implementation

- [x] 2.1 Implement `ThemeService` (`src/app/shared/services/theme.service.ts`) with methods: `get()`, `set()`, `toggle()`, and an observable for current theme
- [x] 2.2 Add a theme toggle control to `Footer` component (`src/app/components/footer/footer.component.ts/.html`) and wire it to `ThemeService`
- [x] 2.3 Apply theme by toggling `.theme-dark` class on `document.documentElement` in `ThemeService`
- [x] 2.4 Persist preference to `localStorage` under key `rpg-theme`
- [x] 2.5 Ensure app applies persisted theme as early as possible on startup (call `ThemeService` in `AppComponent` or via the inline script for best UX)

## 3. Migration

- [x] 3.1 Replace most-visible hard-coded colors with `var(--color-*)` tokens in: `src/app/components/footer/footer.component.scss`, `src/app/components/inventory-menu/inventory-menu.component.scss`, and top-level layout styles
- [ ] 3.2 Update `src/styles/` partials (e.g., `colors.scss`, `borders.scss`) to use variables where appropriate
- [ ] 3.3 Run visual QA and adjust token values for contrast and accessibility

## 4. Tests, Docs, and Cleanup

- [ ] 4.1 Update unit tests that assert exact color values to tolerate CSS variable usage or update expected values
- [x] 4.2 Add short README note in `openspec/changes/add-dark-mode/` summarizing how to test the change locally
- [ ] 4.3 Remove any temporary debug styles and ensure no hard-coded colors remain in critical components

## 5. Optional Follow-ups

- [ ] 5.1 Add a settings UI to configure theme and an option to follow system preference
- [ ] 5.2 Add automated visual regression tests for key pages
