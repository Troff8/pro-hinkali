var inc = document.querySelectorAll(".stepper, .fieldtext_stepper");
for (i = 0; i < inc.length; i++) {
  var incI = inc[i].querySelector("input"),
    id = incI.getAttribute("id"),
    min = incI.getAttribute("min"),
    max = incI.getAttribute("max"),
    step = incI.getAttribute("step");

    var minus = incI.previousElementSibling;;
    var plus = incI.nextElementSibling;
    minus.addEventListener("click", stepperInput);
    plus.addEventListener("click", stepperInput);
}
function stepperInput(e) {
    var target = e.currentTarget;
    var sign = target.getAttribute("sign");
     
  var incI = target.parentNode.querySelector('input');
    min = incI.getAttribute("min"),
    max = incI.getAttribute("max"),
    step = incI.getAttribute("step") * parseInt(sign);

    if (step > 0) {
        if (parseInt(incI.value) < parseInt(max)) {
            incI.value = parseInt(incI.value) + parseInt(step);
        }
    } else {
        if (parseInt(incI.value) > parseInt(min)) {
            incI.value = parseInt(incI.value) + parseInt(step);
        }
    }
}