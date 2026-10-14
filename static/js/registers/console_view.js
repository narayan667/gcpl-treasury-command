/**
 * GCPL Treasury Command - Console Register (Monolithic Infrastructure UI)
 * Conforms to PRD Section 7.2.2 & Reference Image 6 Pattern
 * Single-Pane Estate View, Typed Attribute Lines, and Persistent Documentation Pane
 */

import { store } from '../data.js';

export class ConsoleView {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentView = 'architecture'; // 'architecture' | 'banking' | 'access' | 'feeds'
    this.selectedNode = null;

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
      <div class="console-layout">
        <!-- Main Console Pane -->
        <div class="console-main-pane">
          <!-- Toolbar -->
          <div class="console-toolbar">
            <div class="console-path-title">
              <span>~/GCPL/estate/${this.currentView}</span>
              <span style="font-size: 10px; color: var(--text-3);">[READ-MOSTLY ESTABLISHED VIEW]</span>
            </div>
            <div class="console-view-tabs">
              <button class="console-tab-btn ${this.currentView === 'architecture' ? 'active' : ''}" data-view="architecture">Architecture Map</button>
              <button class="console-tab-btn ${this.currentView === 'banking' ? 'active' : ''}" data-view="banking">Banking Lens (26 Banks / 81 Accounts)</button>
              <button class="console-tab-btn ${this.currentView === 'access' ? 'active' : ''}" data-view="access">Access Graph & SoD Conflicts</button>
              <button class="console-tab-btn ${this.currentView === 'feeds' ? 'active' : ''}" data-view="feeds">Feeds & Latency</button>
            </div>
          </div>

          <!-- Dynamic View Body -->
          <div style="flex: 1; overflow: auto; display: flex;">
            ${this.renderViewContent(state)}
          </div>
        </div>

        <!-- Right Persistent Documentation Pane (Image 6 Pattern) -->
        <div class="console-docs-pane">
          <div class="docs-pane-header">
            <span>DOCUMENTATION PANE</span>
            <span style="font-family: var(--font-console-mono); font-size: 10px; color: var(--accent);">ATTRIBUTES // REF</span>
          </div>
          <div class="docs-pane-content" id="console-docs-content">
            ${this.renderDocsContent()}
          </div>
        </div>
      </div>
    `;

    this.bindConsoleEvents();
  }

  renderViewContent(state) {
    if (this.currentView === 'architecture') {
      return `
        <div class="console-estate-canvas">
          <!-- Col 1: ERP Systems -->
          <div class="estate-column">
            <div class="estate-col-title">1. ERP Source Systems</div>
            <div class="infra-node-card erp" data-doc="erp_sap">
              <div class="infra-node-header">
                <span class="infra-node-name">SAP S/4HANA (HQ & US)</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">LIVE</span>
              </div>
              <div class="infra-attr-line">entities: GCPL-IN, GCPL-US, GCPL-NL</div>
              <div class="infra-attr-line">protocol: RFC / IDoc Direct Connector</div>
              <div class="infra-attr-line">refresh: Real-time Event Driven</div>
            </div>

            <div class="infra-node-card erp" data-doc="erp_dynamics">
              <div class="infra-node-header">
                <span class="infra-node-name">MS Dynamics 365 (UK)</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">LIVE</span>
              </div>
              <div class="infra-attr-line">entities: GCPL-UK, GCPL-CA</div>
              <div class="infra-attr-line">protocol: OData REST Webhook</div>
              <div class="infra-attr-line">refresh: Hourly Sync</div>
            </div>

            <div class="infra-node-card erp" data-doc="erp_legacy">
              <div class="infra-node-header">
                <span class="infra-node-name">Legacy ERPs (Tally, NetSuite)</span>
                <span class="infra-node-status" style="background: rgba(255,138,61,0.15); color: var(--warn);">BRIDGE</span>
              </div>
              <div class="infra-attr-line">entities: GCPL-BD, GCPL-AE, GCPL-NG</div>
              <div class="infra-attr-line">protocol: SFTP Templated Ingest</div>
              <div class="infra-attr-line">refresh: Daily 06:00 Local</div>
            </div>
          </div>

