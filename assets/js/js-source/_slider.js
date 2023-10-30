import Swiper, { Parallax, Navigation, Pagination, Scrollbar, FreeMode } from 'swiper';

const homeSlider = new Swiper('.js-home-slider', {
	modules: [Pagination],
	slidesPerView: 'auto',
	centeredSlides: true,
	initialSlide: 1,
	spaceBetween: 30,
	speed: 1300,
	parallax: true,
	loop: true,
	slideActiveClass: 'promo__slide--current',
	pagination: {
		el: '.promo__pagination',
		bulletClass: 'promo__pagination-bullet',
		bulletActiveClass: 'promo__pagination-bullet--current',
		type: 'bullets',
	},
});


// const menuListSlider = new Swiper('.menu-list-slider', {
// 	modules: [Navigation, Pagination, Parallax],
// 	touchStartPreventDefault: false,
// 	slidesPerView: 'auto',
// 	spaceBetween: 5,
// 	speed: 1300,
// 	slideActiveClass: 'menu-list-slider__slide--current',
// 	slideToClickedSlide: true,
// 	breakpoints: {
// 		768: {
// 			spaceBetween: 20,
// 		},
// 	},
// });


/////////////////////////////////////////
// menu-list-slider
const root = '.menu-list-slider'
let rootNode = document.querySelector(root)
let activeCategory
if (rootNode != null) { activeCategory = rootNode.dataset.active }
let activeIndex = activeCategory > 0 ? parseInt(activeCategory) - 1 : 0

const headerSliderNav = new Swiper(root , {
	modules: [Navigation, FreeMode],
	initialSlide: activeIndex ? activeIndex : 0,
	touchStartPreventDefault: false,
	observer: 1,
	observerParents: 1,
	slidesPerView: 'auto',
	spaceBetween: 0,
	slideActiveClass: 'menu-list-slider__slide--active',
});

if (rootNode != null) {window.addEventListener('load', () => { headerSliderNav.update() });}

const scrolledIntoView = (element) => {
	let rect = element.getBoundingClientRect()
	let elemTop = rect.top
	let elemBottom = rect.bottom
	let offset = window.innerHeight / 2
	return (elemTop) < window.innerHeight && (elemBottom - offset) > 0
}

const links = document.querySelectorAll('[data-target]')
const sections = document.querySelectorAll('[data-alias]')

if (links) {

	links.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			const target = link.dataset.target
			const scrollTarget = document.querySelector(`[data-alias="${target}"]`)
			const topOffset = document.querySelector('.header').offsetHeight + 70
			let realOffset
			if (window.innerHeight == screen.height) {
				realOffset = topOffset
			} else {
				// realOffset = topOffset >= 120 ? 120 : topOffset
				realOffset = topOffset
			}
			const blockPosition = scrollTarget.getBoundingClientRect().top
			const realPosition = blockPosition - realOffset - 15

			if (link.classList.contains('menu-list-modal__item')) {
				MicroModal.close('menu-list-modal');
			}

			window.scrollBy({
					top: realPosition,
			});
		})
	})


	window.addEventListener('scroll', function() {
		let current = false;
		links.forEach((link) => { link.dataset.active = 'false' })

		sections.forEach((element, index) => {
			if ( !current && scrolledIntoView(element) ) {
				current = element.getAttribute('data-alias')
				// document.querySelector(`[data-target='${current}']`).dataset.active = 'true'
				const targets = document.querySelectorAll(`[data-target='${current}']`)
				targets.forEach((target) => {
					target.dataset.active = 'true'
				})

				headerSliderNav.slideTo(index)
				headerSliderNav.update()
			}
		});
	});
}

// end: menu-list-slider
/////////////////////////////////////////



const itemsFilter = new Swiper('.items-filter__slider', {
	modules: [Scrollbar],
	speed: 500,
	slidesPerView: 'auto',
	spaceBetween: 30,
	scrollbar: {
		el: '.items-filter__scrollbar',
		draggable: true,
		dragClass: 'slider-scrollbar__rail',
	},
});



const restMenusSlider = new Swiper('.rest-menus-slider', {
	modules: [Scrollbar],
	speed: 500,
	slidesPerView: 'auto',
	spaceBetween: 20,
	scrollbar: {
		el: '.rest-menus-slider__scrollbar',
		draggable: true,
		dragClass: 'slider-scrollbar__rail',
	},
});



const newsSlider = new Swiper('.news-slider', {
	modules: [Pagination],
	slidesPerView: 1,
	spaceBetween: 30,
	speed: 1300,
	loop: true,
	slideActiveClass: 'news__slide--current',
	pagination: {
		el: '.news-slider__pagination',
		bulletClass: 'news-slider__pagination-bullet',
		bulletActiveClass: 'news-slider__pagination-bullet--current',
		type: 'bullets',
	},
});


const restGallerySlider = new Swiper('.rest-gallery-slider', {
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 1300,
	loop: true,
	slideActiveClass: 'rest-gallery-slider__slide--current',
});




const restNewsSlider = new Swiper('.rest-news-slider', {
	modules: [Scrollbar, Navigation],
	speed: 500,
	slidesPerView: 'auto',
	spaceBetween: 20,
	scrollbar: {
		el: '.rest-news-slider__scrollbar',
		draggable: true,
		dragClass: 'slider-scrollbar__rail',
	},
	navigation: {
		disabledClass: 'rest-news-slider__arrow--disabled',
		prevEl: '.rest-news-slider__arrow--prev',
		nextEl: '.rest-news-slider__arrow--next',
	},
});




const restВishesЫlider = new Swiper('.rest-dishes-slider', {
	slidesPerView: 'auto',
	centeredSlides: true,
	initialSlide: 1,
	spaceBetween: 10,
	speed: 1300,
	parallax: true,
	loop: true,
	slideActiveClass: 'rest-dishes-slider__slide--current',
	breakpoints: {
		768: {
			spaceBetween: 30,
		},
	},
});




const lkMenuSlide = new Swiper('.lk-menu-slider', {
	modules: [Scrollbar],
	speed: 500,
	slidesPerView: 'auto',
	spaceBetween: 10,
	scrollbar: {
		el: '.lk-menu-slider__scrollbar',
		draggable: true,
		dragClass: 'slider-scrollbar__rail',
	},
	breakpoints: {
		768: {
			spaceBetween: 0,
		},
	},
});













const compositionSlider = new Swiper('.js-composition-slider', {
	modules: [Scrollbar],
	speed: 500,
	scrollbar: {
		el: '.slider-scrollbar',
		draggable: true,
		dragClass: 'slider-scrollbar__rail',
	},
	breakpoints: {
		0: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 25
		},
		991: {
			slidesPerView: 5,
			spaceBetween: 30
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 30
		}
	}
});

const centeredSlider = new Swiper('.js-centered-slider', {
	modules: [Navigation],
	slideActiveClass: 'gallery__slide--active',
	centeredSlides: true,
	loop: true,
	navigation: {
		prevEl: '.js-gallery-prev',
		nextEl: '.js-gallery-next',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 3,
		}
	},
})

document.addEventListener('candyOpen', () => {
	const candySlider = new Swiper('.js-candy-detail-slider', {
		modules: [Navigation],
		observer: true,
		observeParents: true,
		navigation: {
			prevEl: '.candy-details__arrow--prev',
			nextEl: '.candy-details__arrow--next',
		}
	});
})
