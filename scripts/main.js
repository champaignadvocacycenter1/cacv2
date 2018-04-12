
window.onscroll = function() {stick()};
window.onresize = function() {resize()};

/*--- STICKY SIDEBAR --*/

// var headerBottom is invisible div at bottom of header
// Grab it to find offset position of the sidebar nav
var headerBottom = document.getElementById("headerBottom");
var sidebar = document.getElementById("sidebar");
var content = document.getElementById("content");

// Sticky is the position at which we want the sidebar to be stickied
var sticky = headerBottom.offsetTop;

// Keep track of width bc fixed will resize relative to viewport
var width = sidebar.offsetWidth;

// Adjust fixed position on resize
function resize(){
    // Update sticky height
    sticky = headerBottom.offsetTop;

    // Width will be 1/4 content width as it takes up 3 cols
    width = content.offsetWidth/4;
    // Call to stick
    stick();
}

function stick() {
  sticky = headerBottom.offsetTop;
  if (window.pageYOffset >= sticky) {
    sidebar.classList.add("sticky");
    sidebar.style.width = width+"px";
  } else {
    sidebar.classList.remove("sticky");
  }
}