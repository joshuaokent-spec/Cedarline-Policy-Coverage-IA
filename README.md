# Cedarline Policy & Coverage Information Architecture

A UX case study focused on **information architecture, taxonomy, navigation, findability, and insurance-content organization** for a fictional insurer.

**Information architecture · Content strategy · Taxonomy · Navigation design · Task flows · Accessibility · Responsive web design · HTML/CSS/JavaScript**

> **Cedarline Mutual is fictional.** This is an independent portfolio concept and is not affiliated with any insurer.

## At a glance

| | |
| --- | --- |
| **Role** | UX / Information Architecture designer + front-end prototyper |
| **Project type** | Rapid IA portfolio concept |
| **Core problem** | Help people find policies, coverage explanations, and service tasks without requiring insurance vocabulary |
| **Deliverables** | Content inventory, taxonomy, sitemap, responsive navigation, coverage-page hierarchy, validation plan, coded prototype |
| **Prototype** | Task-first navigation + plain-language coverage search + sitemap demonstration |
| **Tools / tech** | HTML, CSS, JavaScript, JSON, GitHub |

## Project thesis

Insurance websites often contain dozens of policy types, coverage terms, account tasks, claim resources, billing functions, FAQs, and educational articles.

The problem is not simply:

> “Make a cleaner menu.”

It is:

> **How should insurance information be organized so people can find the right policy, coverage explanation, or service task without already knowing insurance terminology?**

## Design response

The proposed IA gives users several ways into the same information.

### Browse by what you want to protect

```text
Insurance
├── Vehicles
├── Home & property
├── Family & future
└── Business & farm
```

### Browse by what you need to do

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

### Search in plain language

The prototype maps common-language searches toward formal insurance topics.

Examples:

- **“burst pipe”** → homeowners / water damage
- **“jewelry”** → valuables / personal property
- **“dog bite”** → personal liability
- **“insurance card”** → proof of insurance
- **“tow”** → roadside assistance
- **“apartment”** → renters
- **“landlord”** → rental property

The goal is not to eliminate formal insurance terminology. It is to provide a bridge to it.

## Working prototype

The coded prototype demonstrates:

- desktop mega-menu navigation;
- responsive mobile navigation;
- task-first shortcuts;
- grouped insurance-product taxonomy;
- plain-language content search;
- synonym mapping;
- homeowners coverage information hierarchy;
- breadcrumbs;
- contextual “specific situation” links;
- proposed sitemap;
- IA validation plan.

## Coverage-page hierarchy

The example Homeowners page is organized around likely user questions underneath the formal policy name:

1. Your home & attached structures
2. Your belongings
3. Liability to others
4. Living somewhere else after a covered loss
5. Optional protection
6. Common situations

This keeps formal coverage concepts accessible while improving information scent for non-experts.

## Research integrity

This is a rapid portfolio concept rather than a production research engagement.

I **do not claim** completed card-sorting sessions, tree-testing participants, or usability-study findings.

Instead, the project documents:

- desk research on public insurance-content patterns;
- a representative content inventory;
- task-based IA hypotheses;
- a proposed taxonomy;
- a proposed sitemap;
- a validation plan describing how the structure should be tested before production.

The proposed taxonomy should be treated as a **design hypothesis**, not a tested result.

## Reference research

The project is grounded in publicly observable insurance-site patterns such as:

- multiple product lines and policy types;
- policy/account tasks;
- claims content;
- billing and document functions;
- formal coverage terminology alongside explanatory content.

See [Reference Research](docs/reference-research.md) for the sourced observations and limitations.

## Process artifacts

- [Project brief](docs/project-brief.md)
- [Reference content inventory](docs/content-inventory.md)
- [Reference research](docs/reference-research.md)
- [Proposed taxonomy & sitemap](docs/taxonomy-sitemap.md)
- [IA validation plan](docs/validation-plan.md)

## Relationship to the Cedarline portfolio

| Project | UX problem |
| --- | --- |
| [Project 1 — Claim Reporting](https://github.com/joshuaokent-spec/cedarline-claim-reporting-ux) | How should a customer report a loss? |
| [Project 2 — Claims Operations](https://github.com/joshuaokent-spec/Cedarline-Claims-Operations-Dashboard) | How should an employee manage the claims work that follows? |
| **Project 3 — Policy & Coverage IA** | How should customers find insurance and coverage information in the first place? |

Together, the projects demonstrate **transactional UX, enterprise UX, and information architecture** rather than three variations of the same interface problem.

## Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── data/
│   └── content.json
└── docs/
    ├── project-brief.md
    ├── content-inventory.md
    ├── reference-research.md
    ├── taxonomy-sitemap.md
    └── validation-plan.md
```

## Run locally

The prototype loads the content index with `fetch()`, so serve the repository instead of opening `index.html` directly.

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Production validation plan

Before treating this structure as production-ready, I would run:

1. open card sorting;
2. tree testing;
3. task-based usability testing;
4. terminology testing;
5. keyboard/mobile navigation review;
6. screen-reader and high-zoom accessibility evaluation;
7. iteration based on observed failure patterns.

## Portfolio goal

Project 3 is intentionally less about “beautiful screens” and more about demonstrating the ability to **organize a complicated content ecosystem into something people can understand and navigate**.
