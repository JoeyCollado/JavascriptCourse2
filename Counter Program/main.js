// counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

//functions
increaseBtn.onclick = function(){
    count++; //increment count by 1
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--; //decrement count by 1
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0; //count back to 0
    countLabel.textContent = count;
}