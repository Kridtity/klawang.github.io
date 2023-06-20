//Set variables to HTML classes
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')

const navItems = document.querySelectorAll('.nav-item')

let showMenu = false;

//Add event listener to JS constant assigned to the menu-btn class in HTML to execute function on click
menuBtn.addEventListener('click', toggleMenu);

//Function for on menu click event
function toggleMenu() {
    //Modify class names on menu open
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        //Modify class names on menu close
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}