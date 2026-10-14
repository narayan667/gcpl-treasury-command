/**
 * GCPL Treasury Command - Action Confirmation & SoD Verification Modal
 * Conforms to PRD Section 7.5 & UI-21 (Expressive styling banned from approvals)
 */

import { store } from '../data.js';

export class ActionModal {
  constructor() {
    this.overlay = document.getElementById('action-confirm-modal');
    this.titleEl = document.getElementById('modal-action-title');
    this.bodyEl = document.getElementById('modal-action-body');
    this.reasonInput = document.getElementById('modal-action-reason');
    this.confirmBtn = document.getElementById('modal-confirm-btn');
    this.cancelBtn = document.getElementById('modal-cancel-btn');

    this.onConfirmCallback = null;
    this.bindEvents();
  }

  bindEvents() {
    if (this.cancelBtn) {
      this.cancelBtn.addEventListener('click', () => this.close());
    }
    if (this.confirmBtn) {
      this.confirmBtn.addEventListener('click', () => {
        const reason = this.reasonInput ? this.reasonInput.value.trim() : '';
        if (this.onConfirmCallback) {
          this.onConfirmCallback(reason);
        }
        this.close();
      });
    }
    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }
  }

  show({ title, message, sodRuleChecked, onConfirm }) {
    if (!this.overlay) return;
    this.titleEl.textContent = title;
    this.bodyEl.innerHTML = `
      <div style="font-size: 12px; color: var(--text-1); margin-bottom: 12px;">${message}</div>
      ${sodRuleChecked ? `
        <div style="background: rgba(61, 220, 151, 0.08); border: 1px solid rgba(61, 220, 151, 0.3); padding: 8px 12px; border-radius: var(--radius-xs); font-family: var(--font-terminal); font-size: 10px; color: var(--ok); margin-bottom: 12px;">
          ✓ SEGREGATION OF DUTIES LINT PASSED: ${sodRuleChecked}
        </div>
      ` : ''}
    `;
    if (this.reasonInput) this.reasonInput.value = '';
    this.onConfirmCallback = onConfirm;
    this.overlay.classList.add('open');
  }

  close() {
    if (this.overlay) this.overlay.classList.remove('open');
  }
}
