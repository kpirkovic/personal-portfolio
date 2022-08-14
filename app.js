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
        mobileImg: './assets/clients/client_01_mobile.png',
        clientImg: './assets/clients/client_01.png',
        testimonial: 'Kristijan did a fantastic Job with my Konimex Agency, Would love to work with him again in near futrue.'
    },
    {
        client: 'Kristifor Pirkovic CEO of WPTalks',
        mobileImg: './assets/clients/client_01_mobile.png',
        clientImg: './assets/clients/client_01.png',
        testimonial: 'Kristijan did a fantastic Job with my Konimex Agency, Would love to work with him again in near futrue.'
    },
    {
        client: 'Stefan Georgiev Proffessor at Seavus',
        mobileImg: './assets/clients/client_01_mobile.png',
        clientImg: './assets/clients/client_01.png',
        testimonial: 'Kristijan did a fantastic Job with my Konimex Agency, Would love to work with him again in near futrue.'
    }
]

//Auto Testimonials on Start    
const testimonialImgDesktop = document.querySelector('.client img');
const testimonialImgMobile = document.querySelector('.laptop-wrapper-mobile img');
const testimonialReview = document.querySelectorAll('.notification');
const testimonialClient = document.querySelectorAll('.client-name');


const randomNum = Math.round(Math.random() * reviews.length);

testimonialImgDesktop.src = reviews[randomNum].clientImg;

testimonialReview.forEach(e => {
    e.textContent = reviews[randomNum].testimonial;
})
testimonialClient.forEach(e => {
    e.textContent = reviews[randomNum].client;
})



