//toLocaleString() = returns a string with language
//                   sensitive representation of this number

//number.toLocaleString(locale, {options});

// 'locale'  =  specify that language (undefined = default set in browser)
// 'options' = object with formatting options

let myNum = 123456.789

//different formatting system
//myNum = myNum.toLocaleString("en-US"); //us english formatting  
//myNum = myNum.toLocaleString("hi-IN"); //hindi formatting
//myNum = myNum.toLocaleString("de-DE"); //standard german

//currency formatting styles
//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}); //us Dollars
//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}); //rupees
//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}); //euros

//percent formatting styles
//myNum = myNum.toLocaleString(undefined, {style: "percent"});

//units style, all units of measurements
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum)