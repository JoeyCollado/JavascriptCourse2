
const slides = document.querySelectorAll(".slides img") //select all elements within the class of slides that are images
let slideIndex = 0; //set an index to the slides
let intervalId = null; //return an id that we can work on

//initializeSlider();
document.addEventListener("DomContentLoaded", initializeSlider); //preferred way

//declare function
function initializeSlider(){

    if(slides.length > 0){ //if there's no slide of images don't do the code
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }

   

}

function showSlide(index){

    if(index >= slides.length){ //if we reset the end of the slide, reset the slide index to 0, so that slider don't get out of bounds
       slideIndex = 0;
    }
    else if(index < 0){
       slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
       slide.classList.remove("displaySlide") //if we go the the next slide previous slide get removes
    });
    slides[slideIndex].classList.add("displaySlide"); //add display slide to the next slide

}

function prevSlide(){

    slideIndex --;
    showSlide(slideIndex);

}

function nextSlide(){

    slideIndex ++;
    showSlide(slideIndex);  

}