# typeheadJson
Implementacion de typehead bootstrap 3 utilizando una API REST como fuente de datos. 

> Recupera listado de escuelas a través de una API REST, guarda el id de la escuela en un input hidden para luego ser recuperado por algún método conocido.


Ejemplo funcional con control de errores : http://juan41285.github.io/typeheadJson/

_______________________________________________________________________________________________________
Para lograr el funcionamiento del plugin [Bootstrap-3-Typeahead](https://github.com/bassjobsen/Bootstrap-3-Typeahead) utilizando una fuente externa de datos se debe tener en cuenta la filosofia [convencion sobre configuracion](https://es.wikipedia.org/wiki/Convenci%C3%B3n_sobre_Configuraci%C3%B3n) y utilizar los sufijos id y name en nuestro archivo json.

****
Implementación para arobios
-------

**Requisitos**

    
- jquery 1.x 
- Bootstrap css y js
- bootstrap3-typeahead.min.js
    
**Maquetación**
```html
<!--recomendado autocomplete="off" - Obligatorio data-provider="typeahead" -->
<input type="text" data-provide="typeahead"  class="form-control typeahead" name="escuela" id="escuela" autocomplete="off">
<!--campo oculto para alojar el id de la escuela-->
<input type="hidden" name="id_Esc" id="id_Esc" disabled="" value="">
                            
```
**Función Jquery**
```javascript
$(function(){

 //obtiene los datos del json proveniente de la API REST
$.get('http://tictucuman.net/portal/agendas/escuelas', function(data){
    $("#escuela").typeahead({ source:data });
},'json');

//cuando pierde el foco compara el valor elegido con el valor que se encuentra en el input
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
//Esta funcion tambien se puede implementar junto a los eventos change,onblur, etc
})
```
****
Que lo disfruten

