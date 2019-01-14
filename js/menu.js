var elemento = document.getElementById("active");
var menu = document.getElementById("menu");
var altura = elemento.offsetTop;

window.addEventListener('scroll', function(){
  if(altura < window.pageYOffset){
    menu.classList.add('fixed');
  }else{
    menu.classList.remove('fixed');
  }
} )
