const words = ['apple', 'orange', 'kiwi', 'banana', 'pomegranate', 'coconut',];
const longWords = words.filter(getLongWords);
const shortWords = words.filter(getShortWords);

console.log(shortWords);

function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}

