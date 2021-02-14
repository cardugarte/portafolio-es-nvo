//typing animation script
var typed = new Typed(".typing", {
  strings: ["{Developer};", "{Blogger};", "{Freelancer};"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


// toggle menu/bar script
      const navbar = document.querySelector('.navbar');
      const buttonUp = document.querySelector('.scroll-up-button');
      const menu = document.querySelector('.navbar__menu');
      const menuBtn = document.querySelector('.menu-btn');
      const cancelBtn = document.querySelector('.cancel-btn');

      menuBtn.onclick = () => {
        menu.classList.add('active');
        menuBtn.classList.add('hide');
      }

      cancelBtn.onclick = () => {
        menu.classList.remove('active');
        menuBtn.classList.remove('hide');
      }

      window.onscroll = () => {
        this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
        this.scrollY > 500 ? buttonUp.classList.add('show') : buttonUp.classList.remove('show');
      }