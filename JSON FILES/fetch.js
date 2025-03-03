//fetch("name.json")
//     .then(response => response.json())
//     .then(value => console.log(value))

fetch("people.json")
     .then(response => response.json())
     .then(values => values.forEach(value => console.log(value.isEmployed))) //iterate through array of objects in jsonfile 
     .catch(error => console.log(error)); //catch error