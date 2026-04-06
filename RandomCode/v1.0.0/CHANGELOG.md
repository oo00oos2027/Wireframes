# Changelog — HFA Franchise Onboarding System

All notable changes to this project are documented in this file.
Format: [Version] — Date — Description

---

## [1.0.0] — 2026-03-28 — Initial Release

### Corporate Admin Portal
- **Dashboard** (`index.html`)
  - Pipeline funnel across all 10 journey stages
  - Summary metrics: total candidates, active pipeline, stores open, pipeline value
  - Investment range banner ($185,000 – $627,000)
  - Searchable / filterable candidate table with quick-view modal
  - CSV export for full pipeline
  - Stage advancement directly from quick-view

- **Onboarding Application Wizard** (`portal.html`)
  - 5-step wizard: Personal Info → Financial Qualification → Application → FDD Review → E-Signature
  - Live $300,000 net worth qualification check with pass / warn / fail indicators
  - FDD acknowledgment checkboxes (5 required, FTC-compliant 14-day rule)
  - Simulated document upload (Personal Financial Statement, Tax Returns, Bank Statement, Gov ID)
  - Electronic signature panel with legal name binding
  - Auto-saves new prospect to pipeline on submit

- **Pipeline Kanban** (`pipeline.html`)
  - 10-column kanban board: Inquiry → Grand Opening
  - One-click stage advancement
  - Assignee management (per-card rep assignment)
  - Stale-stage warnings (>14 days)
  - Per-stage investment value totals
  - CSV export

- **NSO Tracker** (`nso.html`)
  - 18 milestones across 4 phases: Site & Legal, Build-Out, Training, Pre-Opening
  - Per-phase progress bars
  - Milestone detail modal with owner and target day
  - CSV export per candidate

- **Territory Map** (`territory.html`)
  - 18 Texas territories grouped by city (Austin, Houston, Dallas, Fort Worth, San Antonio)
  - Color-coded availability: Available / Pending / Taken
  - Territory request flow (marks pending, links to candidate)
  - Side-by-side territory list with search and filter
  - CSV export

### Franchisee Self-Service Portal
- **Login Page** (`franchisee-login.html`)
  - Split-screen: brand/benefits panel + login form
  - Sign In / Create Account tabs
  - Demo quick-fill button
  - Session-based authentication (sessionStorage)

- **Registration Wizard** (`franchisee-register.html`)
  - 5-step onboarding: Account Setup → Business Profile → Financial Profile → Documents → Review
  - Password strength indicator
  - Live financial qualification check
  - Simulated document upload (5 document types)
  - Background check authorization
  - Terms acceptance gate before account creation
  - Profile completion score calculated on registration

- **Franchisee Dashboard** (`franchisee-dashboard.html`)
  - 4-tab layout: Overview, My Stores, Documents, My Profile
  - Personalized welcome with profile completion badge
  - Action Required banner with priority-flagged items (high / medium)
  - Store pipeline cards with mini journey progress bars and next-action callouts
  - Assigned development rep contact card
  - Document vault: upload profile docs, sign FDD, authorize background check
  - Profile tabs: personal, business, financial info display

- **Per-Store Detail** (`franchisee-store.html`)
  - Left-panel store switcher (all stores in sidebar)
  - Store hero with full journey bar (white-on-blue)
  - 4 tabs per store:
    - **Overview**: % complete, next action, store details, what-comes-next timeline, rep notes
    - **My Checklist**: stage-specific requirements split by "Your Task" vs "Awaiting Corporate/Vendor"
    - **Full Milestones**: all 18 NSO milestones, checkable by franchisee, grouped by phase
    - **Documents**: store-specific docs unlocked by stage (LOI, Lease, Build-Out Plans, GC Contract, Staff Roster)
  - New Store Application modal (territory select, budget, funding source)

### Shared Infrastructure
- **Design System** (`styles.css`) — 485 lines covering nav, journey bar, kanban, forms, wizard, milestone tracker, territory map, modals, badges, alerts, progress bars, tables
- **Corporate Data Layer** (`app.js`) — 10-stage constants, seed data (8 prospects, 18 territories), localStorage CRUD, CSV export, qualification logic, toast notifications
- **Franchisee Data Layer** (`franchisee-app.js`) — auth (login/register/session), franchisee profiles, store applications, milestone tracking, document upload simulation, stage requirement definitions
- **Journey Stage Bar** — visible on every page, shows current stage highlighted across all 10 stages
- **Investment tracking** — $185,000 – $627,000 range enforced throughout all qualification checks
- **CSV export** — available on every data view (pipeline, NSO milestones, territories)
- **localStorage persistence** — all data survives page refresh; seeded demo data auto-initializes on first load
- **Responsive** — works on tablet and mobile (nav collapses, grids reflow)

### Demo Data
- 8 seeded franchise candidates across all pipeline stages
- 18 Texas territories (Austin, Houston, Dallas, Fort Worth, San Antonio, The Woodlands)
- 1 seeded franchisee account: `sarah@mitchellventures.com` / `demo123`
- 2 seeded store applications for demo franchisee (Austin North + Austin Central)

### Files
| File | Lines | Role |
|---|---|---|
| `index.html` | 308 | Corporate dashboard |
| `portal.html` | 595 | Application wizard |
| `pipeline.html` | 261 | Kanban pipeline |
| `nso.html` | 307 | NSO milestone tracker |
| `territory.html` | 338 | Territory map |
| `franchisee-login.html` | 198 | Franchisee login |
| `franchisee-register.html` | 591 | Registration wizard |
| `franchisee-dashboard.html` | 597 | Franchisee dashboard |
| `franchisee-store.html` | 562 | Per-store detail |
| `styles.css` | 485 | Shared design system |
| `app.js` | 241 | Corporate data layer |
| `franchisee-app.js` | 310 | Franchisee data layer |
| **Total** | **4,793** | |

---

## Upcoming — Planned for v1.1.0
- Edit profile inline on franchisee dashboard
- Rep-side notes and stage comments
- Email notification simulation (toast on stage change)
- Print / PDF export for NSO checklist
- Dark mode toggle
