/**
 * GCPL Treasury Command - Command Palette Component (Ctrl+K / Cmd+K)
 * Conforms to PRD Section 7.5 & Appendix B
 */

import { store } from '../data.js';

export class CommandPalette {
  constructor() {
    this.overlay = document.getElementById('cmd-palette-modal');
    this.input = document.getElementById('cmd-palette-input');
    this.resultsContainer = document.getElementById('cmd-palette-results');
    this.isOpen = false;
    this.selectedIndex = 0;
    this.results = [];

    this.bindEvents();
  }

  bindEvents() {
    // Keyboard listener for Cmd+K / Ctrl+K
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.toggle();
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      } else if (this.isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          this.selectedIndex = Math.min(this.selectedIndex + 1, this.results.length - 1);
          this.renderResults();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
          this.renderResults();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          this.executeSelected();
        }
      }
    });

    if (this.input) {
      this.input.addEventListener('input', () => this.search());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }

    // Trigger button in header
    const triggerBtn = document.getElementById('cmd-k-btn');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => this.open());
    }
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }

  open() {
    this.isOpen = true;
    if (this.overlay) this.overlay.classList.add('open');
    if (this.input) {
      this.input.value = '';
      this.input.focus();
    }
    this.search();
  }

  close() {
    this.isOpen = false;
    if (this.overlay) this.overlay.classList.remove('open');
  }

  search() {
    const query = this.input ? this.input.value.toLowerCase().trim() : '';
    const state = store.state;
    if (!state) return;

    let items = [];

    // Built-in commands
    items.push({ type: 'REGISTER', title: 'Switch to Canvas Register (Node Graph)', action: () => store.setRegister('canvas') });
    items.push({ type: 'REGISTER', title: 'Switch to Console Register (Monolithic Estate)', action: () => store.setRegister('console') });
    items.push({ type: 'REGISTER', title: 'Switch to Terminal Register (Blotters & Queues)', action: () => store.setRegister('terminal') });
    items.push({ type: 'REGISTER', title: 'Switch to Brief Register (CFO Executive Brief)', action: () => store.setRegister('brief') });
    
    // Lens commands (1-8)
    items.push({ type: 'LENS', title: 'Lens 1: Cash Positioning & Stale Balances', action: () => { store.setRegister('canvas'); store.setLens(1); } });
    items.push({ type: 'LENS', title: 'Lens 2: 13-Week Forecast & Variances', action: () => { store.setRegister('canvas'); store.setLens(2); } });
    items.push({ type: 'LENS', title: 'Lens 3: Funding & Liquidity Pooling', action: () => { store.setRegister('canvas'); store.setLens(3); } });
    items.push({ type: 'LENS', title: 'Lens 4: Exposures & Hedging Linkage', action: () => { store.setRegister('canvas'); store.setLens(4); } });
    items.push({ type: 'LENS', title: 'Lens 5: Controls, Policies & SoD Breaches', action: () => { store.setRegister('canvas'); store.setLens(5); } });
    items.push({ type: 'LENS', title: 'Lens 6: Data Health & Connectivity Feeds', action: () => { store.setRegister('canvas'); store.setLens(6); } });
    items.push({ type: 'LENS', title: 'Lens 7: Banking Lens (75+ Accounts & 26 Banks)', action: () => { store.setRegister('canvas'); store.setLens(7); } });
    items.push({ type: 'LENS', title: 'Lens 8: Service Performance & SLA Times', action: () => { store.setRegister('canvas'); store.setLens(8); } });

    // Entities
    if (state.entities) {
      state.entities.forEach(ent => {
        items.push({
          type: 'ENTITY',
          title: `${ent.name} (${ent.id} - ${ent.currency})`,
          detail: `Cash: ${store.formatMoney(ent.cash_categories.total_reported_native, ent.currency)} | Status: ${ent.pool_status}`,
          action: () => {
            store.selectEntity(ent.id);
            window.dispatchEvent(new CustomEvent('open-entity-drawer', { detail: ent.id }));
          }
        });
      });
    }

    // Workflows (W1-W15)
    if (state.workflows) {
      state.workflows.forEach(wf => {
        items.push({
          type: 'WORKFLOW',
          title: `${wf.id}: ${wf.name}`,
          detail: `Version: ${wf.version} | Trigger: ${wf.trigger}`,
          action: () => {
            store.setRegister('canvas');
            window.dispatchEvent(new CustomEvent('open-workflow-studio', { detail: wf.id }));
          }
        });
      });
    }

    // Filter
    if (query) {
      this.results = items.filter(it => 
        it.title.toLowerCase().includes(query) || 
        (it.detail && it.detail.toLowerCase().includes(query)) ||
        it.type.toLowerCase().includes(query)
      );
    } else {
      this.results = items.slice(0, 15);
    }

    this.selectedIndex = 0;
    this.renderResults();
  }

  renderResults() {
    if (!this.resultsContainer) return;
    this.resultsContainer.innerHTML = '';

    if (this.results.length === 0) {
      this.resultsContainer.innerHTML = `<div style="padding: 16px; color: var(--text-3); text-align: center; font-family: var(--font-terminal); font-size: 11px;">NO MATCHING OBJECTS OR COMMANDS</div>`;
      return;
    }

    this.results.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = `cmd-result-item ${idx === this.selectedIndex ? 'selected' : ''}`;
      el.innerHTML = `
        <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          <div style="font-weight: 600; color: ${idx === this.selectedIndex ? 'var(--accent)' : 'var(--text-1)'}">${item.title}</div>
          ${item.detail ? `<div style="font-size: 10px; color: var(--text-3); margin-top: 2px;">${item.detail}</div>` : ''}
        </div>
        <span class="cmd-result-category">${item.type}</span>
      `;
      el.addEventListener('click', () => {
        this.selectedIndex = idx;
        this.executeSelected();
      });
      this.resultsContainer.appendChild(el);
    });
  }

  executeSelected() {
    if (this.results[this.selectedIndex]) {
      this.results[this.selectedIndex].action();
      this.close();
    }
  }
}
