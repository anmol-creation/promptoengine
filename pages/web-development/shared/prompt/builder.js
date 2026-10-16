export function buildFinalPrompt(items) {
    if (!items || items.length === 0) return "";

    // Simple join with newlines for web dev
    return items.map(item => item.text).join('\n\n');
}