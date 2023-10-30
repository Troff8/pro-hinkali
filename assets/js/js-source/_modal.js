import MicroModal from 'micromodal';

MicroModal.init({
	openTrigger: 'data-modal-open',
	closeTrigger: 'data-modal-close',
	openClass: 'modal--open',
	disableScroll: true,
	disableFocus: false,
	awaitOpenAnimation: false,
	awaitCloseAnimation: true,
	debugMode: true
});
