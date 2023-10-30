import $ from 'jquery';

$(document).on("change","[name=billing]",function() {
	const billingControl = $('.js-billing-control')
	const billingWrap = $('.js-billing-wrap')
	const billingInput = billingWrap.find('input')

	if (billingControl.is(":checked")) {
		billingWrap.slideDown()
		billingInput.prop('required', true)
	} else {
		billingWrap.slideUp('fast')
		billingInput.removeAttr('required')
	}
})