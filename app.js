//Accordion Design
const accordion = document.querySelectorAll('.accordion-panel');
const arrows = document.querySelectorAll('.faq-arrow');
accordion.forEach((a, i) => {
	a.addEventListener('click', ()=>{
		const accordionInner = a.querySelector('.accordion-inner');
		if(a.getAttribute("data-active") == 'false'){
            //Close all accordions that are active then open the clicked accordion
            accordion.forEach((e, j)=> {
                if(e.getAttribute("data-active") == 'true'){
                    e.dataset.active = "false";
                    arrows[j].style.transform = 'rotateZ(45deg)';
                    e.querySelector('.accordion-inner').style.height = '0';
                }
            })
            //Open the clicked accordion
			a.dataset.active = "true";
            arrows[i].style.transform = 'rotateZ(225deg)';
		    accordionInner.style.height = accordionInner.scrollHeight + 'px';

		} else {
            //Close the clicked accordion
			a.dataset.active = "false";
            arrows[i].style.transform = 'rotateZ(45deg)';
		    accordionInner.style.height = '0';
		}
	})
})

//Random Reviews
const reviews = [
    {
        client: 'Thomas Brush CEO of Gamedev',
        mobileImg: './Assets/Clients/client_01_mobile.png',
        clientImg: './Assets/Clients/client_01.png',
        testimonial: 'Kristijan did a fantastic Job with my Konimex Agency, Would love to work with him again in near futrue.'
    },
    {
        client: 'Kristifor Pirkovic CEO of WPTalks',
        mobileImg: './Assets/Clients/client_01_mobile.png',
        clientImg: 'https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        testimonial: 'Kristijan did a fantastic Job with my Konimex Agency, Would love to work with him again in near futrue.'
    },
    {
        client: 'Stefan Georgiev Proffessor at Seavus',
        mobileImg: './Assets/Clients/client_01_mobile.png',
        clientImg: 'https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        testimonial: 'Kristijan did a fantastic Job with my Konimex Agency, Would love to work with him again in near futrue.'
    }
]

//Auto Testimonials on Start    
const mobileClientImage = document.querySelector('.laptop-wraper-mobile img');
const clientTestimonial = document.querySelector('.notification');
const clientName = document.querySelector('.client-name');
const desktopImg = document.querySelector('.client');

let client = Math.floor(Math.random() * reviews.length);

mobileClientImage.src = reviews[client].mobileImg;
desktopImg.src = reviews[client].clientImg;
clientTestimonial.textContent = reviews[client].testimonial;
clientName.textContent = reviews[client].client;

//Hamburger Menu Open
/* const navList = document.querySelector('.nav-list');
let counter = 0;

let navTl = gsap.timeline({ paused: true });
navTl.to(navList, {
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

document.addEventListener('click', (e)=> {
    if(e.target.id == 'hamburger-btn'){
        if(!counter){
            navTl.timeScale(1);
            navTl.play();   
            counter++;
        } else {
            navTl.timeScale(1.5);
            navTl.reverse();
            counter = 0;
        }
    } else {
        navTl.timeScale(1.5);
        navTl.reverse();
        counter = 0;
    }
})
 */
    



