
/* **** Transformar menu hamburguer em X **** */
const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer.addEventListener('click', () => {
    toggleMenu();

});

function toggleMenu() {   /*altera o munu hamburguer*/
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle ('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}