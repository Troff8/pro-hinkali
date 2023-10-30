class Toast {
	
	constructor(message, icon, duration, link, linkText) {
		this.message = message
		this.icon = icon
		this.duration = duration
		this.link = link
		this.linkText = linkText
	}

	createToast() {

		let message  = this.message
		let icon     = this.icon
		let duration = this.duration
		let link     = this.link
		let linkText = this.linkText

		const toastContainer = document.querySelector('.toast')
		const toastDuration = duration ? duration : 4000
		let toastLink
		let toastIcon
		if (!message) { console.error('Broken toast: Must contain a message'); return }

		const newToast = document.createElement('div')

		if (icon) toastIcon = `<i class="toast__icon ${icon}"></i>`
		if (link) toastLink = `<a href="${link}" class="toast__link ripple">${linkText}</a>`

		newToast.classList.add('toast__item')
		newToast.innerHTML = 
		`<div class="toast__content">
			${toastIcon ? toastIcon : ''}
			<div class="toast__text">${message}</div>
			${toastLink ? toastLink : ''}
		</div>`
		toastContainer.appendChild(newToast)
		
		setTimeout(() => { newToast.classList.add('toast__item--show') }, 150);
		setTimeout(() => { newToast.classList.remove('toast__item--show') }, toastDuration - 300);
		setTimeout(() => { newToast.remove() }, toastDuration);
	}

}

global.Toast = Toast;

document.addEventListener('click', function (e) {
	let button = e.target
	let message  = button.getAttribute('data-toast')
	let icon     = button.getAttribute('data-toast-icon')
	let duration = button.getAttribute('data-toast-duration')
	let link     = button.getAttribute('data-toast-link')
	let linkText = button.getAttribute('data-toast-link-text')
	if (button.hasAttribute('data-toast')) {
		new Toast(message, icon, duration, link, linkText).createToast()
	}
})
