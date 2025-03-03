let timeoutId;

function showAlert() {
    window.alert("Hello");
}

function startTimer() {          //start  the timer
    timeoutId = setTimeout(showAlert, 3000);
    console.log("STARTED");
}

function clearTime() {            //clear the timeout
    clearTimeout(timeoutId);
    console.log("CLEARED");
}