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
document.addEventListener('DOMContentLoaded', function() {

    const  modalButtons = document.querySelectorAll('.js-open-modal'),
            overlay      = document.querySelector('.js-overlay-modal'),
           closeButtons = document.querySelectorAll('.js-modal-close');


    modalButtons.forEach(function(item){
       
       item.addEventListener('click', function(e) {
          
          e.preventDefault();
 
         const modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

          modalElem.classList.add('active');
          overlay.classList.add('active');
          console.log(closeButtons.classList);

 
       }); // end click

    }); // end foreach

    closeButtons.forEach(function(item) {

        item.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        });
     
     }); // end foreach

    document.body.addEventListener('keyup', function (e) {
        const key = e.key;
        

        if (key == "Escape") {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        }

    }, false);

    overlay.addEventListener('click', function() {
    document.querySelector('.modal.active').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
        // this.classList.remove('active');
    });
 }); // end ready

// const modal = document.getElementById('myModal');
// const btn = document.getElementById("myBtn");
// const span = document.getElementsByClassName("close")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
//   };

//   span.onclick = function() {
//     modal.style.display = "none";
//   };

//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };

