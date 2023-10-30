var langSwitchActive = document.querySelector('.lang-switch__item.active');
if (langSwitchActive) {
    langSwitchActive.onclick = function() {
        var langSwitch = document.querySelector('.lang-switch');
        langSwitch.classList.toggle('open');
    }
}

document.addEventListener('click', function (e) {
	if (!e.target.classList.contains('lang-switch__item')) {
		var langSwitch = document.querySelector('.lang-switch')
        langSwitch.classList.remove('open')
	}	
})