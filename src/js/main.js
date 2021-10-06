window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("main-nav").style.height = "80px";
  } else {
    document.getElementById("main-nav").style.height = "100px";
  }
}