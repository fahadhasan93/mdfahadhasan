/* =========================================
   CUSTOM CURSOR
========================================= */

const cursorDot = document.querySelector(".custom-cursor-dot");
const cursorRing = document.querySelector(".custom-cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


/* Mouse Position */

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    // Small dot moves immediately
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;

});


/* Smooth Ring Animation */

function animateCursor() {

    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(animateCursor);
}

animateCursor();


/* =========================================
   HOVER EFFECT
========================================= */

const hoverElements = document.querySelectorAll(
    "a, button, input, textarea, select"
);

hoverElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        cursorRing.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", () => {
        cursorRing.classList.remove("cursor-hover");
    });

});


/* =========================================
   CLICK EFFECT
========================================= */

document.addEventListener("mousedown", () => {
    cursorRing.classList.add("cursor-click");
});

document.addEventListener("mouseup", () => {
    cursorRing.classList.remove("cursor-click");
});
