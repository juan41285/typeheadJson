$(function(){

 
$.get('http://tictucuman.net/portal/agendas/escuelas', function(data){
    $("#escuela").typeahead({ source:data });
},'json');

  $("#escuela").focusout(function() {
    var escuela = $(this).typeahead("getActive");
    if (escuela) {
      
        if (escuela.name == $(this).val()) {
           $('#id_Esc').val(escuela.id);
        } else {
            $('#id_Esc').val('');
        }
    } else {
          $('#id_Esc').val('');
       
    }
});

})