//selecting some DOM elements  Mobile info
const mobileModal = document.querySelector('.mobile-menu-modal'); // black cover
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuTrigger = document.querySelector('.mobile-menu-trigger'); // 3 khat from menu
const mobileMenuCloseBtn = document.querySelector('.menu-close-btn .burger'); // chalepa
const mobileSkillsLink = document.querySelector('#mobile-skills-link');
const mobileProjectsLink = document.querySelector('#mobile-projects-link');
const mobileContactLink = document.querySelector('#mobile-contact-link');
const scrollerBtn = document.querySelector('.top-scroller');
const modal = document.querySelector('.modal'); //  personal info
const trigger = document.querySelector('.open-modal-btn'); //+ sign
const modalCloseButton = document.querySelector('.close-modal-btn');//+ sign 

//variables for later use in the handleTouchStart and handleTouchEnd functions
let touchstartX;
let touchendX;

//mobile menu events
mobileMenuTrigger.addEventListener('click', handleMobileMenu);
mobileMenuCloseBtn.addEventListener('click', handleMobileMenu);
mobileSkillsLink.addEventListener('click', handleMobileMenu);
mobileProjectsLink.addEventListener('click', handleMobileMenu);
mobileContactLink.addEventListener('click', handleMobileMenu);
mobileModal.addEventListener('touchstart', handleTouchStart); // touch from 24-27 line  line 47
mobileModal.addEventListener('touchend', handleTouchEnd);
mobileMenu.addEventListener('touchstart', handleTouchStart);
mobileMenu.addEventListener('touchend', handleTouchEnd);

//scroller button events
scrollerBtn.addEventListener('click', handleScrollBtnClick);
window.addEventListener('scroll', handleScrollBtnOnWindowScroll); // with line 63

//modal page events
trigger.addEventListener('click',toggleModal); // + sign call when  toggle Modal is clicked line 71
modalCloseButton.addEventListener('click',toggleModal); // and we dont have show modal 
window.addEventListener('click',windowOnClick);// if you click on the widow the modal will be disappear line 75


//functions used as event handlers
function handleMobileMenu(){
    mobileModal.classList.toggle('active-mobile-modal');// toggle make the class add or remove
    mobileMenu.classList.toggle('active-menu');
    document.querySelector('body').classList.toggle('body-fixed'); // here body is not moving when we are using the mobile minue
    document.querySelector('.burger').classList.toggle('toggle');
}

function handleTouchStart(e){
    touchstartX = e.changedTouches[0].screenX; // location from the screen that u stared 
}

function handleTouchEnd(e){
    touchendX = e.changedTouches[0].screenX;// both start and end at the same time 

    if(touchstartX > touchendX){ // we are going to left side
        handleMobileMenu();
    }
}

function handleScrollBtnClick(){
    window.scrollTo(0, 0);// window is an object that scroll the position from top that has link with button scroller
}

function handleScrollBtnOnWindowScroll(){
    if(window.scrollY > 150){ // this is the button distance that shows after 150px 
        scrollerBtn.style.display = 'block'; // to show the button 
    }else{
        scrollerBtn.style.display = 'none'; // when its less than 150 should be disappear 
    }
}

function toggleModal(){
    modal.classList.toggle("show-modal");// if in the classList modal we have the show-modal it will be remove and there would be no show-modal it will added.
}

function windowOnClick(e){
    if(e.target === modal){ // when event // when we click 
        toggleModal(); // make the personal information
    }else if(e.target === mobileModal){ // when are u target is mobile modal than call the handleMobileMenu function
        handleMobileMenu();
    }
}