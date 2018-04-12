
window.onscroll = function() {myFunction()};
window.onresize = function() {resize()};

var navbar = document.getElementById("navigationBar");
var sidebar = document.getElementById("sidebar");
var content = document.getElementById("content");
var sticky = navbar.offsetTop;
var width = sidebar.offsetWidth;

function resize(){
    sticky = navbar.offsetTop;
    width = sidebar.offsetWidth;
}

function myFunction() {
  if (window.pageYOffset >= sticky+53) {
    sidebar.classList.add("stickySide");
    sidebar.style.width = width+"px";

  } else {
    sidebar.classList.remove("stickySide");
  }
}