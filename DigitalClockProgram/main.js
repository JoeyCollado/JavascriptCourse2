

function updateClock(){ //function to update clock

    const now = new Date(); //get current date
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0); //get current minutes and pad 0 at the start
    const seconds = now.getSeconds().toString().padStart(2, 0); //get current seconds and pad 0 at the start
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`; //how the format should appear on window
    document.getElementById("clock").textContent = timeString; //update the html of the web, and setting it equal to the format of timestring
}

updateClock();
setInterval(updateClock, 1000); //update and call this functino every 1 second