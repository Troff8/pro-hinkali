let opened = null
const drops = document.querySelectorAll('.dropdown__wrapper');
const toggleVisibility = e => e.classList.toggle('dropdown__wrapper--active');
const handleDropdown = e => {
	const clickedItem = e.parentElement.lastChild.previousSibling
	toggleVisibility(clickedItem)
	if (!opened) {
		opened = clickedItem
	} else if (opened == clickedItem) {
		opened = null
	} else {
		toggleVisibility(opened)
		opened = clickedItem
	}
}

const handleClick = e => {
	let target = e.target
	if (target.hasAttribute('data-dropdown')) {
		// const dropdownId = target.getAttribute('data-dropdown')
		// const rect = e.target.getBoundingClientRect()
		// const drop = e.target.nextElementSibling;
		// drop.style.top = rect.top + 47 + 'px'
		// drop.style.left = rect.left + 'px'
		// if (window.innerWidth < 768) { initBackdrop() }
		handleDropdown(e.target);
	} else if (opened) {
		// if (window.innerWidth < 768) { removeBackdrop() }
		toggleVisibility(opened);
		opened = null
	}
}

document.addEventListener('click', handleClick)

//-----------------------------------

// export const initDropdown = (dropdownId, top, left) => {
// 	let dropdown = document.getElementById(dropdownId)
// 	if (window.innerWidth < 768) {
// 		initBackdrop()
// 	} else {
// 		dropdown.style.left = left + 'px'
// 		dropdown.style.top = top + 47 + 'px'
// 	}
// 	dropdown.classList.add('dropdown--active')
// 	document.addEventListener('click', checkDropdown)
// 	window.addEventListener('scroll', checkDropdown)
// 	window.addEventListener('resize', checkDropdown)
// }

// export const closeDropdown = (openedDropdown) => {
// 	if (window.innerWidth < 768) {
// 		removeBackdrop()
// 	} else {
// 		setTimeout(() => { openedDropdown.removeAttribute('style') }, 300);
// 	}
// 	openedDropdown.classList.remove('dropdown--active')
// 	document.removeEventListener('click', checkDropdown)
// 	window.removeEventListener('scroll', checkDropdown)
// 	window.removeEventListener('resize', checkDropdown)
// }

// export const checkDropdown = (e) => {
// 	let openedDropdown = document.querySelector('[class="dropdown dropdown--active"]')
// 	closeDropdown(openedDropdown)
// 	e.preventDefault()
// }

// document.addEventListener('click', function (e) {
// 	e = e || window.event
// 	let target = e.target
// 	if (target.hasAttribute('data-dropdown')) {
// 		let dropdownId = target.getAttribute('data-dropdown')
// 		let rect = target.getBoundingClientRect()
// 		let top = rect.top
// 		let left = rect.left
// 		initDropdown(dropdownId, top, left)
// 		e.preventDefault()
// 	}
// 	if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'dropdown') || target.classList.contains('dropdown')) {
// 		let openedDropdown = document.querySelector('[class="dropdown dropdown--active"]')
// 		closeDropdown(openedDropdown)
// 		e.preventDefault()
// 	}
// }, false)
