# Visual UI and Interactive Avatar Idea (Image Prompt Builder)

## Overview
The goal is to make the Image Prompt Builder more interactive, visually appealing, and easier to understand for users by moving away from plain text dropdowns and helping them visualize complex combinations.

## Proposed Features

### 1. Visual Backgrounds for Menu Options
- **Concept:** Instead of plain text items in dropdown menus, each option will have a representative background image or texture.
- **Example:** An option for "Cyberpunk" would feature a dimmed neon street background image behind the text.
- **Implementation Note:** This could potentially leverage the existing on-the-fly image generation (like the Visual Guide) to fetch or cache these background images, making the UI feel premium and highly visual.

### 2. Live Interactive "Cute Character" (Avatar System)
- **Concept:** A live, visual mascot or character on the screen that dynamically updates as the user makes selections from the dropdowns (e.g., adding a hat, changing clothes, adding glasses). It acts as a real-time preview of the combination of selections.
- **Technical Approaches Discussed:**
  - **Approach A (Layered Transparent PNGs):** Uses a base character and layers transparent images of clothes/accessories on top using CSS (z-index).
    - *Pros:* Instant visual update, precise control.
    - *Cons:* Requires creating and managing a massive library of individual transparent assets for every possible option.
  - **Approach B (Live AI Generation):** Generates a new image of the character on-the-fly using an AI API based on the user's current cumulative selections (e.g., `cute 3d mascot wearing [selected_hat] and [selected_glasses]`).
    - *Pros:* Infinite possibilities, no manual asset creation needed.
    - *Cons:* Slight delay (2-3 seconds) for the image to generate after each click.

## Status
Discussion paused by user. To be revisited later for potential implementation.
