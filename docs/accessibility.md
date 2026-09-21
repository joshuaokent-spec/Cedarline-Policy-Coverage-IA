# Accessibility Approach

This IA prototype is accessibility-informed but has not been formally audited.

## Navigation considerations

- Skip link to main content.
- Primary navigation uses buttons for menu disclosure rather than hover-only behavior.
- Disclosure state is exposed with `aria-expanded`.
- Escape closes the desktop mega-menu and returns focus to the trigger.
- Mobile navigation has its own disclosure control.
- Visible keyboard focus is provided throughout.
- Reduced-motion preferences disable smooth scrolling and decorative movement.

## Information architecture considerations

Accessibility is also an IA issue:

- headings and landmarks expose content structure;
- descriptive labels improve information scent for screen-reader users;
- task navigation reduces dependence on visually scanning a large product list;
- breadcrumbs clarify location within the hierarchy;
- search status uses a live region;
- formal terms are paired with plain-language descriptions.

## Production testing needed

- Keyboard navigation through disclosure menus.
- Screen-reader review of menu relationships and search results.
- 200%/400% zoom and reflow.
- Mobile screen-reader navigation.
- Contrast testing.
- Card-sort and tree-test participation that includes people with disabilities.
