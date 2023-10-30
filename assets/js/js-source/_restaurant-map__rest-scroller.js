
let restScroll = document.querySelector('.restaurant-map__rest-scroller');

if (restScroll) {

    // при инициализации
    if ((restScroll.clientHeight + Math.round(restScroll.scrollTop)) >= restScroll.scrollHeight) {
        restScroll.classList.add('down');
    }

    restScroll.onscroll = function(ev) {
        console.log(restScroll.clientHeight);
        console.log(Math.round(restScroll.scrollTop));
        console.log(restScroll.scrollHeight);
        console.log('-');
        if ((restScroll.clientHeight + Math.round(restScroll.scrollTop)) >= restScroll.scrollHeight) {
            restScroll.classList.add('down');
        } else {
            restScroll.classList.remove('down');
        }
    };

}