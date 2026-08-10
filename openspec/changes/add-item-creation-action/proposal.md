## Why

The current RPG experience already supports item definitions, inventory display, and equipment interactions, but it does not offer a user-facing way to create new items during play. This creates friction for testing new content, experimenting with item balance, and extending the game without editing source code.

## What Changes

- Add a new item-creation action that lets a user define and register a new item from the interface.
- Support the core item attributes already used by the existing system: name, description, type, variation, slots, and image reference.
- Register the created item in the player inventory so it appears immediately in the UI.
- Validate the required fields and provide clear feedback for invalid or incomplete submissions.

## Capabilities

### New Capabilities
- item-creation: a user-facing action to define and register a new item in the RPG system.

### Modified Capabilities
- inventory-interaction: the inventory flow will gain a creation entry point and immediate feedback after item registration.

## Impact

- Affected UI: inventory menu and any nearby item-related interactions.
- Affected services: player state management and inventory registration flow.
- Affected data model: item creation will reuse the current item interface and existing enums for type and variation.

## User Value

This change makes the system more flexible for content iteration and testing. It lowers the barrier for adding new items and makes the experience more approachable for designers and players who want to experiment with the item system.
