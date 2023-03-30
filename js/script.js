const mobile_nav= document.querySelector('.mobile_nav_btn');

const nav_header = document.querySelector('.header');
const  toggleNav = () => {
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener('click', () => toggleNav() );