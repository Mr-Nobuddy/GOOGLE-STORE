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
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main1"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main1" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main1", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main1").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    scrub: 1,
    scroller: `#main1`,
    pin: true,
  },
});

tl.to("#page1>h1", {
  top: `-50%`,
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    scrub: 1,
    scroller: `#main1`,
    pin: true,
  },
});

tl1.to("#page2>h1", {
  top: `-50%`,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    scrub: 1,
    scroller: `#main1`,
    pin: true,
  },
});

tl2.to("#page4>#center-page4", {
  top: `-50%`,
  //   backgroundImage: "transparent",
  opacity: 0,
  display: "none",
  scrollTrigger: {
    trigger: `#page4>#center-page4`,
    scroller: `#main1`,
    start: `top -10%`,
    // markers:true,
    scrub: 1,
    // pin:true
  },
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page5`,
    start: `top top`,
    scrub: 1,
    scroller: `#main1`,
    pin: true,
  },
});

tl2.to("#page5>#center-page5", {
  top: `-50%`,
  //   backgroundColor: "transparent",
  opacity: 0,
  display: "none",
  scrollTrigger: {
    trigger: `#page5>#center-page5`,
    scroller: `#main11`,
    start: `top top`,
    scrub: 1,
  },
});
