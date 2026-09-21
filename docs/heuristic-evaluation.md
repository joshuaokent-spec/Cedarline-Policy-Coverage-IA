# Heuristic Evaluation & Revision Log

This IA sprint does not claim completed card sorting, tree testing, or moderated usability sessions. The proposed structure was reviewed heuristically and is documented as a hypothesis to validate.

## Evaluation questions

- Can users enter through both product and task mental models?
- Do labels provide enough information scent without insurance expertise?
- Are high-frequency service tasks separated from product shopping?
- Can plain-language searches bridge users to formal insurance terms?
- Are navigation patterns operable by keyboard and understandable on mobile?
- Does the prototype clearly distinguish tested evidence from design hypotheses?

## Findings and revisions

| Finding | UX risk | Revision |
| --- | --- | --- |
| A product-only taxonomy assumes users know what policy owns their question. | Users with task-based needs may guess the wrong category. | Added first-class “Manage my policy” and “Claims & help” navigation. |
| Formal coverage terms can be opaque. | Users may abandon or search with words the site does not use. | Added plain-language search synonyms and question-oriented coverage headings. |
| Large product lists are difficult to scan. | Users face unnecessary first-level choices. | Grouped products under Vehicles, Home & property, Family & future, and Business & farm. |
| Search results were initially informational but not clearly actionable. | A search experience can feel like a dead end. | Search results now behave as prototype navigation and explain when a destination is outside prototype scope. |
| The original “Find an agent” link pointed to a missing anchor. | Broken navigation damages trust. | Added a real agent/support destination within the prototype. |
| Mega-menu keyboard behavior needed clearer recovery. | Escape could close the menu without returning focus to the trigger. | Menu-close behavior now restores focus when closed with Escape. |

## Validation needed

The actual taxonomy should be changed if card sorting, tree testing, or task-based testing shows consistent failure. The IA is not “correct” merely because it is visually organized.
