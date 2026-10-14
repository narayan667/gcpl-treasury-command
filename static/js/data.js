import { DEFAULT_DATASET } from './synthetic_payload.js';

export const store = {
  state: DEFAULT_DATASET,
  activeRegister: 'canvas',
  activeLens: 1, // 1: Cash, 2: Forecast, 3: Funding, 4: Risk, 5: Controls, 6: Data health, 7: Banking, 8: Service
  activePersona: 'CFO',
  activeEntityScope: null,
  reportingCurrency: 'USD', // 'USD' or 'INR'
  selectedEntityId: 'GCPL-UK',
  asOfDate: '2026-10-11T09:30:00Z',
  listeners: [],

  async init() {
    try {
      const res = await fetch('/api/state');
      if (res.ok) {
        this.state = await res.json();
      }
      console.log('[STORE] State loaded:', this.state);
    } catch (err) {
      console.log('[STORE] Running in standalone offline mode with embedded dataset.');
      this.state = JSON.parse(JSON.stringify(DEFAULT_DATASET));
    }
    this.notify();
  },

  subscribe(fn) {
    this.listeners.push(fn);
  },

  notify() {
    this.listeners.forEach(fn => fn(this));
  },

  setRegister(reg) {
    this.activeRegister = reg;
    this.notify();
  },

  setLens(lensNum) {
    this.activeLens = lensNum;
    this.notify();
  },

  setPersona(persona) {
    this.activePersona = persona;
    // ABAC Scope logic (PRD Section 2.3)
    if (persona === 'Local Coordinator UK') {
      this.activeEntityScope = 'GCPL-UK';
    } else if (persona === 'Local Coordinator US') {
      this.activeEntityScope = 'GCPL-US';
    } else if (persona === 'Local Coordinator ID') {
      this.activeEntityScope = 'GCPL-ID';
    } else {
      this.activeEntityScope = null;
    }
    this.notify();
  },

  toggleReportingCurrency() {
    this.reportingCurrency = this.reportingCurrency === 'USD' ? 'INR' : 'USD';
    this.notify();
  },

  selectEntity(id) {
    this.selectedEntityId = id;
    this.notify();
  },

  // Formatting helpers per PRD Section 7.4 & AD-3 (Supports Indian Lakh/Crore grouping)
  formatMoney(amount, currency = null) {
    if (amount === undefined || amount === null) return '-';
    const curr = currency || this.reportingCurrency;

    if (curr === 'INR') {
      // Indian digit grouping (Lakhs & Crores)
      const absVal = Math.abs(amount);
      if (absVal >= 10000000) {
        return `₹${(amount / 10000000).toFixed(2)} Cr`;
      } else if (absVal >= 100000) {
        return `₹${(amount / 100000).toFixed(2)} L`;
      } else {
        return `₹${Math.round(amount).toLocaleString('en-IN')}`;
      }
    } else if (curr === 'USD') {
      const absVal = Math.abs(amount);
      if (absVal >= 1000000) {
        return `$${(amount / 1000000).toFixed(2)}M`;
      } else if (absVal >= 1000) {
        return `$${(amount / 1000).toFixed(1)}K`;
      } else {
        return `$${Math.round(amount).toLocaleString('en-US')}`;
      }
    } else if (curr === 'GBP') {
      const absVal = Math.abs(amount);
      if (absVal >= 1000000) {
        return `£${(amount / 1000000).toFixed(2)}M`;
      } else {
        return `£${Math.round(amount).toLocaleString('en-GB')}`;
      }
    } else if (curr === 'EUR') {
      const absVal = Math.abs(amount);
      if (absVal >= 1000000) {
        return `€${(amount / 1000000).toFixed(2)}M`;
      } else {
        return `€${Math.round(amount).toLocaleString('de-DE')}`;
      }
    } else {
      return `${curr} ${Math.round(amount).toLocaleString()}`;
    }
  },

  getConvertedValue(nativeAmount, fromCurrency) {
    if (!this.state || !this.state.metadata) return nativeAmount;
    const rates = this.state.metadata.fx_rates_usd;
    const usdVal = nativeAmount * (rates[fromCurrency] || 1.0);
    if (this.reportingCurrency === 'INR') {
      return usdVal * 84.20;
    }
    return usdVal;
  }
};
