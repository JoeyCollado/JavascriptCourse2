// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})


async function fetchData(){ //function


    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();  //to lowercase make sure everything input is lowercase

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){ //if response property is not okay do this
            throw new Error("Could not fetch resource");
        }
        // if response is okay do this
        const data = await response.json(); //create a constant for data and convert it to json
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        //change the image element
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block"; //display default is block or none
    }
    catch(error){
        console.error(error);
    }
}