import $ from 'jquery';

// Поле селекта
$('.field-select__wrap_placeholder, .field-select__wrap_value, .field-select__wrap_chevron').on("click",function(e){
    var fs = $( this ).closest('.field-select');
    var isOpen = $( fs ).hasClass('open');
    $('.field-select').removeClass('open');
    $( fs ).toggleClass('open', !isOpen);
    e.stopPropagation();
});

$('.field-select .field-select__wrap_list .item').on("click",function(){
    var val = $( this ).html();
    var fs = $( this ).closest('.field-select');
    $( fs ).find('.item').removeClass('active');
    $( this ).addClass('active');
    $( fs ).removeClass('open');
    $( fs ).addClass('selected');
    $( fs ).find('.field-select__wrap_value').html(val);
});

$('.field-select__wrap_clear').on("click",function(){
    var fs = $( this ).closest('.field-select');
    $( fs ).removeClass('selected');
    $( fs ).find('.field-select__wrap_value').html('');
});

var selects = document.querySelectorAll('.field-select');
if (selects) {

    // закрываем дропдауны
    window.addEventListener("click", function() {
        selects.forEach(select => {
            select.classList.remove('open');
        });
    });

}