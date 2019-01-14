window.addEventListener("DOMContentLoaded", scrollLoop, false);

var yellow = document.querySelector("#yellow");
var stars = document.querySelector("#stars");
var nubesDos = document.querySelector("#nubesdos");
var nave = document.querySelector("#nave");
var resplandor = document.querySelector("#resplandor");
var crosses = document.querySelector("#crosses");

var xScrollPosition;
var yScrollPosition;

function scrollLoop(e){
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;


  setTranslate(0, yScrollPosition * 0, yellow);
  setTranslate(0, yScrollPosition * 0.1, stars);
  setTranslate(0, yScrollPosition * 0.4, crosses);
  setTranslate(0, yScrollPosition * -0.7, nubesDos);
  setTranslate(0, yScrollPosition * -1.5, nave);
  setTranslate(0, yScrollPosition * -1.5, resplandor);

  requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el){
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
}
