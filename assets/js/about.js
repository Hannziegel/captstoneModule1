/*  ------=========     Menu    =========------  */

function mobileMenu() {
 document.querySelector('HEADER').classList.toggle('header-menu');
 document.querySelector('.headerLogo').classList.toggle('hide');
}

document.querySelector('#menuIcon').addEventListener('click', () => {
  mobileMenu();
});