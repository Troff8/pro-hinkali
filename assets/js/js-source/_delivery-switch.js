document.addEventListener('click', function (e) {

	if (e.target.classList.contains('delivery-switch__item')) {
		let control = e.target
        let list = control.parentElement
		const CONTROLS = list.querySelectorAll('.delivery-switch__item')
	
		CONTROLS.forEach((item) => {
			item.classList.remove('active')
		})
		
		control.classList.add('active')
	}
	
})