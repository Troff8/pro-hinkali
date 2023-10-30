function initLoader() {
	const loader = document.createElement('span');
	loader.classList.add('loader');
	const loaderIcon = document.createElement('span');
	document.body.appendChild(loader);
	loaderIcon.classList.add('loader__icon');
	loader.appendChild(loaderIcon);
	setTimeout(function() {
		loader.classList.add('loader--show');
	}, 50);
}

global.initLoader = initLoader;

function removeLoader() {
	const loader = document.querySelector('.loader')
	loader.classList.remove('loader--show');
	setTimeout(function() {
		loader.remove();
	}, 150);
}

global.removeLoader = removeLoader;