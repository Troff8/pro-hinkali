const orderingRadiogroups = Array.from(document.querySelectorAll(".ordering-radiogroup__group"));

orderingRadiogroups.forEach(function (rg, index) {
    rg.addEventListener("change", notify, false);
    var org = rg.parentNode;
    
    function notify(event) {
      if (event.target !== event.currentTarget) {
        var sRadio = event.target.id;
        const allAI = Array.from(org.querySelectorAll(".ordering-radiogroup__additional-info"));
        allAI.forEach(function (ai, index) {
            ai.classList.remove('open')
        })
        var selectedAI = org.querySelector("[data-radioitem='"+sRadio+"']");
        if (selectedAI)
            selectedAI.classList.add('open');
      }
      event.stopPropagation();
    }
});