// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckbox.checked){ //evaluate the checkbox if it is check or n
        subResult.textContent = 'you are subscribed!';
    }
    else{
        subResult.textContent = 'you are not subscribed!';
    }

    if(visaBtn.checked){
        paymentResult.textContent = 'you are paying with visa';
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = 'you are paying with mastercard';
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = 'you are paying with paypal';
    }
    else{
        paymentResult.textContent = 'you must select a payment type';
    }
}