const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.replace("fa-bars", "fa-xmark");
        } else {
            icon.classList.replace("fa-xmark", "fa-bars");
        }
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.replace("fa-xmark", "fa-bars");
        });
    });
}

// ==========================================================
// PRODUCT CARDS — click to expand description
// ==========================================================

document.querySelectorAll(".product-type-card").forEach(card => {
    card.setAttribute("aria-expanded", "false");

    const toggle = () => {
        const isExpanded = card.classList.toggle("expanded");
        card.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    };

    card.addEventListener("click", toggle);

    card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
        }
    });
});
