# Cedarline Policy & Coverage Information Architecture

A working UX case study focused on **information architecture, taxonomy, navigation, findability, and insurance-content organization** for a fictional insurer.

**Information architecture · Content strategy · Taxonomy · Navigation design · Accessibility · HTML/CSS/JavaScript**

[**Live prototype**](https://joshuaokent-spec.github.io/Cedarline-Policy-Coverage-IA/) · [**Taxonomy & sitemap**](docs/taxonomy-sitemap.md) · [**Validation plan**](docs/validation-plan.md)

> **Cedarline Mutual is fictional.** This is an independent portfolio concept and is not affiliated with any insurer.

## At a glance

| | |
| --- | --- |
| **Role** | UX / Information Architecture designer + front-end prototyper |
| **Project type** | Rapid IA concept |
| **Core problem** | Help people find policies, coverage explanations, and service tasks without requiring insurance vocabulary |
| **Deliverables** | Content inventory, desk research, taxonomy, sitemap, responsive navigation, coverage hierarchy, heuristic evaluation, accessibility review, validation plan |
| **Prototype** | Task-first navigation + plain-language search + coverage-page example |
| **Tools / tech** | HTML, CSS, JavaScript, JSON, GitHub Pages |

## The problem

Insurance sites mix product shopping, existing-customer tasks, claims help, billing, account tools, coverage terminology, and educational content.

People often arrive with questions like:

- “Does my policy cover a burst pipe?”
- “Where do I get my insurance card?”
- “Do I need renters insurance?”
- “What protects expensive jewelry?”
- “How do I check my claim?”

The IA challenge is:

> **How should insurance information be organized so people can find the right answer without already knowing which insurance term or organizational department owns it?**

## Design response

The proposed structure supports several mental models instead of forcing everyone through a product list.

### What do you want to protect?

```text
Insurance
├── Vehicles
├── Home & property
├── Family & future
└── Business & farm
```

### What do you need to do?

```text
Manage my policy
├── Billing & payments
├── Documents & ID cards
├── Policy changes
├── Online account
└── Road services

Claims & help
├── Report a claim
├── Track a claim
├── Claim documents
├── What happens next
└── Emergency / storm help
```

### What would you say in everyday language?

The prototype bridges plain-language searches to formal topics:

- **burst pipe** → homeowners / water damage;
- **jewelry** → valuables / personal property;
- **dog bite** → liability;
- **insurance card** → proof of insurance;
- **tow** → roadside assistance;
- **apartment** → renters;
- **landlord** → rental property.

Formal insurance terminology remains available; users simply do not need to know it first.

## Working prototype

The coded prototype includes:

- keyboard-operable desktop mega-menu disclosure;
- responsive mobile navigation;
- task-first shortcuts;
- grouped product taxonomy;
- plain-language content search;
- synonym mapping;
- actionable search results;
- Homeowners coverage-page hierarchy;
- breadcrumbs and on-page navigation;
- contextual situation links;
- visible human-help destination;
- proposed sitemap;
- validation-plan section.

Destinations outside the prototype are explicitly announced as out of scope rather than behaving like broken links.

## Coverage-page hierarchy

The Homeowners example organizes formal coverage concepts underneath question-oriented headings:

1. Your home & attached structures
2. Your belongings
3. If someone says you caused injury or damage
4. If you cannot stay in your home
5. Protection you may choose to add

This preserves formal terminology while improving information scent for non-experts.

## Research integrity

This is a rapid portfolio concept rather than a production research engagement.

I **do not claim** completed card sorts, tree-test participants, interview findings, or usability metrics.

Instead, the case study includes:

- [public reference research](docs/reference-research.md);
- [representative content inventory](docs/content-inventory.md);
- task-based IA hypotheses;
- [proposed taxonomy & sitemap](docs/taxonomy-sitemap.md);
- [heuristic evaluation](docs/heuristic-evaluation.md);
- [validation plan](docs/validation-plan.md).

The taxonomy is a **design hypothesis to test**, not a proven answer.

## Iteration evidence

The [Heuristic Evaluation & Revision Log](docs/heuristic-evaluation.md) documents why the structure changed.

Examples include:

- separating product browsing from policy-management tasks;
- adding plain-language search bridges;
- grouping long product lists;
- turning search results into usable prototype navigation;
- fixing the missing agent destination;
- restoring focus after Escape closes the mega-menu.

## Accessibility

See [Accessibility Approach](docs/accessibility.md).

Accessibility here is partly structural: meaningful headings, landmarks, information scent, breadcrumbs, task-oriented entry points, keyboard-operable menus, live search status, visible focus, and reduced-motion handling all affect whether people can understand and navigate the IA.

## Validation plan

A production version would combine:

1. open card sorting;
2. tree testing;
3. task-based prototype testing;
4. terminology testing;
5. keyboard/screen-reader review;
6. high-zoom/mobile reflow testing.

The structure should change when observed user behavior contradicts the taxonomy.

## Cedarline portfolio

| Project | UX problem |
| --- | --- |
| [Project 1 — Claim Reporting](https://github.com/joshuaokent-spec/cedarline-claim-reporting-ux) | How should a customer report a loss? |
| [Project 2 — Claims Operations](https://github.com/joshuaokent-spec/Cedarline-Claims-Operations-Dashboard) | How should an employee manage the claims work that follows? |
| **Project 3 — Policy & Coverage IA** | How should customers find policy and coverage information in the first place? |

Together they demonstrate transactional UX, enterprise UX, and information architecture—not three versions of the same interface problem.

## Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── data/
│   └── content.json
├── docs/
│   ├── project-brief.md
│   ├── content-inventory.md
│   ├── reference-research.md
│   ├── taxonomy-sitemap.md
│   ├── validation-plan.md
│   ├── heuristic-evaluation.md
│   └── accessibility.md
└── .github/
    └── workflows/
        └── validate.yml
```

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## What I would validate next

The highest-risk questions are:

- whether users naturally separate product shopping from policy-management tasks;
- whether the four insurance groups match participant mental models;
- whether “Claims & help” provides sufficient information scent;
- whether synonym search bridges the right everyday terms;
- whether people can find high-frequency tasks without search;
- whether the mega-menu remains understandable with screen readers and high zoom.

The prototype exists to make those IA hypotheses testable.
