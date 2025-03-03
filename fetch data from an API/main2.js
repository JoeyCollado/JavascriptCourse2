//using fetch

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
     .then(response => response.json()) //converting response to json
     .then(data => {

        if(!response.ok){ //if the response does not access the ok property
           throw new Error("Could not fetch resource")
        }
        return response.json(); //otherwise return object in a json format
     })
     .catch(error => console.error(error)); //catch error
     */