// function Tabs() {
// 	let bindAll = function() {
// 		let menuElements = document.querySelectorAll('[data-tab]');
// 		for(let i = 0; i < menuElements.length ; i++) {
// 			menuElements[i].addEventListener('click', change, false);
// 		}
// 	}

// 	let clear = function() {
// 		let menuElements = document.querySelectorAll('[data-tab]');
// 		for(let i = 0; i < menuElements.length ; i++) {
// 			menuElements[i].classList.remove('active');
// 			let id = menuElements[i].getAttribute('data-tab');
// 			document.getElementById(id).classList.remove('active');
// 		}
// 	}

// 	let change = function(e) {
// 		clear();
// 		e.target.classList.add('active');
// 		let id = e.currentTarget.getAttribute('data-tab');
// 		document.getElementById(id).classList.add('active');
// 	}

// 	bindAll();
// }

// let connectTabs = new Tabs();

// new

// const TABS = document.querySelectorAll('.tab');

// TABS.forEach((list) => {
// 	const CONTROLS = list.querySelectorAll('.tab__control');
	
// 	CONTROLS.forEach((control) => {
// 		control.onclick = () => {
// 			const isOpen = control.classList.contains('tab__control--active')

// 			CONTROLS.forEach((item) => {
// 				item.classList.remove('tab__control--active')
// 			})
			
// 			if(list.classList.contains('tab--closable')) {
// 				isOpen ? control.classList.remove('tab__control--active') : control.classList.add('tab__control--active')
// 			} else {
// 				control.classList.add('tab__control--active')
// 			}
// 		}
// 	})
// })

document.addEventListener('click', function (e) {

	if (e.target.classList.contains('tab__control')) {
		let control = e.target
		let list = control.parentElement
		let isOpen = control.classList.contains('tab__control--active')
		const CONTROLS = list.querySelectorAll('.tab__control')
	
		CONTROLS.forEach((item) => {
			item.classList.remove('tab__control--active')
		})
		
		if(list.classList.contains('tab--closable')) {
			isOpen ? control.classList.remove('tab__control--active') : control.classList.add('tab__control--active')
		} else {
			control.classList.add('tab__control--active')
		}
	}
	
})
