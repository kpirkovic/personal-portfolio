gsap.config({
    force3D: true,
});

ScrollTrigger.matchMedia({
	"(min-width: 1360px)": function() {
    gsap.to("#anim", {
    scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "30% top",
        toggleActions: "play reverse none reset",
        scrub: 1,
    },
        scale: 0, 
        opacity: 0, 
    });

    //Mouse Follow
    let cursor = new MouseFollower({
        speed: 0.5,
        skewing: 0,
        hiddenState: '-hidden',
        visible: false,
    });
    
    const portfolioSites = document.querySelectorAll('.site');
    
    portfolioSites.forEach(e => {
        e.addEventListener('mouseenter', () => {
            cursor.setText('View Project');
            cursor.show();
        });
        e.addEventListener('mouseleave', () => {
            cursor.removeText();
            cursor.hide();
        });
    })
}})
window.onload = function() {

const textWrapper = document.querySelector('.loader-logo');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const tl = gsap.timeline({});
const letters = gsap.utils.toArray('.loader-logo .letter');

if(window.matchMedia("(min-width: 850px)").matches) {
    tl.to(textWrapper, {
        opacity: 1,
        autoAlpha: 1,
    })

    letters.forEach(letters => {
    tl.fromTo(letters, { 
        opacity: 0,
        y: 100,
    },
    {
        y: 0,
        opacity: 1,
        ease: "back.out(1)",
        delay: -.43,
    })
    });

    tl.to(textWrapper, { 
        opacity: 0,
        ease: "Power2.easeOut",
        delay: -.1,
        duration: .7,
    })
}
tl.to(".loader", {
    opacity: -.2,
    ease: "Power2.easeOut",
    delay: .3,
    duration: 1,
    display:"none"
})

tl.from("nav", {
    opacity: 0,
    ease: "Power1.easeOut",
    stagger: .15,
    delay: -1
})

tl.from("#home p, #home .main-btn, #home h1", {
    opacity: 0,
    ease: "Power2.easeOut",
    y: 50,
    stagger: .15,
    duration: .7,
    delay: -.75
})

tl.from(".anim-wrapper .laptop-wrapper , .anim-wrapper video, #anim-mobile, .anim-wrapper-mobile img",  {
    opacity: 0,
    y: 50,
    ease: "Power2.easeOut",
    stagger: .15,
    duration: .7,
    delay: -.75
})
}

gsap.from(".notification, .client-name", {
scrollTrigger: {
    trigger: ".wrapper",
    start: "35%",
    toggleActions: "play reverse play reverse",
},
    opacity: 0, 
    y: 60,
    stagger: .15,
    ease: "sine.out",
    duration: .35,
    z: -30,
});

gsap.from(".client", {
scrollTrigger: {
    trigger: ".wrapper",
    start: "20%",
    end: "40%",
    toggleActions: "play reverse play reverse",
    scrub: true
},
    opacity: 0, 
    rotationY: -30,
    rotationZ: 10,
    scale: 0,
    z: 30,
});

    const canvas = document.getElementById("laptop");
    const context = canvas.getContext("2d");

    const frameCount = 70;
    const currentFrame = index => (
    `/Assets/Laptop/laptop_${index}.png`
);

    const images = []
    const laptop = {
    frame: 0
};

for (let i = 0; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}
ScrollTrigger.matchMedia({
	"(min-width: 1360px)": function() {
    gsap.to(laptop, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
            trigger: ".wrapper",
            start: "-15% top",
            end: "70% top",
            scrub: true,
    },
        onUpdate: render 
    });
}})

images[0].onload = render;

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[laptop.frame], -230, -170, (canvas.width * 1.65), (canvas.height * 1.35)); 
}

//Navbar on scroll Activate
const homeLink = document.querySelectorAll('.home');
const homeSection = document.querySelectorAll('#home');

gsap.to(homeLink, {
    scrollTrigger: {
        trigger: homeSection,
        start: '-50%',
        end: '75%',
        toggleClass: {targets: homeLink, className: "active"}
    }, 
}); 

const testimonialsLink = document.querySelectorAll('.testimonials');
const testimonialsSection = document.querySelectorAll('#testimonials');

gsap.to(testimonialsLink, {
    scrollTrigger: {
        trigger: testimonialsSection,
        start: '-25%',
        end: '95%',
        toggleClass: {targets: testimonialsLink, className: "active"}
    }, 
}); 

const portfolioLink = document.querySelectorAll('.portfolio');
const portfolioSection = document.querySelectorAll('#portfolio');

gsap.to(portfolioLink, {
    scrollTrigger: {
        trigger: portfolioSection,
        start: '-15%',
        end: '90%',
        toggleClass: {targets: portfolioLink, className: "active"}
    }, 
}); 
const questionsLink = document.querySelectorAll('.questions');
const questionsSection = document.querySelectorAll('#questions');

gsap.to(questionsLink, {
    scrollTrigger: {
        trigger: questionsSection,
        start: '-15%',
        end: 'center',
        toggleClass: {targets: questionsLink, className: "active"}
    }, 
}); 
const contactLink = document.querySelectorAll('.contact');
const contactSection = document.querySelectorAll('#contact');

gsap.to(contactLink, {
    scrollTrigger: {
        trigger: contactSection,
        start: '-85%',
        end: 'center',
        toggleClass: {targets: contactLink, className: "active"}
    }, 
}); 

gsap.from(".testimonials-results div", {
scrollTrigger: {
    start: '-40%',
    trigger: testimonialsSection,
},
    opacity: 0,
    ease: "sine.out",
    y: 50,
    stagger: .15,
});

gsap.from("#portfolio-head *, .site", {
    scrollTrigger: {
        trigger: portfolioSection,
        start: "-65%",
    },
        opacity: 0, 
        y: 60,
        stagger: .15,
        ease: "Power2.easeOut",
        duration: .75,
});

gsap.from(".faq-head h2, .faq-head p, .accordion", {
    scrollTrigger: {
        trigger: questionsSection,
        start: "-45%",
    },
        opacity: 0, 
        y: 60,
        stagger: .15,
        ease: "Power2.easeOut",
        duration: .75,
});

gsap.from(".contact-head *, .contact-form", {
scrollTrigger: {
    trigger: contactSection,
    start: "-95%",
},
    opacity: 0, 
    y: 60,
    stagger: .15,
    ease: "Power2.easeOut",
    duration: .75,
});
