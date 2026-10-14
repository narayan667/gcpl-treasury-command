/**
 * GCPL Treasury Command - Group Liquidity Graph (Central Feature)
 * Conforms to PRD Section 4 & Reference Images 1, 3, 4/5
 * n8n-style Node Workflow Canvas from HQ to every Region, Entity, and Account.
 */

import { store } from '../data.js';

export class CanvasGraph {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.viewport = null;
    this.svg = null;
    this.nodesLayer = null;
    this.edgesLayer = null;
    this.groupsLayer = null;
    
    // Camera Transform - Set default zoom to fit full 3-region layout
    this.zoom = 0.65;
    this.panX = 40;
    this.panY = 20;
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    
    // Sub-view: 'graph' | 'workbench' | 'workflow' | 'table'
    this.subView = 'graph';
    this.selectedNodeId = null;
    this.isolatedNodeId = null;

    this.init();
  }

  init() {
    this.renderLayout();
    this.bindEvents();
    store.subscribe(() => this.update());
    // Immediately render nodes and edges upon initialization
    if (store.state) {
      this.update();
    }
  }

  renderLayout() {
    this.container.innerHTML = `
      <div class="canvas-layout">
        <!-- Floating Graph Toolbar (Image 3 & 4 Pattern) -->
        <div class="canvas-toolbar">
          <button class="canvas-tool-btn" id="tool-zoom-in" title="Zoom In">+</button>
          <button class="canvas-tool-btn" id="tool-zoom-out" title="Zoom Out">-</button>
          <span style="font-family: var(--font-terminal); font-size: 10px; color: var(--text-3); padding: 0 4px;" id="zoom-indicator">85%</span>
          <button class="canvas-tool-btn" id="tool-fit" title="Fit to Screen">⛶ Fit</button>
          <div class="toolbar-separator"></div>
          <button class="canvas-tool-btn" id="tool-auto-layout" title="Auto Layout Nodes">⚡ Auto-Layout</button>
          <button class="canvas-tool-btn" id="tool-isolate" title="Isolate Selected Entity">⊙ Isolate</button>
          <button class="canvas-tool-btn" id="tool-table-toggle" title="Synchronized Table View">☷ Table</button>
        </div>

        <!-- Lens Selector (PRD 4.5: 8 Semantic Lenses) -->
        <div class="lens-bar">
          <button class="lens-btn ${store.activeLens === 1 ? 'active' : ''}" data-lens="1">1. Cash <kbd>[1]</kbd></button>
          <button class="lens-btn ${store.activeLens === 2 ? 'active' : ''}" data-lens="2">2. Forecast <kbd>[2]</kbd></button>
          <button class="lens-btn ${store.activeLens === 3 ? 'active' : ''}" data-lens="3">3. Funding <kbd>[3]</kbd></button>
          <button class="lens-btn ${store.activeLens === 4 ? 'active' : ''}" data-lens="4">4. Risk <kbd>[4]</kbd></button>
          <button class="lens-btn ${store.activeLens === 5 ? 'active' : ''}" data-lens="5">5. Controls <kbd>[5]</kbd></button>
          <button class="lens-btn ${store.activeLens === 6 ? 'active' : ''}" data-lens="6">6. Data Health <kbd>[6]</kbd></button>
          <button class="lens-btn ${store.activeLens === 7 ? 'active' : ''}" data-lens="7">7. Banking <kbd>[7]</kbd></button>
          <button class="lens-btn ${store.activeLens === 8 ? 'active' : ''}" data-lens="8">8. Service <kbd>[8]</kbd></button>
        </div>

        <!-- Sub-View Switcher -->
        <div class="canvas-subview-strip">
          <button class="subview-btn ${this.subView === 'graph' ? 'active' : ''}" id="btn-sub-graph">Node Graph</button>
          <button class="subview-btn ${this.subView === 'workbench' ? 'active' : ''}" id="btn-sub-workbench">Pooling Workbench</button>
          <button class="subview-btn ${this.subView === 'workflow' ? 'active' : ''}" id="btn-sub-workflow">Workflow Studio</button>
        </div>

        <!-- Viewport Area -->
        <div class="graph-viewport" id="graph-viewport">
          <svg class="graph-svg" id="graph-svg">
            <defs>
              <marker id="arrow-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#F2C94C"/>
              </marker>
              <marker id="arrow-violet" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#B58CFF"/>
              </marker>
              <marker id="arrow-teal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#2DD4BF"/>
              </marker>
            </defs>
            <g id="svg-transform-group">
              <g id="svg-backdrop-groups"></g>
              <g id="svg-edges"></g>
            </g>
          </svg>
          <div id="html-nodes-container" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></div>
        </div>

        <!-- Minimap (Bottom Left) -->
        <div class="graph-minimap">
          <div class="minimap-title">NAVIGATOR // MINIMAP</div>
          <div class="minimap-content" id="minimap-content">
            <div class="minimap-lens-rect" id="minimap-lens"></div>
          </div>
        </div>
      </div>
    `;

    this.viewport = document.getElementById('graph-viewport');
    this.svgGroup = document.getElementById('svg-transform-group');
    this.groupsLayer = document.getElementById('svg-backdrop-groups');
    this.edgesLayer = document.getElementById('svg-edges');
    this.nodesLayer = document.getElementById('html-nodes-container');
  }

  bindEvents() {
    // Pan and Zoom
    this.viewport.addEventListener('mousedown', (e) => {
      if (e.target.closest('.node-card')) return;
      this.isDragging = true;
      this.dragStartX = e.clientX - this.panX;
      this.dragStartY = e.clientY - this.panY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      this.panX = e.clientX - this.dragStartX;
      this.panY = e.clientY - this.dragStartY;
      this.applyTransform();
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    this.viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      const newZoom = Math.min(1.8, Math.max(0.35, this.zoom * zoomFactor));
      
      // Zoom toward cursor
      const rect = this.viewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      this.panX = mouseX - (mouseX - this.panX) * (newZoom / this.zoom);
      this.panY = mouseY - (mouseY - this.panY) * (newZoom / this.zoom);
      this.zoom = newZoom;

      this.applyTransform();
    }, { passive: false });

    // Toolbar buttons
    document.getElementById('tool-zoom-in')?.addEventListener('click', () => {
      this.zoom = Math.min(1.8, this.zoom * 1.15);
      this.applyTransform();
    });
    document.getElementById('tool-zoom-out')?.addEventListener('click', () => {
      this.zoom = Math.max(0.35, this.zoom * 0.85);
      this.applyTransform();
    });
    document.getElementById('tool-fit')?.addEventListener('click', () => {
      this.fitToScreen();
    });
    document.getElementById('tool-auto-layout')?.addEventListener('click', () => {
      this.panX = 80;
      this.panY = 60;
      this.zoom = 0.85;
      this.applyTransform();
    });
    document.getElementById('tool-isolate')?.addEventListener('click', () => {
      if (this.isolatedNodeId) {
        this.isolatedNodeId = null;
      } else if (this.selectedNodeId) {
        this.isolatedNodeId = this.selectedNodeId;
      }
      this.update();
    });

    // Lens Buttons
    this.container.querySelectorAll('.lens-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lensNum = parseInt(btn.getAttribute('data-lens'), 10);
        store.setLens(lensNum);
        this.container.querySelectorAll('.lens-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Subview buttons
    document.getElementById('btn-sub-graph')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'graph' }));
    });
    document.getElementById('btn-sub-workbench')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'workbench' }));
    });
    document.getElementById('btn-sub-workflow')?.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('switch-canvas-subview', { detail: 'workflow' }));
    });

    // Keyboard shortcuts (1-8 for lenses)
    window.addEventListener('keydown', (e) => {
      if (store.activeRegister !== 'canvas') return;
      if (e.key >= '1' && e.key <= '8' && !e.metaKey && !e.ctrlKey) {
        store.setLens(parseInt(e.key, 10));
      } else if (e.key === 'Escape') {
        this.isolatedNodeId = null;
        this.update();
      }
    });
  }

  applyTransform() {
    if (!this.svgGroup || !this.nodesLayer) return;
    const transformStr = `translate(${this.panX}px, ${this.panY}px) scale(${this.zoom})`;
    this.svgGroup.setAttribute('transform', `translate(${this.panX}, ${this.panY}) scale(${this.zoom})`);
    this.nodesLayer.style.transform = transformStr;
    this.nodesLayer.style.transformOrigin = '0 0';

    const zoomEl = document.getElementById('zoom-indicator');
    if (zoomEl) zoomEl.textContent = `${Math.round(this.zoom * 100)}%`;
  }

  fitToScreen() {
    this.panX = 60;
    this.panY = 50;
    this.zoom = 0.72;
    this.applyTransform();
  }

  update() {
    const state = store.state;
    if (!state || !this.nodesLayer) return;

    // Build node coordinates
    const coords = this.computeLayout(state);
    this.renderBackdropGroups(state, coords);
    this.renderEdges(state, coords);
    this.renderNodes(state, coords);
    this.applyTransform();
  }

  computeLayout(state) {
    const coords = {};
    // Level 0: GTC HQ Node
    coords['GTC'] = { x: 780, y: 40, width: 340, height: 180 };

    // Level 1: Regional Hubs & Entity columns
    // Region 1: ASIA (Left)
    coords['REG-ASIA'] = { x: 60, y: 280, width: 440, height: 780 };
    coords['HUB-ASIA'] = { x: 120, y: 320, width: 320, height: 100 };
    coords['GCPL-IN'] = { x: 120, y: 450, width: 320, height: 160 };
    coords['GCPL-ID'] = { x: 120, y: 640, width: 320, height: 160 };
    coords['GCPL-BD'] = { x: 120, y: 830, width: 320, height: 160 };
    coords['GCPL-SG'] = { x: 120, y: 1020, width: 320, height: 160 };

    // Region 2: EMEA (Center)
    coords['REG-EMEA'] = { x: 560, y: 280, width: 780, height: 780 };
    coords['HUB-EMEA'] = { x: 790, y: 320, width: 320, height: 100 };
    coords['GCPL-UK'] = { x: 610, y: 450, width: 320, height: 160 }; // SURPLUS CANDIDATE (£18.5M)
    coords['GCPL-NL'] = { x: 970, y: 450, width: 320, height: 160 };
    coords['GCPL-AE'] = { x: 610, y: 640, width: 320, height: 160 };
    coords['GCPL-ZA'] = { x: 970, y: 640, width: 320, height: 160 };
    coords['GCPL-NG'] = { x: 610, y: 830, width: 320, height: 160 };

    // Region 3: NORTH AMERICA (Right)
    coords['REG-NA'] = { x: 1400, y: 280, width: 440, height: 780 };
    coords['HUB-NA'] = { x: 1460, y: 320, width: 320, height: 100 };
    coords['GCPL-US'] = { x: 1460, y: 450, width: 320, height: 160 }; // NEED CANDIDATE ($14.2M)
    coords['GCPL-CA'] = { x: 1460, y: 640, width: 320, height: 160 };
    coords['GCPL-KE'] = { x: 1460, y: 830, width: 320, height: 160 }; // Onboarding

    return coords;
  }

  renderBackdropGroups(state, coords) {
    if (!this.groupsLayer) return;
    let html = '';
    const regions = [
      { id: 'REG-ASIA', name: 'REGION: ASIA (HUB: MUMBAI / SINGAPORE)', border: 'var(--region-asia-border)', fill: 'var(--region-asia)' },
      { id: 'REG-EMEA', name: 'REGION: EUROPE & MIDDLE EAST (HUB: LONDON / DUBAI)', border: 'var(--region-emea-border)', fill: 'var(--region-emea)' },
      { id: 'REG-NA', name: 'REGION: NORTH AMERICA (HUB: NEW YORK)', border: 'var(--region-na-border)', fill: 'var(--region-na)' }
    ];

    regions.forEach(r => {
      const c = coords[r.id];
      if (!c) return;
      html += `
        <rect x="${c.x}" y="${c.y}" width="${c.width}" height="${c.height}" rx="14" fill="${r.fill}" stroke="${r.border}" stroke-width="1.5" stroke-dasharray="6,4" />
        <text x="${c.x + 20}" y="${c.y + 26}" fill="${r.border}" font-family="var(--font-terminal)" font-size="11" font-weight="700" letter-spacing="1">${r.name}</text>
      `;
    });

    this.groupsLayer.innerHTML = html;
  }

  renderEdges(state, coords) {
    if (!this.edgesLayer) return;
    let html = '';

    // E01 Functional Lines: GTC -> Regional Hubs
    const gtc = coords['GTC'];
    const gtcBottomX = gtc.x + gtc.width / 2;
    const gtcBottomY = gtc.y + gtc.height;

    ['HUB-ASIA', 'HUB-EMEA', 'HUB-NA'].forEach(hubId => {
      const h = coords[hubId];
      if (!h) return;
      const hTopX = h.x + h.width / 2;
      const hTopY = h.y;
      
      const pathD = `M ${gtcBottomX} ${gtcBottomY} C ${gtcBottomX} ${(gtcBottomY + hTopY) / 2}, ${hTopX} ${(gtcBottomY + hTopY) / 2}, ${hTopX} ${hTopY}`;
      html += `<path d="${pathD}" fill="none" stroke="var(--line-3)" stroke-width="2" />`;
    });

    // Regional Hubs -> Entities
    const hubMapping = {
      'HUB-ASIA': ['GCPL-IN', 'GCPL-ID', 'GCPL-BD', 'GCPL-SG'],
      'HUB-EMEA': ['GCPL-UK', 'GCPL-NL', 'GCPL-AE', 'GCPL-ZA', 'GCPL-NG'],
      'HUB-NA': ['GCPL-US', 'GCPL-CA', 'GCPL-KE']
    };

    Object.entries(hubMapping).forEach(([hubId, entIds]) => {
      const hub = coords[hubId];
      if (!hub) return;
      const hubMidX = hub.x + hub.width / 2;
      const hubMidY = hub.y + hub.height;

      entIds.forEach(eid => {
        const ent = coords[eid];
        if (!ent) return;
        const entTopX = ent.x + ent.width / 2;
        const entTopY = ent.y;

        const pathD = `M ${hubMidX} ${hubMidY} C ${hubMidX} ${(hubMidY + entTopY) / 2}, ${entTopX} ${(hubMidY + entTopY) / 2}, ${entTopX} ${entTopY}`;
        html += `<path d="${pathD}" fill="none" stroke="var(--line-2)" stroke-width="1.5" stroke-dasharray="3,3" />`;
      });
    });

    // E06 Match Suggestion Ghost Edge: GCPL-UK (£18.5M surplus) -> GCPL-US ($14.2M borrowing need)
    const uk = coords['GCPL-UK'];
    const us = coords['GCPL-US'];
    if (uk && us) {
      const ukRightX = uk.x + uk.width;
      const ukRightY = uk.y + uk.height / 2;
      const usLeftX = us.x;
      const usLeftY = us.y + us.height / 2;

      const ghostD = `M ${ukRightX} ${ukRightY} C ${ukRightX + 240} ${ukRightY - 100}, ${usLeftX - 240} ${usLeftY - 100}, ${usLeftX} ${usLeftY}`;
      
      // Animated gold & violet dashed ghost match
      html += `
        <path d="${ghostD}" fill="none" stroke="var(--port-cash)" stroke-width="3" stroke-dasharray="8,6" marker-end="url(#arrow-gold)" opacity="0.85">
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        <!-- Format Badge Hexagon on edge -->
        <g transform="translate(${(ukRightX + usLeftX) / 2 - 60}, ${(ukRightY + usLeftY) / 2 - 80})">
          <rect width="180" height="26" rx="4" fill="var(--bg-1)" stroke="var(--accent)" stroke-width="1.5" />
          <text x="90" y="17" fill="var(--accent)" font-family="var(--font-terminal)" font-size="10" font-weight="700" text-anchor="middle">
            E06: MATCH SUGGESTION $14.2M
          </text>
        </g>
      `;
    }

    this.edgesLayer.innerHTML = html;
  }

  renderNodes(state, coords) {
    if (!this.nodesLayer) return;
    this.nodesLayer.innerHTML = '';

    // Render N01 GTC HQ Node
    const gtcC = coords['GTC'];
    const gtcNode = document.createElement('div');
    gtcNode.className = 'node-card node-gtc';
    gtcNode.style.left = `${gtcC.x}px`;
    gtcNode.style.top = `${gtcC.y}px`;
    gtcNode.style.pointerEvents = 'auto';

    const sum = state.group_summary;
    const totals = store.reportingCurrency === 'INR' ? sum.totals_inr : sum.totals_usd;

    gtcNode.innerHTML = `
      <div class="node-header" style="background: linear-gradient(90deg, #1A283B 0%, #151F2E 100%);">
        <div class="node-title-group">
          <span class="brand-icon" style="width: 18px; height: 18px; font-size: 10px;">HQ</span>
          <span class="node-title" style="color: var(--accent);">GTC MUMBAI // GLOBAL TREASURY CENTER</span>
        </div>
        <span class="status-chip ok">GOV: ACTIVE</span>
      </div>
      <div class="node-body">
        <div class="node-cash-headline">
          <div>
            <span class="node-cash-amount">${store.formatMoney(totals.total_reported_cash)}</span>
            <span class="node-cash-curr">${store.reportingCurrency}</span>
          </div>
          <span style="font-family: var(--font-terminal); font-size: 10px; color: var(--ok); font-weight: 700;">${sum.cash_visibility_coverage_pct}% VISIBILITY</span>
        </div>
        <table class="node-mini-table">
          <tr><td>Deployable Group Cash</td><td class="val" style="color: var(--accent); font-weight: 700;">${store.formatMoney(totals.available_group_deployable)}</td></tr>
          <tr><td>Local Operating Buffers</td><td class="val">${store.formatMoney(totals.available_local_obligations)}</td></tr>
          <tr><td>Restricted Balances</td><td class="val" style="color: var(--warn);">${store.formatMoney(totals.restricted_cash)}</td></tr>
          <tr><td>Gross Debt / Facility Drawn</td><td class="val" style="color: var(--err);">${store.formatMoney(totals.gross_debt)}</td></tr>
        </table>
      </div>
      <div class="node-footer">
        <span>STALE FEEDS: ${sum.stale_accounts_count}</span>
        <span style="color: var(--warn);">OPEN BREACHES: ${sum.open_breaches}</span>
        <span>PENDING APPROVALS: ${sum.pending_approvals}</span>
      </div>
      <!-- Ports -->
      <div class="port-handle port-cash port-out" style="top: 50%;" title="P01: Group Cash Port"></div>
      <div class="port-handle port-policy port-out" style="top: 75%;" title="P07: Group Policy Port"></div>
    `;

    gtcNode.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('open-entity-drawer', { detail: 'GCPL-IN' }));
    });
    this.nodesLayer.appendChild(gtcNode);

    // Render Regional Hubs (N02)
    state.regions.forEach(reg => {
      const hubId = reg.id === 'REG-ASIA' ? 'HUB-ASIA' : (reg.id === 'REG-EMEA' ? 'HUB-EMEA' : 'HUB-NA');
      const c = coords[hubId];
      if (!c) return;

      const hubNode = document.createElement('div');
      hubNode.className = 'node-card node-hub';
      hubNode.style.left = `${c.x}px`;
      hubNode.style.top = `${c.y}px`;
      hubNode.style.pointerEvents = 'auto';

      hubNode.innerHTML = `
        <div class="node-header">
          <div class="node-title-group">
            <span class="node-jurisdiction-chip">HUB</span>
            <span class="node-title">${reg.name} Hub</span>
          </div>
          <span class="status-chip ok">SLA: 98%</span>
        </div>
        <div class="node-body">
          <div style="font-size: 11px; color: var(--text-2); margin-bottom: 4px;"><strong>Lead:</strong> ${reg.lead.split('(')[0]}</div>
          <div style="font-size: 10px; color: var(--text-3); font-family: var(--font-terminal);">Coverage: ${reg.coverage_hours}</div>
        </div>
        <div class="node-footer">
          <span>ENTITIES: ${reg.entities_count}</span>
          <span style="color: var(--ok);">[DELEGATED MANDATE]</span>
        </div>
      `;
      this.nodesLayer.appendChild(hubNode);
    });

    // Render Entity Nodes (N03)
    state.entities.forEach(ent => {
      const c = coords[ent.id];
      if (!c) return;

      const entNode = document.createElement('div');
      const isSelected = this.selectedNodeId === ent.id;
      const isBreach = ent.breach_count > 0;
      const isStale = ent.stale_count > 0;
      const isSurplusCandidate = ent.id === 'GCPL-UK';
      const isBorrowerCandidate = ent.id === 'GCPL-US';

      entNode.className = `node-card node-entity ${isSelected ? 'selected' : ''} ${isBreach ? 'error-breach' : ''} ${isStale ? 'stale-warning' : ''}`;
      entNode.style.left = `${c.x}px`;
      entNode.style.top = `${c.y}px`;
      entNode.style.pointerEvents = 'auto';

      if (this.isolatedNodeId && this.isolatedNodeId !== ent.id) {
        entNode.style.opacity = '0.25';
      }

      // Lens data adaptation (PRD 4.5)
      let lensChip = '';
      if (store.activeLens === 1) { // Cash Lens
        lensChip = ent.pool_eligible ? '<span class="status-chip ok">POOL ELIGIBLE</span>' : `<span class="status-chip warn">${ent.pool_status}</span>`;
      } else if (store.activeLens === 2) { // Forecast Lens
        lensChip = `<span class="status-chip ${ent.forecast_timeliness === 'ON_TIME' ? 'ok' : 'warn'}">${ent.forecast_timeliness}</span>`;
      } else if (store.activeLens === 3) { // Funding Lens
        lensChip = isSurplusCandidate ? '<span class="status-chip ok">SURPLUS £18.5M</span>' : (isBorrowerCandidate ? '<span class="status-chip warn">BORROWING $14.2M</span>' : `<span class="status-chip">${ent.pool_status}</span>`);
      } else if (store.activeLens === 5) { // Controls Lens
        lensChip = ent.breach_count > 0 ? '<span class="status-chip warn">1 BREACH</span>' : '<span class="status-chip ok">POLICY ACK</span>';
      } else if (store.activeLens === 6) { // Data Health Lens
        lensChip = ent.stale_count > 0 ? `<span class="status-chip warn">${ent.stale_count} STALE</span>` : '<span class="status-chip ok">FEEDS OK</span>';
      } else {
        lensChip = `<span class="status-chip ok">${ent.status}</span>`;
      }

      const cat = ent.cash_categories;

      entNode.innerHTML = `
        <div class="node-header">
          <div class="node-title-group">
            <span class="node-jurisdiction-chip">${ent.jurisdiction}</span>
            <span class="node-title" title="${ent.name}">${ent.name}</span>
          </div>
          ${lensChip}
        </div>
        <div class="node-body">
          <div class="node-cash-headline">
            <div>
              <span class="node-cash-amount">${store.formatMoney(cat.total_reported_native, ent.currency)}</span>
              <span class="node-cash-curr">${ent.currency}</span>
            </div>
            <span class="node-usd-eq">≈ ${store.formatMoney(cat.total_reported_usd, 'USD')}</span>
          </div>
          <table class="node-mini-table">
            <tr><td>Available Local</td><td class="val">${store.formatMoney(cat.available_local_native, ent.currency)}</td></tr>
            <tr><td>Deployable Surplus</td><td class="val" style="color: ${cat.available_group_deployable_native > 0 ? 'var(--accent)' : 'var(--text-3)'}; font-weight: 700;">${store.formatMoney(cat.available_group_deployable_native, ent.currency)}</td></tr>
            <tr><td>Restricted</td><td class="val" style="color: ${cat.restricted_native > 0 ? 'var(--warn)' : 'var(--text-3)'};">${store.formatMoney(cat.restricted_native, ent.currency)}</td></tr>
          </table>
          <div class="node-sparkline-wrap" title="13-Week Rolling Cash Flow Profile">
            <svg width="100%" height="100%" viewBox="0 0 100 24" preserveAspectRatio="none">
              <path d="M 0 18 Q 25 10 50 14 T 100 8" fill="none" stroke="var(--port-forecast)" stroke-width="1.8" />
            </svg>
          </div>
        </div>
        <div class="node-footer">
          <span>${ent.account_count} ACCOUNTS</span>
          <span>ERP: ${ent.erp.split(' ')[0]}</span>
          ${isSurplusCandidate ? '<span style="color: var(--ok); font-weight: 700;">[MATCH AVAIL]</span>' : ''}
          ${isBorrowerCandidate ? '<span style="color: var(--warn); font-weight: 700;">[NEED MATCH]</span>' : ''}
        </div>
        <!-- Typed Ports -->
        <div class="port-handle port-cash port-in" style="top: 35%;" title="P01: Cash In"></div>
        <div class="port-handle port-forecast port-out" style="top: 35%;" title="P02: 13W Forecast Out"></div>
        <div class="port-handle port-cash port-out" style="top: 65%;" title="P01: Deployable Cash Out"></div>
        <div class="port-handle port-approval port-out" style="top: 85%;" title="P05: Dual Approval Out"></div>
      `;

      entNode.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectedNodeId = ent.id;
        store.selectEntity(ent.id);
        window.dispatchEvent(new CustomEvent('open-entity-drawer', { detail: ent.id }));
        this.update();
      });

      this.nodesLayer.appendChild(entNode);
    });
  }
}
