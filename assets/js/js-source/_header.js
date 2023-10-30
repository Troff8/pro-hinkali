document.addEventListener("DOMContentLoaded", () => {
	const BODY = document.body
	var header = document.querySelector('.header');
	const PAGE_SCROLLED_CLASS = 'page-scrolled'
	// const PAGE_SCROLL_UP_CLASS = 'page-scroll-up'
	// const PAGE_SCROLL_DOWN_CLASS = 'page-scroll-down'

	// let lastScrollTop = 0
	window.addEventListener('scroll', function() {
		let offset = 1

		scrollY < offset ? BODY.classList.remove(PAGE_SCROLLED_CLASS) : BODY.classList.add(PAGE_SCROLLED_CLASS)
		scrollY < offset ? header.classList.remove(PAGE_SCROLLED_CLASS) : header.classList.add(PAGE_SCROLLED_CLASS)

		// if (scrollY > lastScrollTop && scrollY > 0) {
		// 	BODY.classList.remove(PAGE_SCROLL_UP_CLASS)
		// 	BODY.classList.add(PAGE_SCROLL_DOWN_CLASS)
		// } else {
		// 	BODY.classList.add(PAGE_SCROLL_UP_CLASS)
		// 	BODY.classList.remove(PAGE_SCROLL_DOWN_CLASS)
		// }

		// lastScrollTop = scrollY
	});
})
