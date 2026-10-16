import { DOM } from './dom.js';
import { PromptEngine } from '../../shared/prompt/index.js';

export function generatePrompt() {
    const result = PromptEngine.generate('simple');

    const { text, metadata } = result;

    if (!text || text.trim() === "") {
        if (!metadata.hasStack && !metadata.isValidSelection) {
            alert("Please select or type the final option.");
            return;
        }
    }

    // Update DOM
    const finalPromptEl = DOM.finalPrompt();
    const copyBtn = DOM.copyBtn();

    if (finalPromptEl) finalPromptEl.textContent = text;
    if (copyBtn) copyBtn.classList.remove('hidden');
}
