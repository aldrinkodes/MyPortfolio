function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    
}
function animateText(element, text, speed) {
    let index = 0;
    const interval = setInterval(function() {
      element.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setTimeout(function() {
          element.textContent = ''; // Clear the text
          animateText(element, text, speed); // Restart animation
        }, 2000); // Delay before restarting animation (adjust as needed)
      }
    }, speed);
  }
  
  // Call the animateText function when the page loads
 // Call the animateText function when the page loads
function changeName(idname) {
    const textElement = document.getElementById(idname);
    const textToAnimate = textElement.textContent;
    textElement.textContent = ""; // Clear the text
    const animationSpeed = 100; // Adjust the speed of animation here (in milliseconds)
    animateText(textElement, textToAnimate, animationSpeed);
  }
  window.onload = function () {
    changeName("username");
    changeName("username2");
  };