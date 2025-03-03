
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

/*
myButton.addEventListener("click", event => {

    if(myImg.style.display === "none"){ //if the image property display is equal to none
         myImg.style.display = "block";
         myImg.textContent = "hide";
    }
    else{
        myImg.style.display = "none"; //display property is set to none/hiding
        myButton.textContent = "show"; //
    }

    
});
*/

//alternative of display is visibility = here we can reserve space for the element

myButton.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){ //if the image property display is equal to hidden
         myImg.style.visibility = "visible";
         myImg.textContent = "Hide";
    }
    else{
        myImg.style.visibility = "hidden"; //display property is set to none/hiding
        myButton.textContent = "show"; //
    }

    
});
