//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

// function sliders_bild_callback(params) { }

// let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
// if (sliderScrollItems.length > 0) {
// 	for (let index = 0; index < sliderScrollItems.length; index++) {
// 		const sliderScrollItem = sliderScrollItems[index];
// 		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 		const sliderScroll = new Swiper(sliderScrollItem, {
// 			direction: 'vertical',
// 			slidesPerView: 'auto',
// 			freeMode: true,
// 			scrollbar: {
// 				el: sliderScrollBar,
// 				draggable: true,
// 				snapOnRelease: false
// 			},
// 			mousewheel: {
// 				releaseOnEdges: true,
// 			},
// 		});
// 		sliderScroll.scrollbar.updateSize();
// 	}
// }

function sliders_bild_callback(params) { }

const breakpoint = window.matchMedia('(max-width:767.98px)');
let mainslider;
const breakpointChecker = function () {
	if (breakpoint.matches === true) {
		if (mainslider !== undefined) mainslider.destroy();
		return;
	} else if (breakpoint.matches === false) {
		return enableSwiper();
	}
};
const enableSwiper = function () {
	if (document.querySelector('.mainslider')) {
		mainslider = new Swiper('.mainslider__body', {
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			centeredSlides: true,
			watchOverflow: true,
			speed: 800,
			loop: true,
			// Dotts
			pagination: {
				el: '.control__dotts',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.control__arrow--next',
				prevEl: '.control__arrow--prev',
			},
			breakpoints: {
				768: {
					spaceBetween: 150,
				},
				992: {
					spaceBetween: 180,
				},
				1232: {
					spaceBetween: 280,
				},
			},
		})
	}
};
breakpointChecker();
breakpoint.addEventListener('change', () => {
	breakpointChecker();
});

if (document.querySelector('.reviews-slider')) {
	reviewsSlider = new Swiper('.reviews-slider__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		watchOverflow: true,
		speed: 800,
		loop: true,
		// Dotts
		pagination: {
			el: '.control__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.control__arrow--next',
			prevEl: '.control__arrow--prev',
		},
		// breakpoints: {
		// 	768: {
		// 		spaceBetween: 150,
		// 	},
		// 	992: {
		// 		spaceBetween: 180,
		// 	},
		// 	1232: {
		// 		spaceBetween: 280,
		// 	},
		// },
	})
}