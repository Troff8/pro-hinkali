import IMask from 'imask';

var phones = document.querySelectorAll('.phone-widjet');
if (phones) {
    var maskOptions = {
        mask: '+7 000 000-00-00'
    };
    phones.forEach(phone => {
        var mask = IMask(phone, maskOptions);
    })
}


var nums = document.querySelectorAll('.num-widjet');
if (nums) {
    var maskOptions = {
        mask: Number,
        min: 1,
        max: 10000,
        thousandsSeparator: ' '
    };
    nums.forEach(num => {
        var mask = IMask(num, maskOptions);
    })
}

