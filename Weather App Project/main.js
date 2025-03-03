

const weatherForm = document.querySelector(".weatherForm"); //because form is set to a class
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

const apiKey = "058ed497e642b1de36588a02ea05bb17"; //for the api key

weatherForm.addEventListener("submit", async event =>{ //when we click submit do this code  
    
    event.preventDefault(); //prevent default behavior of forms, preventing from refreshing the page

    const city = cityInput.value;

    if(city){ //if there's a city do 
        
        try{
            const weatherData = await getWeatherData(city); //after getting the weather data
            displayWeatherInfo(weatherData); //once we received the weather data call displayweatherinfo function, display it
        }
        catch(error){
            console.error(error);
            displayError(error); //pass the error and display it
        }

    }
    else{
        displayError("Please Enter a City");
    }
});

async function getWeatherData(city){ // to get weather data 

   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

   const response = await fetch(apiUrl);

   if(!response.ok){ //if response is not okay
    throw new Error("Could not fetch weather data")
   }
   return await response.json(); //else return an object and convert it to a json format 
}

function displayWeatherInfo(data){

    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]}  = data; //array and object destructuring to get specific datas that are gathered

           //if we get a legitimate data reset card and display legit data
           card.textContent = "";
           card.style.display = "flex";
           //

           //create the necessary elements
           const cityDisplay = document.createElement("h1");
           const tempDisplay = document.createElement("p");
           const humidityDisplay = document.createElement("p");
           const descDisplay = document.createElement("p");
           const weatherEmoji = document.createElement("p");
           //
           //change the text contents of the elements created
           cityDisplay.textContent = city; //the text content of the element was set to the city variable that was created after destructuring
           tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
           humidityDisplay.textContent = `Humidity: ${humidity}%`;
           descDisplay.textContent = description;
           weatherEmoji.textContent = getWeatherEmoji(id);
           //
           cityDisplay.classList.add("cityDisplay"); //get the css styling
           tempDisplay.classList.add("tempDisplay");
           humidityDisplay.classList.add("humidityDisplay");
           descDisplay.classList.add("descDisplay");
           weatherEmoji.classList.add("weatherEmoji")
           //
 
           //add the element to the card div element
           card.appendChild(cityDisplay);
           card.appendChild(tempDisplay);
           card.appendChild(humidityDisplay);
           card.appendChild(descDisplay);
           card.appendChild(weatherEmoji);
           //
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300): //these codes come from openweather and each number range corresponds to a weather state
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "⛆";
        case (weatherId >= 600 && weatherId < 700):
            return "❅";
        case (weatherId >= 700 && weatherId < 800):
            return "☁";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁︎";
        default:
            return "❓";
    }
}

function displayError(message){
    
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add(".errorDisplay"); //get the css properties of the errorDisplay class

    card.textContent = "";
    card.style.display = "flex"; //display the card if we click submit but text content is set to none (input is empty)
    card.appendChild(errorDisplay); //display the error display
}