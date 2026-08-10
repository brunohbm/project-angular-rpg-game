## Why

Adding a dark mode improves accessibility and player comfort, reduces eye strain during low-light play, and provides a user preference expected in modern UIs. It also helps with battery life on OLED devices.

## What Changes

- Introduce an application-level theme system with light and dark themes.
- Add a persistent theme preference (localStorage) and a UI toggle to switch themes.
- Convert existing color tokens to CSS variables and ensure components use those variables.
- Provide a default theme and a fallback for browsers that do not support CSS variables.

## Capabilities

### New Capabilities
- `dark-mode`: Add a theming capability that supports `light` and `dark` themes, including a toggle, persisted preference, and CSS variable-based tokens for colors.

### Modified Capabilities
- (none)

## Impact

- Affected files: global styles (`src/styles.scss` and files under `src/styles/`), component styles that reference hard-coded colors (multiple components under `src/app/`), and app initialization (`src/app/app.component.ts` or `src/main.ts`) to apply the persisted theme on startup.
- May require minor updates to unit tests that assert specific color values.
- No backend or API changes expected.
