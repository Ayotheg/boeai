document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggle-btn");

    toggleBtn.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    window.addEventListener("scroll", function() {
        if (sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
        }
    });

    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            sidebar.classList.remove("active");
        });
    });
});