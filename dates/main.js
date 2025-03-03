// Date objects = objects that contain values that represent dates and times!
//                these date objects can be changed and formatted


// date(year, month, day, hour, minute, second, ms)
const date = new Date(); //creating date object

const year = date.getFullYear(); //object that gets the current year
const month = date.getMonth(); //gets the month
const day = date.getDate(); //get day
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(date)
console.log(year)
console.log(month)
console.log(date)
console.log(hour)
console.log(minute)
console.log(second)
console.log(dayOfWeek)