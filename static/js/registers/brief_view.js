/**
 * GCPL Treasury Command - Brief Register (Semi-Maximalist Narrative UI)
 * Conforms to PRD Section 7.2.4 & Reference Image 8 Pattern
 * CFO Brief, Committee Workspace, Onboarding Moving Truck Metaphor & Wave Tracker
 */

import { store } from '../data.js';

export class BriefView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentBriefSub = 'cfo_brief'; // 'cfo_brief' | 'committee' | 'onboarding'

    this.init();
  }

  init() {
    this.render();
    store.subscribe(() => this.render());
  }

  render() {
    const state = store.state;
    if (!state) return;

    this.container.innerHTML = `
      <div class="brief-layout">
        <!-- Top Executive Header -->
        <div class="brief-header">
          <div class="brief-title-block">
            <h1>GCPL TREASURY EXECUTIVE BRIEF</h1>
            <div class="brief-subheading">Operating Model Intelligence for the CFO & Treasury Committee // October 2026</div>
          </div>
          <div class="brief-nav-strip">
            <button class="brief-nav-btn ${this.currentBriefSub === 'cfo_brief' ? 'active' : ''}" data-sub="cfo_brief">CFO Brief</button>
            <button class="brief-nav-btn ${this.currentBriefSub === 'committee' ? 'active' : ''}" data-sub="committee">Committee Workspace</button>
            <button class="brief-nav-btn ${this.currentBriefSub === 'onboarding' ? 'active' : ''}" data-sub="onboarding">Onboarding Wave Tracker</button>
          </div>
        </div>

        <!-- Dynamic Content -->
        ${this.renderSubContent(state)}
      </div>
    `;

    this.bindBriefEvents();
  }

  renderSubContent(state) {
    const sum = state.group_summary;
    const totals = store.reportingCurrency === 'INR' ? sum.totals_inr : sum.totals_usd;

    if (this.currentBriefSub === 'cfo_brief') {
      return `
        <!-- Surplus-while-Borrowing Detector Banner (Case Problem P3 / Central Inefficiency) -->
        <div class="brief-detector-banner">
          <div class="detector-badge">OPPORTUNITY DETECTED</div>
          <div class="detector-narrative">
            <h3>Surplus Matching Available: Avoid $14.2M External Debt</h3>
            <p>
              GCPL UK Holdings Ltd holds <strong>£18.5M ($23.8M eq)</strong> in deployable cash yielding 0.45%, while GCPL Americas Inc maintains <strong>$14.2M</strong> in external bank debt at SOFR+220bps (7.50%). Internal pooling avoids <strong>$1,001,100</strong> in annual external interest expense under approved LOC-1 conditions.
            </p>
          </div>
          <button class="detector-action-btn" id="brief-open-workbench-btn">Open in Pooling Workbench →</button>
        </div>

        <!-- 4 Hero Poster KPI Tiles (Image 8 Composition) -->
        <div class="brief-kpi-grid">
          <div class="brief-kpi-card cobalt">
            <span class="brief-kpi-tag">TOTAL GROUP CASH</span>
            <div class="brief-kpi-val">${store.formatMoney(totals.total_reported_cash)}</div>
            <div class="brief-kpi-label">Consolidated Cash Position</div>
            <div class="brief-evidence-footnote">
              <span>AS-OF: 11-OCT 09:30Z</span>
              <span>100% RECONCILED</span>
            </div>
          </div>

          <div class="brief-kpi-card leaf">
            <span class="brief-kpi-tag">DEPLOYABLE SURPLUS</span>
            <div class="brief-kpi-val">${store.formatMoney(totals.available_group_deployable)}</div>
            <div class="brief-kpi-label">Ready for Intra-Group Lending</div>
            <div class="brief-evidence-footnote">
              <span>EXCLUDES RESTRICTED</span>
              <span>LOC-1 VERIFIED</span>
            </div>
          </div>

          <div class="brief-kpi-card mustard">
            <span class="brief-kpi-tag">CASH VISIBILITY</span>
            <div class="brief-kpi-val">${sum.cash_visibility_coverage_pct}%</div>
            <div class="brief-kpi-label">Automated Feed Coverage</div>
            <div class="brief-evidence-footnote">
              <span>${sum.total_accounts - sum.stale_accounts_count} OF ${sum.total_accounts} ACCOUNTS</span>
              <span>${sum.stale_accounts_count} STALE</span>
            </div>
          </div>

          <div class="brief-kpi-card sky">
            <span class="brief-kpi-tag">GROSS EXTERNAL DEBT</span>
            <div class="brief-kpi-val">${store.formatMoney(totals.gross_debt)}</div>
            <div class="brief-kpi-label">Total Outstanding Borrowing</div>
            <div class="brief-evidence-footnote">
              <span>UNDRAWN: ${store.formatMoney(totals.undrawn_facilities)}</span>
              <span>COVENANTS OK</span>
            </div>
          </div>
        </div>

        <!-- Narrative Position Summary -->
        <div style="background: #FFFFFF; border: 3px solid var(--brief-ink); border-radius: var(--radius-brief); padding: 24px; box-shadow: var(--shadow-brief);">
          <h2 style="font-family: var(--font-brief-display); font-size: 26px; color: var(--brief-cobalt); margin-bottom: 8px;">
            GLOBAL TREASURY CENTER (GTC) STRATEGIC READOUT
          </h2>
          <div style="font-size: 13px; line-height: 1.6; color: #3A352A;">
            <p style="margin-bottom: 8px;">
              Treasury Command has consolidated <strong>81 bank accounts across 26 banking partners</strong> into a single real-time control plane. Cash visibility now stands at <strong>95.1%</strong> across Asia, Europe & Middle East, and North America.
            </p>
            <p>
              Under the newly established operating model, Front/Middle/Back Office segregation of duties (SoD) is strictly enforced in software. The Treasury Committee reserved-matters queue currently requires executive sign-off on 2 high-spread cross-border pooling proposals.
            </p>
          </div>
        </div>
      `;
    } else if (this.currentBriefSub === 'onboarding') {
      // The Moving Metaphor: Onboarding Truck with 7 Cargo Boxes (PRD 6.11 ON-1 & Image 8)
      const opItems = state.onboarding_package_template;
      return `
        <div class="brief-onboarding-section">
          <div class="onboarding-hero-head">
            <div>
              <h2>WE'RE MOVING GCPL KENYA ONTO TREASURY COMMAND</h2>
              <div style="font-size: 13px; font-weight: 600; color: #4A453A;">Acquisition Onboarding Package & Cutover Wave Tracker</div>
            </div>
            <span class="detector-badge" style="background: var(--brief-sky);">WAVE 1 PILOT PHASE</span>
          </div>

          <!-- Illustrated Truck (Image 8 Analogue) -->
          <div class="truck-illustration-wrap">
            <svg class="truck-svg" viewBox="0 0 520 190">
              <!-- Flat vector truck body with ink outlines -->
              <rect x="30" y="50" width="310" height="100" rx="8" fill="#2E9E4F" stroke="#15130F" stroke-width="3" />
              <!-- Truck Cabin -->
              <path d="M 340 70 L 410 70 L 440 110 L 440 150 L 340 150 Z" fill="#2F6FE4" stroke="#15130F" stroke-width="3" />
              <!-- Cabin Window -->
              <path d="M 355 80 L 400 80 L 420 110 L 355 110 Z" fill="#FFFFFF" stroke="#15130F" stroke-width="2" />
              <!-- Wheels -->
              <circle cx="90" cy="155" r="22" fill="#F4C430" stroke="#15130F" stroke-width="3" />
              <circle cx="90" cy="155" r="8" fill="#15130F" />
              <circle cx="280" cy="155" r="22" fill="#F4C430" stroke="#15130F" stroke-width="3" />
              <circle cx="280" cy="155" r="8" fill="#15130F" />
              <circle cx="390" cy="155" r="22" fill="#F4C430" stroke="#15130F" stroke-width="3" />
              <circle cx="390" cy="155" r="8" fill="#15130F" />
              <!-- Cargo Boxes Loaded Text -->
              <text x="185" y="105" fill="#FFFFFF" font-family="var(--font-brief-display)" font-size="22" text-anchor="middle" letter-spacing="1">
                7 ONBOARDING CARGO ITEMS LOADED
              </text>
            </svg>
          </div>

          <!-- 7 Cargo Boxes (The 7 Onboarding Package Items PRD ON-1) -->
          <div class="cargo-boxes-grid">
            ${opItems.map((item, idx) => `
              <div class="cargo-box-card ${item.progress === 100 ? 'complete' : ''}">
                <div class="cargo-box-num">ITEM 0${idx+1} // ${item.id}</div>
                <div class="cargo-box-title">${item.name}</div>
                <div class="cargo-progress-bar">
                  <div class="cargo-progress-fill" style="width: ${item.progress}%;"></div>
                </div>
                <div style="font-size: 10px; display: flex; justify-content: space-between; color: #4A453A;">
                  <span>Lead: ${item.assigned_to.split(' ')[0]}</span>
                  <strong>${item.progress}%</strong>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Cutover Waves Route Map -->
          <div style="margin-top: 10px;">
            <div style="font-family: var(--font-brief-display); font-size: 20px; color: var(--brief-ink); margin-bottom: 6px;">TRANSFORMATION WAVE TIMELINE</div>
            <div class="wave-route-map">
              <div class="wave-step completed">
                <div class="wave-node-circle">0</div>
                <div class="wave-step-title">Wave 0: GTC Core (India)</div>
              </div>
              <div style="flex: 1; height: 3px; background: var(--brief-ink);"></div>
              <div class="wave-step active">
                <div class="wave-node-circle">1</div>
                <div class="wave-step-title">Wave 1: Hubs (UK, US, SG)</div>
              </div>
              <div style="flex: 1; height: 3px; background: var(--brief-ink);"></div>
              <div class="wave-step">
                <div class="wave-node-circle">2</div>
                <div class="wave-step-title">Wave 2: Emerging (AE, ID, ZA)</div>
              </div>
              <div style="flex: 1; height: 3px; background: var(--brief-ink);"></div>
              <div class="wave-step">
                <div class="wave-node-circle">3</div>
                <div class="wave-step-title">Wave 3: Acquisitions (KE, CA)</div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      // Committee Workspace
      return `
        <div style="background: #FFFFFF; border: 3px solid var(--brief-ink); border-radius: var(--radius-brief); padding: 24px; box-shadow: var(--shadow-brief);">
          <h2 style="font-family: var(--font-brief-display); font-size: 26px; color: var(--brief-cobalt); margin-bottom: 8px;">
            TREASURY COMMITTEE WORKSPACE // OCTOBER 2026 PACK
          </h2>
          <div style="font-size: 12px; color: var(--brief-ink); margin-bottom: 16px;">
            Auto-assembled meeting pack for CFO Anita Desai, Group Treasurer Anand Mehta, and Committee Members.
          </div>
          <div style="display: flex; gap: 12px;">
            <button class="brief-nav-btn" onclick="alert('Exporting complete committee pack as PDF...')">📄 Export PDF Committee Pack</button>
            <button class="brief-nav-btn" onclick="alert('Decision logged to immutable audit trail.')">✓ Log Decision to Audit Trail</button>
          </div>
        </div>
      `;
    }
  }

  bindBriefEvents() {
    this.container.querySelectorAll('.brief-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentBriefSub = btn.getAttribute('data-sub');
        this.render();
      });
    });

    const wbBtn = document.getElementById('brief-open-workbench-btn');
    if (wbBtn) {
      wbBtn.addEventListener('click', () => {
        store.setRegister('canvas');
        window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'workbench' }));
      });
    }
  }
}
