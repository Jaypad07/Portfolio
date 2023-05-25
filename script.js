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
    html: 57,    
    css: 52,
    'java-script': 42,
    java: 54,
    angular: 35,
    git: 30,
    sql: 25,
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


