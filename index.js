function exportToPdf() {
    const element = document.getElementById('cv-content');
    const isLightMode = document.body.classList.contains('light-mode');
    const backgroundColor = isLightMode ? '#ffffff' : '#252526';

    const options = {
        margin: 0,
        filename: 'Akash_Kumar_Digumber_CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            scrollY: 0,
            backgroundColor: backgroundColor
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: { before: '.beforeClass' }
    };
    html2pdf().set(options).from(element).save();
}

// Theme toggle function
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) {
            themeToggle.textContent = '🌙 Dark Mode';
        }
    }
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const exportBtn = document.getElementById('export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportToPdf);
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Load theme preference on page load
    loadTheme();
});