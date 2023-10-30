let deliveryDropdown = document.querySelector('.delivery-dropdown');
if (deliveryDropdown) {
    deliveryDropdown.addEventListener("click", deliveryDropdownToggle);
    function deliveryDropdownToggle(e) {
        e.stopProlo;
        deliveryDropdown.classList.toggle('open');
        e.stopPropagation();
    }

    document.addEventListener('click', function (e) {
        if (e.target.classList && !e.target.classList.contains('header-delivery-address__wrap')) {
            deliveryDropdown.classList.remove('open')
        }	
    })
}

