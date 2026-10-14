/**
 * GCPL Treasury Command - Main Application Controller
 * Coordinates the Four UI Registers, ABAC Personas, Shell Navigation & Events
 * Conforms to PRD Section 3 & Section 7
 */

import { store } from './data.js';
import { CommandPalette } from './components/command_palette.js';
import { Entity360Drawer } from './components/entity_360.js';
import { ActionModal } from './components/modal.js';
import { CanvasGraph } from './registers/canvas_graph.js';
import { PoolingWorkbench } from './registers/pooling_workbench.js';
import { WorkflowStudio } from './registers/workflow_studio.js';
import { ConsoleView } from './registers/console_view.js';
import { TerminalView } from './registers/terminal_view.js';
import { BriefView } from './registers/brief_view.js';
import { LocalCockpit } from './registers/local_cockpit.js';

class App {
  constructor() {
    this.commandPalette = null;
    this.entityDrawer = null;
    this.actionModal = null;
    
    // Register Controllers
    this.canvasGraph = null;
    this.poolingWorkbench = null;
    this.workflowStudio = null;
    this.consoleView = null;
    this.terminalView = null;
    this.briefView = null;
    this.localCockpit = null;

    this.activeCanvasSub = 'graph'; // 'graph' | 'workbench' | 'workflow'
  }

  async start() {
    console.log('[APP] Starting GCPL Treasury Command...');
    await store.init();

    // Initialize UI Components
    this.commandPalette = new CommandPalette();
    this.entityDrawer = new Entity360Drawer();
    this.actionModal = new ActionModal();

    // Initialize Register Views
    this.canvasGraph = new CanvasGraph('canvas-graph-container');
    this.poolingWorkbench = new PoolingWorkbench('canvas-workbench-container');
    this.workflowStudio = new WorkflowStudio('canvas-workflow-container');
    this.consoleView = new ConsoleView('surface-console');
    this.terminalView = new TerminalView('surface-terminal');
    this.briefView = new BriefView('surface-brief');
    this.localCockpit = new LocalCockpit('surface-cockpit');

    this.bindShellEvents();
    this.updateShell();

    // Subscribe to store updates
    store.subscribe(() => this.updateShell());

    // Explicit initial render of canvas graph
    if (this.canvasGraph) {
      this.canvasGraph.update();
    }

    console.log('[APP] Treasury Command fully operational.');
  }

  bindShellEvents() {
    // 4-Way Register Switcher Buttons
    document.querySelectorAll('.register-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const reg = btn.getAttribute('data-reg');
        store.setRegister(reg);
      });
    });

    // Persona Selector (ABAC Access Scopes)
    const personaSelect = document.getElementById('persona-select');
    if (personaSelect) {
      personaSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        store.setPersona(val);
        
        // Auto-switch default register per persona (PRD Section 2.1)
        if (val.includes('Local Coordinator')) {
          store.setRegister('cockpit');
        } else if (val === 'CFO' || val === 'Board Member') {
          store.setRegister('brief');
        } else if (val === 'Front Office Dealer' || val === 'Operations Specialist') {
          store.setRegister('terminal');
        } else if (val === 'IT Administrator') {
          store.setRegister('console');
        }
      });
    }

    // Currency Switcher Toggle (USD / INR with Lakh-Crore)
    const currBtn = document.getElementById('currency-toggle-btn');
    if (currBtn) {
      currBtn.addEventListener('click', () => {
        store.toggleReportingCurrency();
      });
    }

    // Breadcrumb Clicks
    document.getElementById('breadcrumb-root')?.addEventListener('click', () => {
      store.setRegister('canvas');
      this.switchCanvasSub('graph');
    });

    // Subview Switching on Canvas
    window.addEventListener('switch-canvas-subview', (e) => {
      this.switchCanvasSub(e.detail);
    });

    // Global Action Triggering with SoD Verification
    window.addEventListener('trigger-sod-action', (e) => {
      this.actionModal.show(e.detail);
    });
  }

  switchCanvasSub(sub) {
    this.activeCanvasSub = sub;
    const graphBox = document.getElementById('canvas-graph-container');
    const wbBox = document.getElementById('canvas-workbench-container');
    const wfBox = document.getElementById('canvas-workflow-container');

    if (graphBox) graphBox.style.display = sub === 'graph' ? 'flex' : 'none';
    if (wbBox) wbBox.style.display = sub === 'workbench' ? 'flex' : 'none';
    if (wfBox) wfBox.style.display = sub === 'workflow' ? 'flex' : 'none';

    document.querySelectorAll('.subview-btn').forEach(btn => {
      btn.classList.toggle('active', btn.id === `btn-sub-${sub}`);
    });
  }

  updateShell() {
    const reg = store.activeRegister;

    // Switch visible surface
    document.querySelectorAll('.register-surface').forEach(surf => {
      surf.classList.remove('active');
    });

    const activeSurf = document.getElementById(`surface-${reg}`);
    if (activeSurf) activeSurf.classList.add('active');

    // Update 4-way switcher tabs
    document.querySelectorAll('.register-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-reg') === reg);
    });

    // Update currency toggle button
    const currBtn = document.getElementById('currency-toggle-btn');
    if (currBtn) {
      currBtn.textContent = `CURR: ${store.reportingCurrency} ⇄`;
    }

    // Update breadcrumb
    const bcEntity = document.getElementById('breadcrumb-entity');
    if (bcEntity) {
      bcEntity.textContent = store.selectedEntityId;
    }
  }
}

// Bulletproof Bootstrap
function startApp() {
  const app = new App();
  app.start();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
