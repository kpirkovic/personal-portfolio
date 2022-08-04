const tl = gsap.timeline({})

tl.to('.loader', {
    opacity: 0,
    delay: .35,
    duration: 1,
})
tl.from('.hero-content *, .hero-wrapper', {
    opacity: 0,
    ease: "Power2.easeOut",
    y: 50,
    stagger: .15,
    duration: .75,
}, .55)

gsap.from(".dprocess-content, .dprocess-blocks", {
scrollTrigger: {
    trigger: ".dprocess-section",
    start: "-50%",
},
    opacity: 0, 
    y: 60,
    stagger: .15,
    ease: "Power2.easeOut",
    duration: .75,
});
gsap.from(".persona-section #head, .persona", {
scrollTrigger: {
    trigger: ".persona-section",
    start: "-55%",
},
    opacity: 0, 
    y: 60,
    stagger: .15,
    ease: "Power2.easeOut",
    duration: .75,
});

gsap.from("#portfolio-head *, .wireframe", {
scrollTrigger: {
    trigger: ".portfolio-section",
    start: "-55%",
},
    opacity: 0, 
    y: 60,
    stagger: .15,
    ease: "Power2.easeOut",
    duration: .75,
});

gsap.from(".unique-features-section #head h2, .unique-features-section #head li", {
scrollTrigger: {
    trigger: ".unique-features-section",
    start: "-60%",
},
    opacity: 0, 
    y: 60,
    stagger: .15,
    ease: "Power2.easeOut",
    duration: .75,
});

gsap.from(".user-testing-content, .user-testing-section .user-blocks", {
scrollTrigger: {
    trigger: ".user-testing-section",
    start: "-60%",
},
    opacity: 0, 
    y: 60,
    stagger: .15,
    ease: "Power2.easeOut",
    duration: .75,
});

gsap.from(".contact-head *, .contact-form", {
scrollTrigger: {
    trigger: ".contact-section",
    start: "-75%",
},
    opacity: 0, 
    y: 60,
    stagger: .15,
    ease: "Power2.easeOut",
    duration: .75,
});

gsap.from(".style-content, .style-colors, .font-content", {
    scrollTrigger: {
        trigger: ".style-section",
        start: "-50%",
    },
        opacity: 0, 
        y: 60,
        stagger: .15,
        ease: "Power2.easeOut",
        duration: .75,
});


if(window.matchMedia("(min-width: 768ox)").matches) {
    VanillaTilt.init(document.querySelectorAll(".persona"), {
        max: 6,  
        glare: true,
        "max-glare": .05,
        easing: "cubic-bezier(.17,.67,.83,.67)",
        scale: .97
    });
}
