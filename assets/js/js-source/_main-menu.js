var burger = document.querySelector('.burger');
if (burger) {
    burger.onclick = function() {
        var mainMenu = document.querySelector('.main-menu');
        mainMenu.classList.add('open');
    }
}

var mainMenuClose = document.querySelector('.main-menu__close');
if (mainMenuClose) {
    mainMenuClose.onclick = function() {
        var mainMenu = document.querySelector('.main-menu');
        mainMenu.classList.remove('open');
    }
}
