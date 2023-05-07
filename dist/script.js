//hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})

//navbar
window.onscroll = () => {
  nav = document.querySelector('nav');
  const fixedNav = nav.offsetTop;

  if(window.scrollY > fixedNav){
    nav.classList.add('navbar-fixed');
  }else{
    nav.classList.remove('navbar-fixed');
  }
}

nav = document.querySelector('nav');
console.log(nav.offsetTop);