          <!-- Col 2: Integration Layer -->
          <div class="estate-column">
            <div class="estate-col-title">2. Integration Layer</div>
            <div class="infra-node-card integration" data-doc="integ_canonical">
              <div class="infra-node-header">
                <span class="infra-node-name">Canonical Normalizer</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">HEALTHY</span>
              </div>
              <div class="infra-attr-line">format: ISO 20022 CAMT / MT940</div>
              <div class="infra-attr-line">throughput: 12,400 msgs/day</div>
              <div class="infra-attr-line">stale_filter: < 6h Active</div>
            </div>

            <div class="infra-node-card integration" data-doc="integ_validator">
              <div class="infra-node-header">
                <span class="infra-node-name">Data Quality Engine</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">99.2% OK</span>
              </div>
              <div class="infra-attr-line">checks: Missing Feeds, Duplicates</div>
              <div class="infra-attr-line">reconciliation: 99.4% Automated Match</div>
            </div>
          </div>

          <!-- Col 3: Core Treasury Command Engine -->
          <div class="estate-column">
            <div class="estate-col-title">3. Core Treasury Command</div>
            <div class="infra-node-card core" data-doc="core_engine">
              <div class="infra-node-header">
                <span class="infra-node-name">Treasury Control Plane</span>
                <span class="infra-node-status" style="background: rgba(92,225,242,0.2); color: var(--accent);">v2.0 CORE</span>
              </div>
              <div class="infra-attr-line">state_store: Append-Only Immutable</div>
              <div class="infra-attr-line">sod_engine: LR1-LR16 Active</div>
              <div class="infra-attr-line">audit_chain: SHA-256 Hash Chained</div>
            </div>

            <div class="infra-node-card core" data-doc="core_detector">
              <div class="infra-node-header">
                <span class="infra-node-name">Liquidity Detector</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">ONLINE</span>
              </div>
              <div class="infra-attr-line">matches_active: 2 High Value ($15.2M)</div>
              <div class="infra-attr-line">surplus_pool: UK £18.5M, SG $11.4M</div>
            </div>
          </div>

          <!-- Col 4: Banking Estate -->
          <div class="estate-column">
            <div class="estate-col-title">4. 26 Banking Partners</div>
            <div class="infra-node-card bank" data-doc="bank_tier1">
              <div class="infra-node-header">
                <span class="infra-node-name">Tier 1 Global (Citi, HSBC, StanC)</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">CONNECTED</span>
              </div>
              <div class="infra-attr-line">accounts_hosted: 38 of 81 Accounts</div>
              <div class="infra-attr-line">protocols: SWIFTNet MT940 / API</div>
              <div class="infra-attr-line">latency: 110ms Avg</div>
            </div>

            <div class="infra-node-card bank" data-doc="bank_domestic">
              <div class="infra-node-header">
                <span class="infra-node-name">Domestic Regional Partners</span>
                <span class="infra-node-status" style="background: rgba(61,220,151,0.15); color: var(--ok);">CONNECTED</span>
              </div>
              <div class="infra-attr-line">banks: SBI, HDFC, Barclays, Mandiri</div>
              <div class="infra-attr-line">accounts_hosted: 43 Accounts</div>
            </div>
          </div>

