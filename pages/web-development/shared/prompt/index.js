import { getSimpleModeData } from './adapters/simple.js';
import { deduplicatePrompts } from './dedupe.js';
import { sortPromptItems } from './order.js';
import { buildFinalPrompt } from './builder.js';

export const PromptEngine = {
    generate(mode = 'simple') {
        let data;

        if (mode === 'simple') {
            data = getSimpleModeData();
        } else {
             // Fallback for now
             data = { items: [], isValidSelection: false, hasStack: false };
        }

        const rawItems = data.items;

        // 1. Sort
        const sortedItems = sortPromptItems(rawItems);

        // 2. Dedupe
        const uniqueItems = deduplicatePrompts(sortedItems);

        // 3. Build String
        const promptText = buildFinalPrompt(uniqueItems);

        return {
            text: promptText,
            metadata: {
                isValidSelection: data.isValidSelection,
                hasStack: data.hasStack
            }
        };
    }
};