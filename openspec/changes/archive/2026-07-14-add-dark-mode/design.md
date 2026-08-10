## Context

The `add-dark-mode` change introduces a light/dark theming system for the UI. The codebase currently uses SCSS partials and several hard-coded color values across component styles and `src/styles/` token files. The proposal establishes the capability and scope: a toggle, persisted preference, and CSS variable-based tokens.

## Goals / Non-Goals

**Goals:**
- Provide `light` and `dark` themes using CSS variables.
- Add a user-facing toggle to switch themes and persist preference in `localStorage`.
- Ensure components consume theme tokens rather than hard-coded colors.
- Apply theme on app startup to avoid flash of incorrect theme.

**Non-Goals:**
- Rework every visual component for parity beyond colors (typography/layout changes are out of scope).

## Decisions

- Theme implementation: Use CSS custom properties (CSS variables) defined in `:root` for light theme and a `.theme-dark` class for dark overrides. This minimizes runtime JS and leverages native cascade.
- Applying theme: Add a `ThemeService` responsible for reading/writing preference, toggling the `.theme-dark` class on `document.documentElement`, and exposing the current theme as an observable for UI components.
- Toggle placement: Add a small toggle to the footer component (`src/app/components/footer/footer.component.ts`) and provide an optional settings location for future expansion.
- Persistency: Store preference under key `rpg-theme` in `localStorage`. On startup (`AppComponent` or `main.ts`), `ThemeService` will read and apply the persisted theme before Angular bootstraps UI if possible to avoid flash.
- Gradual CSS migration: Introduce new variables in `src/styles/_colors.scss` (or `src/styles/colors.scss`) and update the most visible components first (header, footer, menus), leaving less visible components for follow-up tasks.

## Risks / Trade-offs

- Risk: Flash of default theme on startup. Mitigation: Apply theme class as early as possible (inline script in `index.html` or before bootstrap).
- Risk: Tests and snapshots depending on exact color values will need updates. Mitigation: Update tests to check CSS variable usage or update expected values.
- Trade-off: Using CSS variables limits support on very old browsers; acceptable for target audience.

## Migration Plan

1. Add CSS variables file and define `--color-*` tokens for light and dark.
2. Implement `ThemeService` and small toggle in `Footer` component.
3. Apply persisted theme on startup (inline script or early service call).
4. Update global styles to use tokens; migrate critical components.
5. Run visual QA and adjust values.

## Open Questions

- Do we prefer the toggle in the footer or a dedicated settings panel? Current design uses the footer for immediate access.
