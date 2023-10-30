import $ from 'jquery';

// Поле мультиселекта
$('.field-multiselect__wrap_placeholder, .field-multiselect__wrap_chevron').on("click",function(){
    var fs = $( this ).closest('.field-multiselect');
    $( fs ).toggleClass('open');
});

$('.field-multiselect .field-multiselect__wrap_list .item').on("click",function(){
    $( this ).attr('data-select', true);
    var fs = $( this ).closest('.field-multiselect');
    $( fs ).removeClass('open');
    $( fs ).addClass('selected');
    mselect_render_val(fs);
});

function mselect_render_val(mselect) {
    var fs = $( mselect ).closest('.field-multiselect');
    var selected = $( fs ).find('.field-multiselect__selected');
    $( selected ).html('');
    var items = $( mselect ).find('.field-multiselect__wrap_list .item[data-select="true"]');
    if (items.length == 0) {
        $( fs ).removeClass('selected');
        return;
    }
    items.each(function( index ) {
        var item = $( this ).clone();
        $( item ).append('<div class="item__remove"></div>');
        $( selected ).append( item );
    });

    $('.field-multiselect .field-multiselect__selected .item__remove').on("click",function(){
        var fs = $( this ).closest('.field-multiselect');
        var parent = $( this ).closest('.item');
        var id = $( parent ).attr('data-id');
        var item = $( fs ).find('.field-multiselect__wrap_list .item[data-id="'+id+'"]');
        $( item ).attr('data-select', false);
        mselect_render_val(fs);
    });
}
