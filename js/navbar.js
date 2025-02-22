// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('active');
// }

document.getElementById("dropdownBtn").addEventListener("click", function() {
    document.getElementById("dropdown").classList.toggle("show");
});

// Tutup dropdown jika klik di luar menu
window.addEventListener("click", function(event) {
    if (!event.target.matches("#dropdownBtn")) {
        let dropdown = document.getElementById("dropdown");
        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navMenu = document.getElementById("navMenu");

    // Toggle menu saat tombol hamburger diklik
    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Tutup menu jika klik di luar navbar
    document.addEventListener("click", function (event) {
        if (!hamburgerBtn.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});

