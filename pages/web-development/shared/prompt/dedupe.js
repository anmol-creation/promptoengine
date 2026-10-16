export function deduplicatePrompts(items) {
    const seen = new Set();
    return items.filter(item => {
        const text = item.text.trim();
        if (!text) return false;
        if (seen.has(text)) return false;
        seen.add(text);
        return true;
    });
}