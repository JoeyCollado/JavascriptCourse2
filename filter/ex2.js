let ages = [16,17,18,19,20,65];
let adults = ages.filter(isAdult);
let children = ages.filter(isChild);

console.log(children);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}