# GCPL Treasury Command (v2.0)

**A node-based treasury operating platform that gives the CFO complete visibility of every branch and subsidiary, and lets subsidiaries see their own position and pool cash efficiently under the Global Treasury Center operating model.**

Built to operationalize the **EY CAFTA 2026** Treasury Transformation case study for **GCPL (Global Consumer Products Ltd)**.

---

## 🌟 Key Capabilities & Architecture

### 1. Four Registers in One Application Shell (PRD Section 3 & 7)
Switch seamlessly across four visual registers while preserving active entity selection, date, and filters:
- **CANVAS (Node-Based Semantic UI)**:
  - **Group Liquidity Graph** (*Central Feature*): Interactive n8n-style node map from headquarters (**GTC Mumbai**) across all 3 Regional Hubs (**Asia**, **Europe & Middle East**, **North America**) down to individual subsidiaries, bank accounts, and liquidity pools.
  - **8 Semantic Lenses**: Cash (default), 13-Week Forecast, Funding & Pooling, Risk & Exposure, Controls & SoD, Data Health & Feeds, Banking Lens, and Service Performance (SLA).
  - **Surplus-while-Borrowing Detector**: Surfaces the case study's central inefficiency—`GCPL-UK` holding **£18.5M ($23.8M eq)** in surplus cash yielding 0.45%, while `GCPL-US` maintains **$14.2M** in external debt at SOFR+220bps (7.50%). Animated **E06 ghost match edge** connects them.
  - **Pooling Workbench** (PRD 4.8): Interactive 5-step proposal canvas with parameter sliders (Amount, Tenor, Spread) and real-time validation of all **9 constraints** ([OKAY], [WARN], [ERR]), plus an indicative economics calculator displaying **$1,001,100/yr** in potential interest savings.
  - **Entity 360 Full Inspector** (PRD 4.7): Click any entity to inspect **13 comprehensive tabs** (Summary, Cash & Accounts, Forecast, Liquidity & Pooling, Funding & Facilities, Investments, Exposures & Hedging, Payments & Settlement, Controls & Exceptions, LOC-1 Assessment Matrix, Activity Stream, Data Health, Service & SLAs).
- **CONSOLE (Monolithic Infrastructure UI)**:
  - Single-pane-of-glass architecture map (*Reference Image 6 pattern*) spanning ERPs (`SAP S/4HANA`, `Dynamics 365`, `Oracle`, `Tally`, `NetSuite`), Canonical Normalizer, Core Control Plane, 26 Banking Partners, and Downstream Reporting.
  - Dense attribute lines inside structural nodes.
  - Persistent **Documentation Pane** detailing typed attribute schemas (`name: type`), owner, data quality rules, and runbooks.
  - **Banking Lens**: Comprehensive searchable register of **81 accounts across 26 banks**.
- **TERMINAL (Terminal Minimalism)**:
  - High-density monospace operations console (*Reference Image 7 pattern*) with cyan accent (`#5CE1F2`), UPPER_SNAKE titles, and bracketed status codes (`[OK]`, `[WARN]`, `[ERR]`, `[RUN]`, `[PEND]`).
  - Block progress meters (`████████░░ 78%`) tracking visibility coverage and facility headroom.
  - Real-time Blotters (Deals, Payments, Reconciliations) and Work Queue.
  - **KERNEL_LOG**: Append-only cryptographic audit stream with **SHA-256 hash chaining** and chain integrity verification button.
- **BRIEF (Semi-Maximalist UI)**:
  - Executive narrative on cream ground (`#F6EFD2`) with cobalt, leaf green, and mustard styling (*Reference Image 8 pattern*).
  - **CFO Brief**: Headline narrative, 4 poster KPI tiles with Terminal-style monospace evidence footnotes (as-of timestamp, source, stale count).
  - **The Moving Metaphor (Onboarding Wizard)**: Illustrated flat vector moving truck carrying **7 cargo boxes** representing the 7 acquisition onboarding items (Bank Accounts, Debt Register, Policy Alignment, Forecast Model, SoD Gap, ERP Integration, Transition SLA).
  - **Transformation Wave Tracker**: Interactive route map across Wave 0 (Core India), Wave 1 (Strategic Hubs), Wave 2 (Emerging Markets), and Wave 3 (Acquisitions).
- **LOCAL COCKPIT (Subsidiary View)**:
  - Scoped view for local subsidiary coordinators (*"Local sees local"*).
  - Transparent **"What the group sees about me"** preview reconciling local figures with the CFO's group canvas.

### 2. Executable Operating Model & Segregation of Duties (SoD)
- **Workflow Studio** (PRD Section 5):
  - Node-based process designer with semantic lanes: *Front Office*, *Middle Office*, *Back Office*, *Local Entity*, *Regional*, *Tax/Legal*, *Group*.
  - Real-time **Policy-as-Code SoD Linter** evaluating rules `LR1` to `LR16` (e.g., dealer cannot approve own deal, payment preparation independent of authorization, mandatory LOC-1 gate before cash sweep, immutable audit event write).
  - Pre-loaded with all **15 standard production workflows** (`W1` to `W15`).
  - Interactive **Simulation Engine** for token dry-run execution.

### 3. Attribute-Based Access Control (ABAC) & Multi-Currency
- **Persona Switcher**: Live testing across 10 distinct roles (CFO, Group Treasurer, Front Office Dealer, Regional Lead EMEA, Local Coordinators for UK/US/Indonesia, Risk Analyst Middle Office, Operations Specialist Back Office, Internal Auditor, IT Admin).
- **Multi-Currency Engine**: Instant toggle between `USD` and `INR` reporting currencies, with native support for Indian digit grouping (**Lakhs & Crores**).

---

## 🚀 How to Run and Test

### Option A: High-Performance Python Server (Recommended)
From the project directory:
```bash
python3 server.py
```
Open your browser and navigate to:
```
http://localhost:8080
```

### Option B: Standalone Direct Browser Open
Double-click or open directly in Google Chrome, Safari, or Edge:
```
file:///Users/narayanjaiswal/.gemini/antigravity/scratch/gcpl-treasury-command/static/index.html
```
*(The platform automatically detects standalone mode and falls back to its embedded dataset with full offline interactivity!)*

---

## ⌨️ Key Keyboard Shortcuts

- `1` through `8`: Instant switch across the 8 semantic lenses on the Group Liquidity Graph.
- `⌘K` or `Ctrl+K`: Open Command Palette to search across entities, accounts, workflows, and lenses.
- `Escape`: Clear isolation mode / close modals and drawers.
- `D`, `Q`, `B`, `A`: Terminal menu navigation (Dashboard, Queue, Blotters, Audit).

---

## 📊 Synthetic Dataset Verification
- **Entities**: 12 legal entities across 3 regions.
- **Bank Accounts**: 81 accounts across 26 banking partners (exceeding the PRD minimum of 75+ accounts / 25+ banks).
- **Mathematical Integrity**: Group totals reconcile to 100.0% precision with subsidiary drill-downs (PRD GLG-27).
- **Watermark**: Non-removable `SYNTHETIC DATA` banner in accordance with PRD GLG-30 & UI-32.
