function abrirModal(fondo, caja){
  var fondo = document.getElementById(fondo);
  var caja = document.getElementById(caja);

  fondo.style.display = "block";
  caja.style.display = "block";

  var delayAbrir = setTimeout(function(){

    fondo.style.transition = "opacity 0.9s";
    fondo.style.opacity = "1";
    caja.style.transition = "opacity 0.9s";
    caja.style.opacity = "1";
  },100);
}


function cerrarModal(fondo, caja){
  var fondo = document.getElementById(fondo);
  var caja = document.getElementById(caja);

  fondo.style.transition = "opacity 0.9s";
  fondo.style.opacity = "0";
  caja.style.transition = "opacity 0.9s";
  caja.style.opacity = "0";
  var delayAbrir = setTimeout(function(){
    fondo.style.display = "none";
    caja.style.display = "none";
  },900);

}
