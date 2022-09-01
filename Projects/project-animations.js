const tl = gsap.timeline({})

tl.to('.loader', {
    opacity: 0,
    delay: .35,
    duration: 1,
})
tl.from('.browser', {
    visible: false,
    opacity: 0,
    ease: "Power2.easeOut",
    y: 70,
    stagger: .1,
    duration: 1,
}, 1)

gsap.from(".desc-content, .desc-buttons *", {
scrollTrigger: {
    trigger: ".cs-description",
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
    start: "-65%",
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
    start: "-65%",
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
    start: "-95%",
},
    opacity: 0, 
    y: 60,
    stagger: .15,
    ease: "Power2.easeOut",
    duration: .75,
});

gsap.from(".style-content, .style-colors, .font-wrapper", {
    scrollTrigger: {
        trigger: ".style-section",
        start: "-60%",
    },
        opacity: 0, 
        y: 60,
        stagger: .15,
        ease: "Power2.easeOut",
        duration: .75,
});