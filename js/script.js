const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const navOverlay = document.getElementById("navOverlay");

function setMenuIcon(isOpen) {
    const icon = menuToggle.querySelector("i");

    if (isOpen) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
}

function closeMenu() {
    navbar.classList.remove("active");

    if (navOverlay) {
        navOverlay.classList.remove("active");
    }

    setMenuIcon(false);
}

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("active");

        if (navOverlay) {
            navOverlay.classList.toggle("active", isOpen);
        }

        setMenuIcon(isOpen);
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    if (navOverlay) {
        navOverlay.addEventListener("click", closeMenu);
    }
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
