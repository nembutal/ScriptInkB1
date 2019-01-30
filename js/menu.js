var elemento = document.getElementById("active");
var menu = document.getElementById("menu");
var altura = elemento.offsetTop;
var menuR = document.getElementById("btnmenu");
var abrir = document.getElementById("abrir");
var cerrar = document.getElementById("cerrar");

window.addEventListener('scroll', function(){
  if(altura < window.pageYOffset){
    menu.classList.add('fixed');
  }else{
    menu.classList.remove('fixed');
  }
} )

function abrirMenu(){
  menuR.style.transition = "max-height 0.8s";
  menuR.style.maxHeight = "500px";
  abrir.style.display = "none";
  cerrar.style.display = "block";
}
function cerrarMenu(){
  menuR.style.transition = "max-height 0.3s";
  menuR.style.maxHeight = "0px";
  abrir.style.display = "block";
  cerrar.style.display = "none";
}
function responsive(){
  var ancho = window.innerWidth;
  if(ancho < 800){
    menuR.style.maxHeight = "0px";
    abrir.style.display = "block";
    cerrar.style.display = "none";
  }else{
    menuR.style.maxHeight = "500px"
  }
}
window.onresize = responsive;
