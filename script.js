// This controls the skills / bars
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



// This handles Main Display Carousel and adds 12sec automatic timer
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
  }, 12000); // Change slide every 12 seconds
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

// Make imgs clickable without modifying their appearance
var smartRxImg = document.getElementById('smartRx-img');
var rpsImg = document.getElementById('rps-img');
var tictacImg = document.getElementById('tictac-img');
var wayfarerImg = document.getElementById('wayfarer-img');

smartRxImg.addEventListener('click', function() {
  window.open('https://github.com/Jaypad07/SmartRx', '_blank');
});

rpsImg.addEventListener('click', function() {
  window.open('https://github.com/Jaypad07/Rock-Paper-Scissors', '_blank');
});

tictacImg.addEventListener('click', function() {
  window.open('https://github.com/Jaypad07/Strange-Tic-Tac-Toe', '_blank');
});

wayfarerImg.addEventListener('click', function() {
  window.open('https://github.com/Jaypad07/Wayfarer', '_blank');
});







