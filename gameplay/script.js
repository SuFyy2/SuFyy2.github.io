function goRight() {
    document.querySelector(".imagebox").scrollLeft += 840;
  }
  
  function goLeft() {
    document.querySelector(".imagebox").scrollLeft -= 840;
  }
  
  // Function to automatically slide the images every 6 seconds(6000 milliseconds)
  function autoSlide() {
    const imageBox = document.querySelector(".imagebox");
    const slideWidth = imageBox.querySelector(".slide").offsetWidth;
    const slideCount = imageBox.querySelectorAll(".slide").length;
    let currentIndex = 0;
  
    setInterval(() => {
      currentIndex++;
      if (currentIndex >= slideCount) {
        currentIndex = 0;
      }
  
      const nextPosition = currentIndex * slideWidth;
      imageBox.scrollTo({
        left: nextPosition,
        behavior: "smooth"
      });
    }, 6000);
  }
  
  // Call the autoSlide function to start automatic sliding
  autoSlide();
  