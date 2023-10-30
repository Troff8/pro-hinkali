let toTop = document.querySelector('.to-top');

if (toTop) {

    window.addEventListener('scroll', function (evt) {
        var distance_from_top = document.documentElement.scrollTop;
          
        if (distance_from_top <= 300) {
            toTop.querySelector('.to-top__control').classList.remove('to-top__control--show');
        }
      
        if(distance_from_top > 300) {
            toTop.querySelector('.to-top__control').classList.add('to-top__control--show');
        }      
    });

    const goTopBtn = document.querySelector(".to-top__btn");
    goTopBtn.addEventListener("click", goTop);
    function goTop() {
        // пока не вернулись в начало страницы
        if (window.pageYOffset > 0) {
          // скроллим наверх
          window.scrollBy(0, -50); // второй аргумент - скорость
          setTimeout(goTop, .1); // входим в рекурсию
        }
    }
}
