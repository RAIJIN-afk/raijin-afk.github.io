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

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // Load theme preference on page load
    loadTheme();

    // Load language preference on page load
    loadLanguage();
});

// Translation system
let translations = {};
let currentLang = 'en';

// Load translations from JSON file
async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        translations = await response.json();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Apply translations to the page
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Toggle language function
async function toggleLanguage() {
    const langToggle = document.getElementById('lang-toggle');

    // Load translations if not already loaded
    if (Object.keys(translations).length === 0) {
        await loadTranslations();
    }

    // Toggle between languages
    currentLang = currentLang === 'en' ? 'fr' : 'en';

    // Update button text
    if (currentLang === 'fr') {
        langToggle.textContent = '🇬🇧 English';
    } else {
        langToggle.textContent = '🇫🇷 Français';
    }

    // Apply translations
    applyTranslations(currentLang);

    // Save preference
    localStorage.setItem('language', currentLang);
}

// Load saved language preference
async function loadLanguage() {
    const savedLang = localStorage.getItem('language');
    const langToggle = document.getElementById('lang-toggle');

    // Load translations
    await loadTranslations();

    if (savedLang) {
        currentLang = savedLang;
        if (currentLang === 'fr') {
            if (langToggle) {
                langToggle.textContent = '🇬🇧 English';
            }
            applyTranslations('fr');
        }
    }
}