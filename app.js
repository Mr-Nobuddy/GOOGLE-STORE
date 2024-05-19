// CTA Selection start

// custome cursor section start
const ctaCursorDot = document.querySelector("[data-cta-cursor-dot]")
const ctaCursorOutline = document.querySelector("[data-cta-cursor-outline]")
const ctaContainer = document.querySelector("[data-cta-card]")
const ctaCursorBg = document.querySelector("[data-cta-cursor-bg]")
ctaContainer.addEventListener("mousemove", function (e) {
    const posX = e.clientX
    const posY = e.clientY

    ctaCursorDot.style.left = `${posX}px`;
    ctaCursorDot.style.top = `${posY}px`;

    ctaCursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });

    ctaCursorBg.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });


    // ctaCursorBg.style.left = `${posX}px`;
    // ctaCursorBg.style.top = `${posY}px`;

})
// custome cursor section End


// CTA Selection End