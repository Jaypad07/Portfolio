const mainpic = document.querySelector('#main-pic');

const images = [
    'images/SmartRx.png',
    'images/RPS.png',
    'images/StrangerThings.png',
    // Add more image URLs here
  ];

  const img = document.getElementById("main-pic");
  let currentIndex = 0;
  
  function switchToNextImage() {
      currentIndex++;
  
      if (currentIndex >= images.length) {
          currentIndex = 0;
      }
      
      img.src = images[currentIndex];
  }
  
  // Set the interval to switch images every 7 seconds
  setInterval(switchToNextImage, 10000);
  

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
           
        }else  entry.target.classList.remove('show');
    });
});


const hiddenBackground = document.querySelectorAll('.hidden');
hiddenBackground.forEach((el) => observer.observe(el));


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
    const scrollableHeight = document.documentElement.scrollHeight - windowHeight;

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
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("pic-container");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



