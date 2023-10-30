document.addEventListener("DOMContentLoaded", () => {
	let accordion = document.querySelector('.accordion');

	if(accordion) {
		let items = accordion.querySelectorAll('.accordion__item');
		let element = accordion.querySelectorAll('.accordion__header');
	
		function toggleAccordion() {
			items.forEach(item => item.classList.remove('accordion__item--expanded'))
			this.parentNode.classList.toggle('accordion__item--expanded');
		}
	
		element.forEach(item => item.addEventListener('click', toggleAccordion));
	}
})