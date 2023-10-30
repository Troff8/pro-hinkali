let menuList = document.querySelector('.menu-list');
let header = document.querySelector('.header');


if (menuList) {

    window.addEventListener('scroll', function (evt) {
        var elTop = menuList.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        var headerHeight = header.offsetHeight;

        var distance_from_top = document.documentElement.scrollTop + headerHeight;

        if (distance_from_top <= elTop) {
            menuList.classList.remove('fixed');
            
        }
      
        if(distance_from_top > elTop) {
            menuList.classList.add('fixed');
        }      
    });
}



