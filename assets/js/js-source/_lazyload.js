document.addEventListener("DOMContentLoaded", () => {

	let lazyImages = [...document.querySelectorAll('.lazyload')]

	if ("IntersectionObserver" in window) {
		// Create new observer object
		let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
			// Loop through IntersectionObserverEntry objects
			entries.forEach(function(entry) {
				// Do these if the target intersects with the root
				if (entry.isIntersecting) {
					let lazyImage = entry.target
					lazyImage.src = lazyImage.dataset.src
					setTimeout(() => {
						lazyImage.classList.add("lazyload--loaded")
					}, 150)
					lazyImageObserver.unobserve(lazyImage)
				}
			});
		});
		// Loop through and observe each image
		lazyImages.forEach(function(lazyImage) {
			lazyImageObserver.observe(lazyImage)
		});
	}

	let lazyVideos = [...document.querySelectorAll('.lazyvideo')]

	if ("IntersectionObserver" in window) {
		let lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
			entries.forEach(function(video) {
				if (video.isIntersecting) {
					for (let source in video.target.children) {
						let videoSource = video.target.children[source];
						if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
							videoSource.src = videoSource.dataset.src;
						}
					}
					video.target.load();
					setTimeout(() => {
						video.target.classList.add("lazyvideo--loaded")
					}, 150)
					lazyVideoObserver.unobserve(video.target);
				}
			});
		});

		lazyVideos.forEach(function(lazyVideo) {
			lazyVideoObserver.observe(lazyVideo);
		});
	}
})
