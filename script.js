burger = document.querySelector('.burger');
navbar = document.querySelector('.navBar');
navlist = document.querySelector('.navList');
logIn = document.querySelector('.login');

burger.addEventListener('click', ()=>{
    logIn.classList.toggle('visiblity-resp');
    navlist.classList.toggle('visiblity-resp');
    navbar.classList.toggle('nav-height-resp');
});