/**
 * GCPL Treasury Command - Local Cockpit Component
 * Conforms to PRD Section 4.9 & GLG-18
 * Subsidiary-Scoped Visibility: "Local sees local" and transparent preview of group view.
 */

import { store } from '../data.js';

export class LocalCockpit {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.init();
  }

  init() {
    this.render();
    store.subscribe(() => this.render());
  }

  render() {
    const state = store.state;
    if (!state) return;

    // Use active scoped entity or default to UK
    const entityId = store.activeEntityScope || store.selectedEntityId || 'GCPL-UK';
    const entity = state.entities.find(e => e.id === entityId) || state.entities[0];
    const cat = entity.cash_categories;

    this.container.innerHTML = `
      <div style="flex: 1; height: 100%; width: 100%; background: #07090C; overflow-y: auto; padding: 24px; font-family: var(--font-terminal); color: var(--text-1); display: flex; flex-direction: column; gap: 20px;">
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid var(--line-2); padding-bottom: 14px;">
          <div>
            <div style="font-size: 11px; color: var(--accent); font-weight: 700;">LOCAL_COCKPIT // SUBSIDIARY CONTROL SURFACE</div>
            <h1 style="font-size: 22px; font-weight: 700; color: #FFFFFF; margin-top: 4px;">
              <span class="node-jurisdiction-chip">${entity.jurisdiction}</span> ${entity.name}
            </h1>
            <div style="font-size: 11px; color: var(--text-3); margin-top: 2px;">
              Local Coordinator: ${entity.coordinator} | Reporting Line: ${entity.region_id} ➔ GTC Mumbai
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <span class="status-chip ${entity.pool_eligible ? 'ok' : 'warn'}">POOL: ${entity.pool_status}</span>
            <span class="status-chip ok">FEED: CONNECTED</span>
          </div>
        </div>

        <!-- 3-Column Grid: My Position | My Forecast | My Pool & Obligations -->
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <!-- Card 1: My Position -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>MY_CASH_POSITION (5 CATEGORIES)</span>
              <span>CURR: ${entity.currency}</span>
            </div>
            <div class="terminal-panel-body">
              <table style="width: 100%; font-size: 11px;">
                <tr><td style="padding: 4px 0; color: var(--text-2);">Total Cash Reported</td><td style="text-align: right; font-weight: 700; color: var(--text-1);">${store.formatMoney(cat.total_reported_native, entity.currency)}</td></tr>
                <tr><td style="padding: 4px 0; color: var(--text-2);">Available Local Buffer</td><td style="text-align: right; color: var(--ok);">${store.formatMoney(cat.available_local_native, entity.currency)}</td></tr>
                <tr><td style="padding: 4px 0; color: var(--text-2);">Deployable to Group Pool</td><td style="text-align: right; color: var(--accent); font-weight: 700;">${store.formatMoney(cat.available_group_deployable_native, entity.currency)}</td></tr>
                <tr><td style="padding: 4px 0; color: var(--text-2);">Restricted Balances</td><td style="text-align: right; color: var(--warn);">${store.formatMoney(cat.restricted_native, entity.currency)}</td></tr>
                <tr><td style="padding: 4px 0; color: var(--text-2);">Local Bank Borrowings</td><td style="text-align: right; color: ${cat.gross_debt_native > 0 ? 'var(--err)' : 'var(--text-3)'};">${store.formatMoney(cat.gross_debt_native, entity.currency)}</td></tr>
              </table>
            </div>
          </div>

          <!-- Card 2: My 13-Week Forecast Submission -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>MY_13_WEEK_FORECAST</span>
              <span class="term-tag ok">[SUBMITTED]</span>
            </div>
            <div class="terminal-panel-body">
              <div style="font-size: 11px; margin-bottom: 8px;">Cycle: <strong>Week 42 Rolling Forecast</strong></div>
              <div style="font-size: 10px; color: var(--text-3); margin-bottom: 4px;">NET CASH PROFILE</div>
              <div style="height: 36px; display: flex; align-items: flex-end; gap: 3px; background: var(--bg-1); padding: 4px; border-radius: 2px;">
                ${entity.sparkline_13w.map(v => `<div style="flex: 1; height: 60%; background: var(--port-forecast);"></div>`).join('')}
              </div>
              <div style="font-size: 10px; color: var(--text-2); margin-top: 10px; line-height: 1.5;">
                Regional Challenge Review: <strong>Approved by Fiona MacLeod</strong><br>
                Next Submission Deadline: <strong>Thursday 17:00 Local</strong>
              </div>
            </div>
          </div>

          <!-- Card 3: My Pool Position & Proposals -->
          <div class="terminal-panel">
            <div class="terminal-panel-header">
              <span>MY_POOL_PARTICIPATION</span>
              <span>LOC-1: ${entity.pool_eligible ? 'ELIGIBLE' : 'RESTRICTED'}</span>
            </div>
            <div class="terminal-panel-body">
              <div style="font-size: 11px; line-height: 1.6;">
                <div>LOC-1 Sign-offs: <strong>${entity.loc1_assessment.completed ? '5/5 Approved' : 'In Review'}</strong></div>
                <div>Active Pooling Proposals: <strong>${entity.id === 'GCPL-UK' ? '1 Proposed Intercompany Loan' : 'None'}</strong></div>
                <div style="margin-top: 8px; font-size: 10px; color: var(--text-3);">
                  Group Policy: Intra-group funding leaves local operating buffer untouched at all times.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PRD GLG-18: "What the group sees about me" preview -->
        <div class="terminal-panel">
          <div class="terminal-panel-header" style="background: #111722;">
            <div style="display: flex; gap: 8px; align-items: center;">
              <span>WHAT_THE_GROUP_SEES_ABOUT_ME // TRANSPARENT PREVIEW</span>
              <span class="term-tag ok">[GLG-18 RECONCILED]</span>
            </div>
            <span style="font-size: 10px; color: var(--text-3);">PRD PRINCIPLE 4: LOCAL TRANSPARENCY</span>
          </div>
          <div class="terminal-panel-body">
            <div style="font-size: 11px; color: var(--text-2); margin-bottom: 10px;">
              This payload matches exactly what the CFO and Group Treasurer see on the central Group Liquidity Graph for <strong>${entity.name}</strong>:
            </div>
            <div style="background: #040608; border: 1px solid var(--line-1); padding: 12px; font-size: 11px; color: var(--accent); border-radius: 2px;">
              <code>
                {<br>
                &nbsp;&nbsp;"entity_id": "${entity.id}",<br>
                &nbsp;&nbsp;"reported_cash_native": ${cat.total_reported_native},<br>
                &nbsp;&nbsp;"reported_cash_usd_eq": ${cat.total_reported_usd.toFixed(2)},<br>
                &nbsp;&nbsp;"deployable_surplus_native": ${cat.available_group_deployable_native},<br>
                &nbsp;&nbsp;"restricted_cash_native": ${cat.restricted_native},<br>
                &nbsp;&nbsp;"stale_feeds_count": ${entity.stale_count},<br>
                &nbsp;&nbsp;"loc1_certified": ${entity.pool_eligible},<br>
                &nbsp;&nbsp;"open_breaches": ${entity.breach_count}<br>
                }
              </code>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
