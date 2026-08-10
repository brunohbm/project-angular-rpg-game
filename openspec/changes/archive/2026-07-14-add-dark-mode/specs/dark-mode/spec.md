## ADDED Requirements

### Requirement: Theme selection and persistence
The system SHALL allow users to choose between `light` and `dark` themes and SHALL persist the user's selection across sessions.

#### Scenario: User toggles theme and preference is saved
- **WHEN** the user toggles the theme control to `dark`
- **THEN** the UI SHALL switch to the dark theme and the preference SHALL be saved to localStorage under `rpg-theme`

### Requirement: Apply persisted theme on startup
The system SHALL apply a persisted theme preference as early as possible during app startup to avoid visual flash.

#### Scenario: Persisted theme applied on load
- **WHEN** the application starts and `rpg-theme` is `dark` in localStorage
- **THEN** the UI SHALL render using the dark theme without showing the light theme first

### Requirement: Respect system preference when no explicit choice
If the user has not set a theme preference, the system SHALL default to the user's OS-level preference (prefers-color-scheme) when available.

#### Scenario: No user preference uses OS preference
- **WHEN** there is no `rpg-theme` value in localStorage and the browser indicates `prefers-color-scheme: dark`
- **THEN** the UI SHALL default to the dark theme

### Requirement: Components use theme tokens
All UI components affected by color changes SHALL derive colors from theme CSS variables (e.g., `--color-bg`, `--color-text`, `--color-accent`) rather than hard-coded values.

#### Scenario: Component uses CSS variable
- **WHEN** rendering a component that displays text and background colors
- **THEN** those styles SHALL reference CSS variables such as `var(--color-text)` and `var(--color-bg)`
