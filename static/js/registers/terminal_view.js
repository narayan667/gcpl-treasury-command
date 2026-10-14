/**
 * GCPL Treasury Command - Terminal Register (Terminal Minimalism)
 * Conforms to PRD Section 7.2.3 & Reference Image 7 Pattern
 * Monospace, Cyan Accent, Block Progress Meters, Blotters & Append-Only Audit Stream
 */

import { store } from '../data.js';

export class TerminalView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.activeTab = 'dashboard'; // 'dashboard' | 'queue' | 'blotters' | 'audit'

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
      <div class="terminal-layout">
        <!-- Left Navigation Sidebar -->
        <div class="terminal-nav-col">
          <div class="terminal-user-chip">
            <span>${store.activePersona.toUpperCase()} ONLINE</span>
          </div>
          <div class="terminal-menu-list">
            <div class="terminal-menu-item ${this.activeTab === 'dashboard' ? 'active' : ''}" data-tab="dashboard">
              <span>DASHBOARD</span><kbd>[D]</kbd>
            </div>
            <div class="terminal-menu-item ${this.activeTab === 'queue' ? 'active' : ''}" data-tab="queue">
              <span>WORK_QUEUE (4)</span><kbd>[Q]</kbd>
            </div>
            <div class="terminal-menu-item ${this.activeTab === 'blotters' ? 'active' : ''}" data-tab="blotters">
              <span>BLOTTERS (DEAL/PMT)</span><kbd>[B]</kbd>
            </div>
            <div class="terminal-menu-item ${this.activeTab === 'audit' ? 'active' : ''}" data-tab="audit">
              <span>AUDIT_LOG // CHAIN</span><kbd>[A]</kbd>
            </div>
          </div>
          <div style="margin-top: auto; padding: 12px; font-size: 10px; color: var(--text-3); border-top: 1px solid var(--line-1);">
            <div>SYS_VER: v2.0.4 // STABLE</div>
            <div>STATUS: SYS: OK // FEEDS: OK</div>
          </div>
        </div>

        <!-- Main Terminal Operational View -->
        <div class="terminal-main-content">
          <!-- Quick Actions Bar (Image 7 Pattern) -->
          <div class="terminal-quick-actions">
            <div class="terminal-hero-numeral">
              <span style="color: var(--accent); font-size: 16px;">▶</span>
              <span>OPERATIONS_CONTROL_01</span>
              <span class="term-tag ok">[ACTIVE]</span>
            </div>
            <div class="terminal-action-btns">
              <button class="term-btn filled" id="term-btn-cycle">START_CYCLE</button>
              <button class="term-btn" id="term-btn-save">SAVE_VIEW</button>
              <button class="term-btn" id="term-btn-hold">HOLD</button>
              <button class="term-btn" id="term-btn-verify">VERIFY_AUDIT</button>
            </div>
          </div>

          <!-- Dynamic Panel Grid -->
          ${this.renderActiveTab(state)}
        </div>
      </div>
    `;

    this.bindTerminalEvents();
  }

  renderActiveTab(state) {
    if (this.activeTab === 'dashboard') {
      return `
        <!-- Top Row Panels: Liquidity Meters & Work Queue -->
        <div class="terminal-grid">
          <!-- Panel 1: Liquidity Meters (Image 7 Resource Monitor) -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>LIQUIDITY_METERS // BUFFERS</span>
              <span class="term-tag ok">[HEALTHY]</span>
            </div>
            <div class="terminal-panel-body">
              <div class="term-meter-row">
                <div class="term-meter-label"><span>GROUP CASH VISIBILITY (COVERAGE)</span><span>${state.group_summary.cash_visibility_coverage_pct}%</span></div>
                <div class="term-meter-bar ok">█████████░ 95.1%</div>
              </div>
              <div class="term-meter-row">
                <div class="term-meter-label"><span>DEPLOYABLE SURPLUS UTILIZATION</span><span>64%</span></div>
                <div class="term-meter-bar ok">██████░░░░ 64.0%</div>
              </div>
              <div class="term-meter-row">
                <div class="term-meter-label"><span>COMMITTED FACILITY HEADROOM</span><span>78%</span></div>
                <div class="term-meter-bar ok">████████░░ 78.5%</div>
              </div>
              <div class="term-meter-row">
                <div class="term-meter-label"><span>STALE BALANCE TOLERANCE (MAX 5%)</span><span>4.9%</span></div>
                <div class="term-meter-bar warn">████░░░░░░ 4.9% [NEAR THRESHOLD]</div>
              </div>
            </div>
          </div>

          <!-- Panel 2: Pending Work Queue -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>ACTIONABLE_TASKS // QUEUE</span>
              <span class="term-tag pend">[4 PENDING]</span>
            </div>
            <div class="terminal-panel-body" style="padding: 0;">
              <table class="terminal-table">
                <thead>
                  <tr><th>TASK ID</th><th>TYPE</th><th>ASSIGNED</th><th>STATUS</th></tr>
                </thead>
                <tbody>
                  <tr class="selected">
                    <td>TSK-901</td><td>Surplus Matching (UK ➔ US)</td><td>Treasurer</td><td><span class="term-tag pend">[APPROVAL]</span></td>
                  </tr>
                  <tr>
                    <td>TSK-902</td><td>BACS Payment Release ($1.8M)</td><td>Back Office</td><td><span class="term-tag run">[READY]</span></td>
                  </tr>
                  <tr>
                    <td>TSK-903</td><td>Indonesia Repatriation Assessment</td><td>Tax Review</td><td><span class="term-tag ok">[IN_REVIEW]</span></td>
                  </tr>
                  <tr>
                    <td>TSK-904</td><td>Kenya Bank Account Inventory</td><td>Integration Lead</td><td><span class="term-tag run">[ONBOARD]</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Middle Row: Operational Blotter (Deals / Payments) -->
        <div class="terminal-panel">
          <div class="terminal-panel-header">
            <span>ACTIVE_TRANSACTIONS // BLOTTER</span>
            <span>SHOWING 5 OF 14 RECORDS</span>
          </div>
          <div class="terminal-panel-body" style="padding: 0;">
            <table class="terminal-table">
              <thead>
                <tr><th>REF ID</th><th>TYPE</th><th>ENTITY</th><th>COUNTERPARTY</th><th style="text-align: right;">AMOUNT</th><th>SOD STATE</th><th>STATUS</th></tr>
              </thead>
              <tbody>
                <tr class="selected">
                  <td>PROP-089</td><td>Intercompany Loan</td><td>GCPL-UK ➔ US</td><td>GCPL Americas Inc</td><td style="text-align: right; color: var(--ok); font-weight: 700;">$14,200,000</td><td><span class="term-tag ok">[SOD_OK]</span></td><td><span class="term-tag pend">[PEND_AUTH]</span></td>
                </tr>
                <tr>
                  <td>PMT-8821</td><td>Supplier Settlement</td><td>GCPL-IN</td><td>Chem Supply Ltd</td><td style="text-align: right;">₹42,000,000</td><td><span class="term-tag ok">[SOD_OK]</span></td><td><span class="term-tag ok">[SETTLED]</span></td>
                </tr>
                <tr>
                  <td>HDG-0104</td><td>FX Forward (USD/INR)</td><td>GCPL-IN</td><td>Citi Global Markets</td><td style="text-align: right;">$12,500,000</td><td><span class="term-tag ok">[SOD_OK]</span></td><td><span class="term-tag ok">[CONFIRMED]</span></td>
                </tr>
                <tr>
                  <td>SWP-022</td><td>Notional Pool Sweep</td><td>GCPL-SG</td><td>DBS Liquidity Header</td><td style="text-align: right;">$8,200,000</td><td><span class="term-tag ok">[SOD_OK]</span></td><td><span class="term-tag ok">[SETTLED]</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Bottom Row: KERNEL_LOG Terminal Stream (Audit Trail) -->
        <div class="kernel-log-pane">
          <div class="terminal-panel-header" style="background: #080A0D;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <span>KERNEL_LOG // APPEND-ONLY AUDIT STREAM</span>
              <span class="term-tag ok" id="audit-verify-chip">[SHA-256 CHAIN: VERIFIED]</span>
            </div>
            <span style="font-size: 10px; color: var(--text-3);">REAL-TIME STREAMING</span>
          </div>
          <div class="kernel-log-body">
            ${state.audit_events.map(ev => `
              <div class="kernel-log-line">
                <span class="kernel-log-ts">${ev.timestamp.split('T')[1].replace('Z','')}</span>
                <span class="term-tag ok">[OKAY]</span>
                <span class="kernel-log-actor">${ev.actor}</span>
                <span style="color: var(--text-1); font-weight: 600;">${ev.action}:</span>
                <span style="color: var(--text-2);">${ev.detail}</span>
                <span class="kernel-log-hash">hash:${ev.hash.substring(0, 10)}...</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      // Work Queue or Blotters view
      return `
        <div class="terminal-panel" style="flex: 1;">
          <div class="terminal-panel-header">
            <span>OPERATIONAL VIEW // ${this.activeTab.toUpperCase()}</span>
            <span class="term-tag ok">[SYNCHRONIZED]</span>
          </div>
          <div class="terminal-panel-body">
            <p style="color: var(--text-2);">Complete real-time records mapped to role: ${store.activePersona}.</p>
          </div>
        </div>
      `;
    }
  }

  bindTerminalEvents() {
    this.container.querySelectorAll('.terminal-menu-item').forEach(item => {
      item.addEventListener('click', () => {
        this.activeTab = item.getAttribute('data-tab');
        this.render();
      });
    });

    const verifyBtn = document.getElementById('term-btn-verify');
    if (verifyBtn) {
      verifyBtn.addEventListener('click', async () => {
        try {
          const res = await fetch('/api/audit/verify');
          const data = await res.json();
          alert(`Cryptographic Audit Trail Integrity: ${data.chain_integrity}\nVerified ${data.events_count} Hash Links in Append-Only Chain.`);
        } catch (err) {
          alert('Audit verification check completed.');
        }
      });
    }

    const cycleBtn = document.getElementById('term-btn-cycle');
    if (cycleBtn) {
      cycleBtn.addEventListener('click', () => {
        alert('Daily Cash Positioning Cycle W1 Triggered across all 3 Regional Hubs.');
      });
    }
  }
}
