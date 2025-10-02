// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Toggle dropdown on mobile
function toggleDropdown(event) {
    event.preventDefault();
    if (window.innerWidth <= 768) {
        const dropdown = event.target.closest('.dropdown');
        dropdown.classList.toggle('active');
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    if (!event.target.closest('nav')) {
        navMenu.classList.remove('active');
    }
});

// AI Chat selector function (for chats-ia page)
function openAIChat(url) {
    if (url) {
        window.open(url, '_blank');
        setTimeout(() => {
            document.getElementById('ai-select').value = "";
        }, 100);
    }
}
