let cart = document.querySelector('.cart');

if (cart) {
    let cartFix = document.querySelector('.cart__for-fix');
    let menuList = document.querySelector('.menu-list');
    let header = document.querySelector('.header');


    if (menuList) {

        window.addEventListener('scroll', function (evt) {
            var elTop = cart.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
            var headerHeight = header.offsetHeight;
            var menuListHeight = menuList.offsetHeight;

            var distance_from_top = document.documentElement.scrollTop + headerHeight + menuListHeight;

            if (distance_from_top <= elTop) {
                cart.classList.remove('fixed');
                
            }
        
            if(distance_from_top > elTop) {
                cartFix.style.width = cart.offsetWidth + 'px';
                cart.classList.add('fixed');
            }      
        });
    }


    let cartOpener = document.querySelector('.to-top__cart-btn');
    if (cartOpener) {
        let catalogcart = document.querySelector('.catalog__cart');
        cartOpener.addEventListener("click", cartOpen);
        function cartOpen() {
            cart.classList.add('open');
            catalogcart.classList.add('open');
        }
    }

    

    let cartBack = document.querySelector('.cart__back');
    if (cartBack) {
        cartBack.addEventListener("click", cartClose);
        function cartClose() {
            cart.classList.remove('open');
            catalogcart.classList.remove('open');
        }
    }
}

