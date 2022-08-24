//Hamburger Menu Open
const navList = document.querySelector('.nav-list');
const mql = window.matchMedia("(max-width: 1360px)");
let isOpen = false;
let isMobile = false;

const navTl = gsap.timeline({});

navTl.fromTo(navList, {
    autoAlpha: 0, 
    display:'none'
},
{
    autoAlpha: 1, 
    display:'flex'
})

navTl.from('.nav-list a', { 
    opacity: 0,
    stagger: .05,
    delay: -.5,
    ease: "Power3.easeOut",
    y: -50,
    zindex: -1
})    

if(mql.matches) {
    navTl.progress(0).reversed(true);
    isOpen = false;
    isMobile = true;
}

const burgerTl = gsap.timeline({ paused: true, repeatDelay: 0});

burgerTl.to('#hamburger-btn span:nth-child(1)',{ width: 0, duration: .3 }, 0)
    .to('#hamburger-btn span:nth-child(2)',{ rotation: -45}, 0)
    .to('#hamburger-btn span:nth-child(3)',{ width: 0, duration: .3}, 0)

burgerTl.timeScale(1.3);

document.addEventListener('click', (e)=> {
    if(e.target.id == 'hamburger-btn' && isMobile){
        if(isOpen){
            navTl.timeScale(1.8);
            navTl.reverse();
            isOpen = false;

            burgerTl.reverse();
        } else {
            navTl.timeScale(1);
            navTl.play(); 
            isOpen = true;

            burgerTl.play();
        }
    } else if (isOpen && isMobile) {
        navTl.timeScale(1.8);
        navTl.reverse();
        burgerTl.reverse();
    }
})

window.addEventListener("resize", function (e) {
    if(e.target.innerWidth >= 1360) {
        navTl.progress(1).play();
        isOpen = true;
        isMobile = false;
    } else if (e.target.innerWidth <= 1360) {
        navTl.progress(0).reversed(true);
        isOpen = false;
        isMobile = true;
    }
});

