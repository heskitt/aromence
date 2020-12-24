// Custom player control
[].forEach.call(document.querySelectorAll('video'), function (el) {
	let control = document.createElement('div');
	control.className = "video";
	el.parentNode.insertBefore(control, el);
	control.appendChild(el);
	control.insertAdjacentHTML('afterbegin', '<div class="overlay"></div>');
	control.addEventListener('click', function (e) {
		let video = control.querySelector('video');
		if (video.paused) {
			control.classList.add('is-playing');
			video.play();
		} else {
			control.classList.remove('is-playing');
			video.pause();
		}
		video.onended = function () {
			control.classList.remove('is-playing');
		};
	});
});