//Fisher-Yates algorithm

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

//invoking function
shuffle(cards);

console.log(cards);

//function declaration
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        //destructuring
        [array[i], array[random]] = [array[random], array[i]];
    }
}
