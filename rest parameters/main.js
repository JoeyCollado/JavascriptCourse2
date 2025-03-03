// rest parameters = represents an indefinite number
//...                of parameters
//                   (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

//less efficient way of writing
/*
function sum(a, b){   //function that only accept two arguments

    return a + b
}

function sum2(a, b, c){   //function that only accept three arguments

    return a + b + c
}
function sum3(a, b, c, d){   //function that only accept four arguments

    return a + b + c + d
}
*/

//using rest parameters

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number

    }
    return total
}