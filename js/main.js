// select DOM items
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-navigation');
const menuPages = document.querySelector('.menu-pages');
const navItems = document.querySelectorAll('.nav-items');


// Menu state
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuPages.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
         
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuPages.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

// Work.html ShowMore Button 

const showMoreBtn = document.querySelector("#more_3");
const projekts = document.querySelector('#Project_6');

showMoreBtn.addEventListener("click", ()=>{
    projekts.classList.toggle("show-more");
})
