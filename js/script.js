const open_btn = document.querySelector('#show')
const close_btn = document.querySelector('#close')


open_btn.addEventListener('click',()=>{
    document.querySelector('.navbar').classList.add('show')
})
close_btn.addEventListener('click',()=>{
    document.querySelector('.navbar').classList.remove('show')
})


// scroll animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  
  
