import { CountUp } from 'countup.js';

window.onload = function() {

    let counters = document.querySelectorAll('.company__data-list-val');
    if (counters) {
        
        counters.forEach(counter => {
            const options = {
                  duration: 1,
                enableScrollSpy: true,
                scrollSpyOnce: true
            };
            let val = parseInt(counter.getAttribute("data-val"));
            let countUp = new CountUp(counter, val, options);
            countUp.start();
        })
    }  
}