const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){ //function when we click submit button

    age = myText.value; //get the value from the textbox
    age = Number(age); //converts input into a number
    
   
    if(age >= 100){
        resultElement.textContent = 'you super old';
    }
    else if(age == -1){
        resultElement.textContent = 'what the fuck';
    }
    else if(age <= 0){ //additional condition before else
        resultElement.textContent = 'you aint even born yet';
    }
    else if(age >= 18){
        resultElement.textContent = 'you old enough for this site';
    }
    else{
        resultElement.textContent = 'you must be 18 above to enter site';
    }
}