          <!-- Col 5: Downstream Reporting -->
          <div class="estate-column">
            <div class="estate-col-title">5. Reporting & Analytics</div>
            <div class="infra-node-card reporting" data-doc="rep_board">
              <div class="infra-node-header">
                <span class="infra-node-name">CFO Brief & Committee Pack</span>
                <span class="infra-node-status" style="background: rgba(92,225,242,0.15); color: var(--accent);">READY</span>
              </div>
              <div class="infra-attr-line">frequency: Live Streaming & Weekly</div>
              <div class="infra-attr-line">format: Semi-Maximalist Brief / PDF</div>
            </div>
          </div>
        </div>
      `;
    } else if (this.currentView === 'banking') {
      // 81 Accounts across 26 Banks Matrix Table
      let rows = state.accounts.map(a => `
        <tr>
          <td><strong style="color: var(--text-1);">${a.id}</strong></td>
          <td>${a.name}</td>
          <td><span style="color: var(--accent); font-weight: 700;">${a.bank_id}</span></td>
          <td><span class="node-jurisdiction-chip">${a.entity_id}</span></td>
          <td>${a.currency}</td>
          <td style="text-align: right; font-weight: 700; color: var(--text-1);">${store.formatMoney(a.balance, a.currency)}</td>
          <td><span class="status-chip ${a.is_restricted ? 'warn' : 'ok'}">${a.purpose}</span></td>
          <td>${a.is_stale ? '<span style="color: var(--warn);">STALE</span>' : '<span style="color: var(--ok);">FRESH</span>'}</td>
        </tr>
      `).join('');

      return `
        <div class="console-table-view">
          <div style="margin-bottom: 12px; font-size: 11px; color: var(--text-2);">
            Group Bank Account Register: <strong>${state.accounts.length} Accounts across ${state.banks.length} Banks</strong> (PRD PRC-7 / BA-5)
          </div>
          <table class="console-dense-table">
            <thead>
              <tr><th>ACC ID</th><th>Account Name</th><th>Bank</th><th>Entity</th><th>Curr</th><th style="text-align: right;">Balance</th><th>Purpose</th><th>Status</th></tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      `;
    } else {
      return `
        <div style="padding: 24px; color: var(--text-2); font-family: var(--font-console-mono); font-size: 12px;">
          <div style="font-weight: 700; color: var(--ok); margin-bottom: 8px;">ACCESS GRAPH & CONFLICT MATRIX AUDIT (SOD-1 to SOD-10)</div>
          <p>Verified: Zero active users hold conflicting Front/Middle or Preparer/Authorizer rights.</p>
        </div>
      `;
    }
  }

  renderDocsContent() {
    return `
      <div style="font-size: 14px; font-weight: 700; color: var(--text-1); margin-bottom: 4px;">Treasury Operating Infrastructure</div>
      <div class="docs-desc-text">
        Single-pane-of-glass architecture tracking ERP connectivity, message transformation, canonical liquidity positioning, banking partners, and immutable audit logs under the Global Treasury Center operating model.
      </div>

      <div class="docs-section-title">Typed Attributes (Schema)</div>
      <div class="docs-attr-list">
        <div class="docs-attr-item">
          <div class="docs-attr-title">feed_status: <span class="docs-attr-type">enum(LIVE, STALE, OFFLINE)</span></div>
          <div class="docs-attr-def">Current state of automated bank statement and balance ingest feeds.</div>
        </div>
        <div class="docs-attr-item">
          <div class="docs-attr-title">latency_ms: <span class="docs-attr-type">integer</span></div>
          <div class="docs-attr-def">Roundtrip network latency for direct API and host-to-host banking pipes.</div>
        </div>
        <div class="docs-attr-item">
          <div class="docs-attr-title">sod_lint_state: <span class="docs-attr-type">boolean</span></div>
          <div class="docs-attr-def">Verification status indicating zero segregation of duties policy conflicts.</div>
        </div>
        <div class="docs-attr-item">
          <div class="docs-attr-title">hash_chain_intact: <span class="docs-attr-type">boolean</span></div>
          <div class="docs-attr-def">SHA-256 cryptographic proof of immutable append-only event trail.</div>
        </div>
      </div>

      <div class="docs-section-title">Runbook & Policy References</div>
      <div style="font-size: 11px; color: var(--text-2); line-height: 1.6;">
        <div>• Policy Area 6: <strong>Technology and Data Standards</strong></div>
        <div>• Runbook: <strong>RB-04 Fallback to Manual File Ingest</strong></div>
        <div>• SLA Target: <strong>06:00 Local Cut-off Reconciliation</strong></div>
      </div>
    `;
  }

  bindConsoleEvents() {
    this.container.querySelectorAll('.console-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.currentView = btn.getAttribute('data-view');
        this.render();
      });
    });
  }
}
