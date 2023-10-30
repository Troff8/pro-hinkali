export const openDrawer = () => {
	document.querySelector('.drawer').classList.add('drawer--open')
}

export const closeDrawer = () => {
	document.querySelector('.drawer').classList.remove('drawer--open')
}

document.addEventListener("DOMContentLoaded", () => {

	const drawerOpener = document.querySelector('[data-drawer-open]');
	const drawerCloser = document.querySelector('[data-drawer-close]');
	const drawerPanel = document.querySelector('.drawer');

	drawerOpener.addEventListener('click', () => { openDrawer() })
	drawerCloser.addEventListener('click', () => { closeDrawer() })

	document.addEventListener('touchstart', handleTouchStart, false)
	document.addEventListener('touchmove', handleTouchMove, false)

	const pStart = {x: 0, y:0}
	const pStop = {x:0, y:0}

	function handleTouchStart(e) {
		if (typeof e['targetTouches'] !== "undefined"){
			let touch = e.targetTouches[0];
			pStart.x = touch.screenX;
			pStart.y = touch.screenY;
		} else {
			pStart.x = e.screenX;
			pStart.y = e.screenY;
		}
	}

	function handleTouchMove(e) {
		if (e.target.closest('.swipeignore') || e.target.closest('.dialog')) return

		if (typeof e["changedTouches"] !== "undefined") {
			let touch = e.changedTouches[0];
			pStop.x = touch.screenX;
			pStop.y = touch.screenY;
		} else {
			pStop.x = e.screenX;
			pStop.y = e.screenY;
		}

		let changeX = pStart.x - pStop.x

		if ( changeX < -150 ) {
			openDrawer()
		} else if ( changeX > 100 && drawerPanel.classList.contains('drawer--open') ) {
			closeDrawer()
		}
	}
})