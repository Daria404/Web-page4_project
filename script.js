"use strict";

let smoothJumpUp = function() {
if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    window.scrollBy(0,-50);
    setTimeout(smoothJumpUp, 10);
}
};

window.onscroll = function() {
let scrolled = window.pageYOffset || document.documentElement.scrollTop;
if (scrolled > 100) {
    document.getElementById('upbutton').style.display = 'block';
}
else {
    document.getElementById('upbutton').style.display = 'none';
}

};

//Modal win
document.addEventListener('DOMContentLoaded', function() {});

const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  };

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

