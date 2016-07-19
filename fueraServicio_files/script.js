$(document).ready(function (){

var i = 0;
function cambiarImagen() {
    var imagenes = [
      "fueraServicio_files/condor.png",
      "fueraServicio_files/urano.png"
    ];
    
    if (i < imagenes.length - 1) {
      i++;
    } else {
      i = 0;
    }
    
    $('#imagenfondo').fadeOut('slow', function() {

      $('#imagenfondo').attr("src",imagenes[i]);

      $('#imagenfondo').fadeIn('slow');
    });
}
setInterval(cambiarImagen, 10000);

});
