// поле текстовое
document.querySelectorAll('.fieldtext__wrap_clear').forEach(function(element) {
    element.addEventListener('click', function() {
      var ft = this.closest('.fieldtext');
      ft.querySelectorAll('input').forEach(function(input) {
        input.value = '';
      });
    });
  });