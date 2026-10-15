// new-builder.js
export function initNewBuilder() {
    const container = document.getElementById('new-builder-experiment');
    if (!container) return;

    const leftPanel = document.getElementById('nb-left-panel');
    const rightPanel = document.getElementById('nb-right-panel');

    const leftToggleBtn = document.getElementById('nb-mobile-left-toggle');
    const rightToggleBtn = document.getElementById('nb-mobile-right-toggle');
    const reviewToggleBtn = document.getElementById('nb-mobile-review-toggle');

    // Mobile interactions
    if (leftToggleBtn && leftPanel) {
        leftToggleBtn.addEventListener('click', () => {
            leftPanel.classList.toggle('open');
            rightPanel.classList.remove('open');
        });
    }

    if (rightToggleBtn && rightPanel) {
        rightToggleBtn.addEventListener('click', () => {
            rightPanel.classList.remove('open');
        });
    }

    if (reviewToggleBtn && rightPanel) {
        reviewToggleBtn.addEventListener('click', () => {
            rightPanel.classList.toggle('open');
            leftPanel.classList.remove('open');
        });
    }

    // Category selection (dummy for UI testing)
    const categoryItems = document.querySelectorAll('.nb-category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Close left panel on mobile after selection
            if (window.innerWidth <= 900) {
                leftPanel.classList.remove('open');
            }

            // Update center header
            const centerHeader = document.querySelector('.nb-workspace-header h2');
            if(centerHeader) {
                centerHeader.textContent = item.textContent;
            }
        });
    });
}
