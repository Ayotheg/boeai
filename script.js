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

    document.addEventListener("DOMContentLoaded", function () {
        const fadeElements = document.querySelectorAll(".fade-in");
      
        const checkVisibility = () => {
          console.log("Checking visibility..."); // Debugging
          fadeElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
      
            if (isVisible) {
              console.log("Element is visible:", element); // Debugging
              element.style.opacity = 1;
              element.style.transform = "translateY(0)";
            }
          });
        };
      
        window.addEventListener("scroll", checkVisibility);
        window.addEventListener("resize", checkVisibility);
        checkVisibility(); // Check on page load
      });
