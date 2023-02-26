const menu = document.querySelector('header .logo-menu .menu');

const closeMenuIcon = document.querySelector('header .logo-menu .menu .close-icon');
const openMenuIcon = document.querySelector('header .logo-menu .menu-open');

//drocompanymenu Feature
const featureItem = document.querySelector('header .logo-menu .menu .menu-item-features');
const companyItem = document.querySelector('header .logo-menu .menu .menu-item-company');


const companyMenu = document.querySelector('header .logo-menu .menu .company-menu ');
const mainDropMenu = document.querySelector('header .logo-menu .menu .main-menu');

const mainMenuArrowUp = document.querySelector('header .logo-menu .menu .menu-item-features img:first-child');
const mainMenuArrowDown = document.querySelector('header .logo-menu .menu .menu-item-features img:last-child');
const companyMenuArrowUp = document.querySelector('header .logo-menu .menu .menu-item-company img:first-child');
const companyMenuArrowDown = document.querySelector('header .logo-menu .menu .menu-item-company img:last-child');


console.log(mainMenuArrowUp);

closeMenuIcon.addEventListener('click', e => {
    menu.style.transform = 'translateX(200%)';
});

openMenuIcon.addEventListener('click', e => {
    menu.style.transform = 'translateX(0)';
})

featureItem.addEventListener('click', e => {
    mainDropMenu.classList.toggle('active');
    if (mainDropMenu.classList.contains('active')) {
        mainMenuArrowUp.style.display = 'none';
        mainMenuArrowDown.style.display = 'block';

    } else {
        mainMenuArrowUp.style.display = 'block';
        mainMenuArrowDown.style.display = 'none';

    }
})

companyItem.addEventListener('click', e => {
    companyMenu.classList.toggle('active');
    if (companyMenu.classList.contains('active')) {
        companyMenuArrowUp.style.display = 'none';
        companyMenuArrowDown.style.display = 'block';

    } else {
        companyMenuArrowUp.style.display = 'block';
        companyMenuArrowDown.style.display = 'none';

    }

})






