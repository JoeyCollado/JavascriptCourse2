//

let prices = [5,10,15,20];

//how to loop through an array

//1st is to use standard for loop
/*
for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}
*/
//if you want to iterate backward
/*
for(let i = prices.length -1; i >=0 ; i-=1){
    console.log(prices[i]);
}
*/

//2nd option is for upstatement
/*
for(let i of prices){
    console.log(i)
}
*/
//good practice
for(let price of prices){  //to make it more descriptive and readable
    console.log(price)
}