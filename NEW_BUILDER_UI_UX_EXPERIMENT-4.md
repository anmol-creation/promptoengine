# PromptoEngine — New Builder UI/UX Experiment
**Status:** Planning / design exploration  
**Date:** 2026-10-15  
**Scope:** Separate experimental Builder experience for desktop and mobile  
**Current Builder:** Must remain unchanged until the new experience is tested and explicitly approved.

## 1. Goal
Create a less cluttered, engaging and easy-to-understand Builder experience. The interface should feel like a creative workspace rather than a long, complicated form. This is an experiment, not a replacement decision.

Locked product messaging remains:
- **Tagline:** “Stop describing. Start selecting.”
- **Compatibility line:** “Designed to work across AI platforms and fields”
- **Core flow:** Select → Add → Simplify

## 2. Safety and rollout principles
1. Keep the existing Builder available and visually/functionally unchanged during the experiment.
2. Build the new UI as a separate experience; do not silently replace the existing UI.
3. Add an entry point such as **Try New Builder** to let users opt in.
4. Provide a clear way to return to **Current Builder**.
5. Reuse existing selection and prompt-composition logic where feasible; do not alter its behaviour without separate review.
6. Do not unlock Hard/Pro/Supreme modes or hidden features as part of this UI experiment.
7. Do not merge, deploy, or remove the current Builder until the owner reviews and approves the new experience.
8. If a separate Git branch is available, use one. If branch creation is blocked, do not make risky edits to the current Builder; resolve the branch workflow first.

## 3. Desktop concept — multi-panel creative workspace
- **Left panel:** Categories and available option groups.
- **Center workspace:** Current category, selection controls and contextual options.
- **Right panel:** Selected changes, edit/remove actions and prompt preview.
- **Top area:** Current field/mode and lightweight context/progress.
- **Bottom/contextual actions:** Add, Reset (where safe), Review/Create Prompt.
- Allow side panels to collapse so the workspace can expand.
- Keep the primary action visually clear; avoid multiple competing accent colours.
- Use selection chips/cards where they make choices easier to scan.

## 4. Mobile concept — compact workspace with directional panels
Mobile must be designed for touch, not simply be a compressed desktop layout.
- Keep the main workspace focused and uncluttered.
- **Left drawer:** Category navigation when requested.
- **Right-side panel/drawer:** Selected changes and their edit/remove controls when useful.
- **Top area:** Current category/mode and concise context.
- **Bottom action area:** Primary action and a compact selected-count/preview affordance.
- Use bottom sheets or full-height selectors for long/deep option lists.
- Do not keep four panels open at once. Open only the relevant panel on demand.
- Support visible buttons as well as optional swipe gestures; never make gestures the only way to navigate.
- Ensure panels, on-screen keyboard, scrolling and bottom actions do not overlap or hide content.
- Use touch-friendly targets, clear close/back actions and accessible focus states.

## 5. UX principles
- Progressive disclosure: show advanced/optional controls only when relevant.
- Immediate, understandable feedback after a selection is added.
- Make selected items easy to review, edit and remove.
- Empty states should explain what to do next.
- Animations should be short and purposeful, and respect reduced-motion preferences.
- Defaults may help users get started but must not silently change the user's intent.
- Preserve user control and the existing Select → Add → Simplify mental model.

## 6. Suggested review states
Design and review these states on both desktop and mobile:
1. **Initial:** no changes selected; clear starting point.
2. **Building:** several changes selected; selections remain understandable and manageable.
3. **Review:** prompt preview and actions are visible without overwhelming the workspace.
Also inspect long option lists, deep category hierarchies, optional settings, empty/error states, and keyboard-open mobile behaviour.

## 7. Design direction
Explore a **Hybrid Creative Workspace**:
- Desktop: persistent but collapsible multi-panel workspace.
- Mobile: focused workspace with on-demand drawers and bottom sheets.
- Visual direction: compatible with the existing .ac foundation and PromptoEngine's electric-blue accent, while keeping styles token-based because the wider .ac theme is not final.
- This is a direction to explore, not a final visual lock.

## 8. Try New Builder entry and fallback
- Add **Try New Builder** to the current Builder only when the experimental UI is ready to open.
- The new experience should offer **Back to Current Builder**.
- Keep the user's current workflow and existing data safe when switching; do not promise state preservation unless implemented and tested.
- Avoid showing a non-functional switch before the destination exists.

## 9. Acceptance checklist
- [ ] Current Builder remains unchanged and accessible.
- [ ] Desktop layout works at common laptop and wide-screen widths.
- [ ] Mobile layout works at narrow phone widths without horizontal overflow.
- [ ] Drawers/bottom sheets open and close predictably.
- [ ] Primary actions remain accessible when the keyboard is open.
- [ ] Selected changes can be reviewed, edited and removed.
- [ ] Prompt composition uses the existing logic unless separately approved.
- [ ] Current ↔ New Builder navigation is clear.
- [ ] Keyboard navigation, focus visibility and reduced-motion preferences are considered.
- [ ] Runtime checks are performed on desktop and a real/narrow mobile viewport before claiming success.
- [ ] Owner reviews the experiment and explicitly approves before replacement or merge.

## 10. Out of scope
- Rewriting the prompt engine or selection data.
- Unlocking Hard/Pro/Supreme features.
- Replacing or deleting the current Builder.
- Treating the new design as approved merely because a prototype exists.
- Claiming runtime/mobile QA passed before actually running it.

## 11. Current implementation status
This document records the concept and guardrails only. No Builder UI code has been changed as part of this plan. The GitHub integration returned a 403 Forbidden error when attempting to create a separate branch or add a file, so the safe next step is to resolve that workflow before editing existing Builder files.
