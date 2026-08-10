## ADDED Requirements

### Requirement: Create item from a user action
The system SHALL provide a user-facing action to create a new item and register it in the RPG state.

#### Scenario: User creates a valid item
- **WHEN** the user submits a complete item form with valid values
- **THEN** the system SHALL create a new item record and add it to the current player inventory or active item registry

### Requirement: Validate required item fields
The system SHALL require the core fields needed to instantiate an item before creation is accepted.

#### Scenario: User submits incomplete item data
- **WHEN** the user submits an item form missing required values such as name, type, or slots
- **THEN** the system SHALL reject the submission and SHALL display an error message explaining which fields are required

### Requirement: Show created item in the UI
The system SHALL make newly created items visible in the relevant inventory or item-list view immediately after successful creation.

#### Scenario: Newly created item appears in inventory
- **WHEN** a new item is successfully created
- **THEN** the system SHALL render the item in the inventory UI using the existing item presentation flow
