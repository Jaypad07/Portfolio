const bars = document.querySelectorAll('.bar');
const maxWidths = {
    java: 49,
    spring: 37,
    sql: 34,
    angular: 35,
    'java-script': 42,
    'html-css': 47,   
    git: 37,
};

function handleScroll() { 
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    bars.forEach((bar) => {
        const barId = bar.id;
        const barPosition = bar.offsetTop;
        const barHeight = bar.offsetHeight;

        if (scrollPosition > barPosition - windowHeight + barHeight / 2) {
            const progress = 1.4 * scrollPosition - barPosition + windowHeight - barHeight / 2;
            let width = (progress / (windowHeight + barHeight * 0.05)) * maxWidths[barId];
            width = Math.min(width, maxWidths[barId]); // Limit the width to the maximum value
            bar.style.width = `${width}%`;
        }
    });
}

window.addEventListener('scroll', handleScroll);


let slideIndex = 1;
let timer;

showSlides(slideIndex);
startTimer();

// Next/previous controls
function plusSlides(n) {
  clearInterval(timer);
  showSlides(slideIndex += n);
  startTimer();
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(timer);
  showSlides(slideIndex = n);
  startTimer();
}

function startTimer() {
  timer = setInterval(function() {
    plusSlides(1);
  }, 12000); // Change slide every 7 seconds
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("pic-container");
  let dots = document.getElementsByClassName("dot");
  let name = document.getElementById("name");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if (n == 1 || n == slides.length + 1) {
    name.style.display = "block";
  } else {
    name.style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





