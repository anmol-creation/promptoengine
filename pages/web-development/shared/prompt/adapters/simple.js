import { State } from '../../../simple/js/state.js';
import { simpleBrainMap } from '../../../simple/brain/index.js';
import { getInputValue } from '../../../simple/js/inputs.js';

export function getSimpleModeData() {
    const stackItems = [];

    // Process Stack
    const stack = State.getStack();
    stack.forEach(item => {
        let p = "";

        // Handle "Plan" special sequential fields
        if (["Field", "Target Audience", "Goal", "Platform", "Complexity", "Monetization", "Technology Preference", "Additional Requirements", "Output Format"].includes(item.category)) {
            p = `[${item.category}]: ${item.option || item.inputValue}`;
        } else {
            // We already stored leafNode when we added to stack!
            if (item.leafNode && item.leafNode.prompt) {
                p = item.leafNode.prompt;
                if (item.inputValue) {
                    p += `\n[Custom Instructions]: ${item.inputValue}`;
                }
            } else if (item.path && item.path.length > 0) {
                 // Fallback if path was provided
                 let currentData = simpleBrainMap[item.category];
                 for (let i = 1; i < item.path.length; i++) {
                     if (currentData && currentData.options && currentData.options[item.path[i]]) {
                         currentData = currentData.options[item.path[i]];
                     }
                 }
                 if (currentData && currentData.prompt) {
                    p = currentData.prompt;
                    if (item.inputValue) {
                        p += `\n[Custom Instructions]: ${item.inputValue}`;
                    }
                 }
            }
        }

        if (p && p.trim() !== "") {
            stackItems.push({
                category: item.category,
                text: p,
                isStack: true
            });
        }
    });

    // Process Current Pending Category (From UI Selectors)
    const currentItems = [];
    if (State.selectedCategory) {
        const category = State.selectedCategory;
        let categoryPrompt = "";
        let isValid = false;

        const selections = State.getAllSelections();
        let leafNode = simpleBrainMap[category];

        let startIndex = 0;
        if (selections.length > 0 && selections[0] === category) {
            startIndex = 1;
        }

        // Traverse down exactly matching selections array
        for (let i = startIndex; i < selections.length; i++) {
            const sel = selections[i];
            if (leafNode && leafNode.options && leafNode.options[sel]) {
                leafNode = leafNode.options[sel];
            } else {
                leafNode = null;
                break;
            }
        }

        if (!leafNode || leafNode.type === 'group') {
            // Invalid/Incomplete
            isValid = false;
        } else {
            isValid = true;
            if (typeof leafNode === 'object' && leafNode.prompt) {
                categoryPrompt = leafNode.prompt;
            } else if (typeof leafNode === 'string') {
                 categoryPrompt = leafNode;
            }

            const userText = getInputValue();
            if (userText && userText.trim()) {
                categoryPrompt += `\n\n[Custom Instructions]:\n${userText}`;
            }
        }

        if (categoryPrompt) {
             let contextPath = selections.join(' > ');
             categoryPrompt = `=== ${contextPath} ===\n${categoryPrompt}`;

            currentItems.push({
                category: category,
                text: categoryPrompt,
                isStack: false
            });
        }

        return {
            items: stackItems.concat(currentItems),
            isValidSelection: isValid,
            hasStack: stack.length > 0
        };
    }

    return {
        items: stackItems,
        isValidSelection: false,
        hasStack: stack.length > 0
    };
}
