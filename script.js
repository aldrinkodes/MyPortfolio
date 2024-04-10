function toggleMenu() {
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
        }, 4000); // Delay before restarting animation (adjust as needed)
      }
    }, speed);
  }
  
  // Call the animateText function when the page loads
 // Call the animateText function when the page loads
function changeName(idname) {
    const textElement = document.getElementById(idname);
    const textToAnimate = textElement.textContent;
    textElement.textContent = ""; // Clear the text
    
    const icon = document.querySelector(".hamburger-icon");
  if (icon && !icon.classList.contains("open")) {
    const animationSpeed = 250; // Adjust the speed of animation here (in milliseconds)
    animateText(textElement, textToAnimate, animationSpeed);
  }
}
  window.onload = function () {
    changeName("username");
    changeName("username2");
  };


  // Array of text to be displayed
const texts = [
    
    "APP developer",
    "Fullstack developer[Beginner]",
    "Coder",
    "AI Enthusiast",
    "LLM enthusiast",
    "Gaming Youtuber"
   
   

  ];
  
  // Index to keep track of current text
  let currentIndex = 0;
  
  // Function to change text
  function changeText() {
    const changingTextElement = document.getElementById("change-text");
    changingTextElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length; // Loop back to the start
  }
  
  // Change text initially
  changeText();
  
  // Set interval to change text periodically
  setInterval(changeText, 2000); // Change every 2 seconds
  
  const string =[
    "Fresher",
    "Open To Work"
  ]
  let Index=0;
  function changeText2() {
    const changingTextElement = document.getElementById("changingtext");
    changingTextElement.textContent = string[Index];
    Index = (Index + 1) % string.length; // Loop back to the start
  }
  
  // Change text initially
  changeText2();
  
  // Set interval to change text periodically
  setInterval(changeText2, 5000); // Change every 2 seconds
  

  //dark mode code


  const darkModeToggle = document.getElementById('dark-mode-t');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});





/*Quotes

const txts = [

"The most beautiful thing we can experience is the mysterious. It is the source of all true art and science." - Albert Einstein
  
, "Science is the poetry of reality." - Richard Dawkins
  
  , "The important thing is to never stop questioning." - Albert Einstein
  
  , "Somewhere, something incredible is waiting to be known." - Carl Sagan
  
  , "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world." - Louis Pasteur
  
  , "Science is not only a disciple of reason but, also, one of romance and passion." - Stephen Hawking
  
  , "In science, there are no shortcuts to truth." - Carl Sagan
  
  , "Science is the great antidote to the poison of enthusiasm and superstition." - Adam Smith
  
  , "The good thing about science is that it's true whether or not you believe in it." - Neil deGrasse Tyson
  
  , "Science without religion is lame, religion without science is blind." - Albert Einstein
  
 
 

];

// Index to keep track of current text
let currentIndex1 = 0;

// Function to change text
function changetxt() {
  const changingTextElement = document.getElementById("changetxt");
  changingTextElement.textContent = txts[currentIndex1];
  currentIndex1 = (currentIndex1 + 1) % txts.length; // Loop back to the start
}

// Change text initially
changetxt();

// Set interval to change text periodically
setInterval(changetxt, 2000); // Change every 2 seconds*/