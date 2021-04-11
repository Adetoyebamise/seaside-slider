const slides = document.querySelectorAll(".slide");
const nextButton = document.querySelector(".next-button");
const previousButton = document.querySelector(".previous-button");

slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextButton.addEventListener("click", function name(params) {
  counter++;
  // counter = counter + 1;
  // return counter;
  carousel();
})
previousButton.addEventListener("click", function name(params) {
  counter--;
  // counter = counter -1;
  // return counter;
  carousel();
});

function carousel() {
  // //slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  //buttons
  if (counter < slides.length -1){
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none";
  }
  if (counter > 0) {
    previousButton.style.display = "block";
  } else {
    previousButton.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}
previousButton.style.display = "none";
