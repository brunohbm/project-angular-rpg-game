How to test add-dark-mode locally

- Start the app: `npm start` (or your usual dev command).
- The change adds a theme toggle in the footer (sun/moon icon). Click to toggle.
- The preference is persisted to `localStorage` under key `rpg-theme`.
- An inline script applies the persisted or system-preferred theme before Angular bootstraps to avoid flash.

Files changed (high level):
- `src/styles/_theme-variables.scss` - theme CSS custom properties
- `src/index.html` - inline script to apply theme early
- `src/app/shared/services/theme.service.ts` - theme manager
- `src/app/components/footer/*` - toggle UI and styles
- `src/app/components/inventory-menu/*` - migrated color usage to variables

To reset preference in the browser console: `localStorage.removeItem('rpg-theme')` and reload.
