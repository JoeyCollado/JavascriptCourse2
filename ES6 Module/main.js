// ES6 Module = An external file that contains reusable code
//                          that can be imported into other JavaScript files
//                          Can contain variables, classes, functions ... and more
//                          Introduced as part of ECMAScript 2015 update

//we will use object destructuring to get specific block of codes from that module

import {pi, getCircumference, getArea, getVolume} from './MathUtil.js';


console.log(pi);

const circum = getCircumference(10); // storing the result of function getcircumference to the variable circum and passing 10 as value
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circum}cm`);
console.log(`${area}cm^2`);
console.log(`${volume}cm^3`);