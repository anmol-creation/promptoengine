export const fullOutfitColorGenerator = (input) => {
    // "type + type" logic
    // System Interpretation:
    // First value -> Top color
    // Second value -> Bottom color
    // Edge Cases:
    // Single color -> Top = color, Bottom = auto-matched neutral
    // No input -> System neutral colors assume

    let topColor = "";
    let bottomColor = "";

    if (!input || input.trim() === "") {
        return "wearing outfit with neutral colors"; // Or let the AI decide
    }

    const parts = input.split('+').map(s => s.trim());

    if (parts.length >= 2) {
        topColor = parts[0];
        bottomColor = parts[1];
        return `wearing outfit with ${topColor} top and ${bottomColor} bottom`;
    } else if (parts.length === 1) {
        topColor = parts[0];
        return `wearing outfit with ${topColor} top and neutral bottom`;
    }

    return `wearing outfit in ${input} colors`; // Fallback
};

export const generateMaleClothesDefault = () => "wearing casual modern outfit";

export const getFemaleClothingColors = (itemName, type) => {
    const singleColors = [
        "Red", "Black", "White", "Royal Blue", "Pink", "Yellow", "Emerald Green",
        "Golden", "Silver", "Purple", "Maroon", "Neon Green", "Floral Pattern",
        "Pastel Pink", "Beige"
    ];

    const comboColors = {
        "White Top + Blue Bottom": "wearing a White top and Blue bottom",
        "Black + Black (All Black)": "wearing a full Black outfit",
        "Pink Top + White Bottom": "wearing a Pink top and White bottom",
        "Red Top + Black Bottom": "wearing a Red top and Black bottom",
        "Yellow Top + Blue Bottom": "wearing a Yellow top and Blue bottom",
        "White Top + Black Bottom": "wearing a White top and Black bottom",
        "Black Top + Blue Bottom": "wearing a Black top and Blue denim bottom",
        "Beige Top + Brown Bottom": "wearing a Beige top and Brown bottom",
        "Neon + Black": "wearing a Neon top and Black bottom"
    };

    const options = {};

    const singleColorMap = {
        "White": "#FFFFFF", "Black": "#000000", "Grey": "#808080", "Blue": "#0000FF", "Royal Blue": "#4169E1",
        "Red": "#FF0000", "Green": "#008000", "Emerald Green": "#50C878", "Yellow": "#FFFF00", "Pink": "#FFC0CB",
        "Pastel Pink": "#FFD1DC", "Purple": "#800080", "Maroon": "#800000", "Golden": "#FFD700", "Silver": "#C0C0C0",
        "Neon Green": "#39FF14", "Beige": "#F5F5DC", "Brown": "#A52A2A"
    };
    if (type === 'single') {
        singleColors.forEach(color => {

            let iconSvg = "";
            if (color === "Floral Pattern") {
                iconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='16' height='16'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:#ff9999;stop-opacity:1' /><stop offset='50%' style='stop-color:#99ff99;stop-opacity:1' /><stop offset='100%' style='stop-color:#9999ff;stop-opacity:1' /></linearGradient></defs><circle cx='50' cy='50' r='45' fill='url(#grad)' stroke='#ccc' stroke-width='5'/></svg>`;
            } else if (singleColorMap[color]) {
                iconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='16' height='16'><circle cx='50' cy='50' r='45' fill='${singleColorMap[color]}' stroke='#ccc' stroke-width='5'/></svg>`;
            }
            options[color] = {
                type: "option",
                icon: iconSvg,
                prompt: `wearing a ${color} ${itemName}`
            };

        });
    } else if (type === 'combo') {
        const comboColorMap = {
            "White": "#FFFFFF", "Black": "#000000", "Blue": "#0000FF", "Red": "#FF0000",
            "Yellow": "#FFFF00", "Pink": "#FFC0CB", "Beige": "#F5F5DC", "Brown": "#A52A2A", "Neon": "#39FF14"
        };
        Object.entries(comboColors).forEach(([label, promptFragment]) => {

            let iconSvg = "";
            let c1 = "", c2 = "";

            if (label.includes("White Top + Blue Bottom")) { c1 = "White"; c2 = "Blue"; }
            else if (label.includes("Black + Black")) { c1 = "Black"; c2 = "Black"; }
            else if (label.includes("Pink Top + White Bottom")) { c1 = "Pink"; c2 = "White"; }
            else if (label.includes("Red Top + Black Bottom")) { c1 = "Red"; c2 = "Black"; }
            else if (label.includes("Yellow Top + Blue Bottom")) { c1 = "Yellow"; c2 = "Blue"; }
            else if (label.includes("White Top + Black Bottom")) { c1 = "White"; c2 = "Black"; }
            else if (label.includes("Black Top + Blue Bottom")) { c1 = "Black"; c2 = "Blue"; }
            else if (label.includes("Beige Top + Brown Bottom")) { c1 = "Beige"; c2 = "Brown"; }
            else if (label.includes("Neon + Black")) { c1 = "Neon"; c2 = "Black"; }

            if (c1 && c2 && comboColorMap[c1] && comboColorMap[c2]) {
                iconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='16' height='16'><path d='M50 5 A45 45 0 0 0 50 95 Z' fill='${comboColorMap[c1]}' stroke='#ccc' stroke-width='3'/><path d='M50 5 A45 45 0 0 1 50 95 Z' fill='${comboColorMap[c2]}' stroke='#ccc' stroke-width='3'/><circle cx='50' cy='50' r='45' fill='none' stroke='#ccc' stroke-width='5'/></svg>`;
            }

            options[label] = {
                type: "option",
                icon: iconSvg,
                prompt: `wearing ${itemName}, ${promptFragment}`
            };

        });
    }

    return {
        "Color": {
            type: "group",
            options: options
        }
    };
};
