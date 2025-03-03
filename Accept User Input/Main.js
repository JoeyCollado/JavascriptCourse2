// how to accept user input

// 1. easy way = window prompt
// 2. professional way = HTML textbox

//window prompt
//let username;

//username = window.prompt("What is Your Username?");

//console.log(username);
//

document.getElementById("mySubmit").onclick = function(){
    // anything inside this curly braces is everything that will happen when we click on button
    username = document.getElementById("myText").value// reassign username and set this equal to the text on the textbox
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${ username}` //reassign h1 content and set the value equal to the text on the textbox
}