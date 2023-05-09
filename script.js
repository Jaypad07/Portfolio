const mainpic = document.querySelector('#main-pic');

const images = [
    'images/StrangerThings.jpg',
    'images/RPS.png',
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


