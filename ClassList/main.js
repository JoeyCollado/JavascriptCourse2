// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable ccs classes for many elements
//                     across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");

myButton.classList.add("enabled"); //the enabled css class is applied to the element myButton
//myButton.classList.remove("enabled"); //removed

myButton.addEventListener("mouseover", event =>{  //the css hover class is applied
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout", event =>{ //the css hover class is removed
    event.target.classList.remove("hover");
});

myButton.addEventListener('click', event => { //the css disabled class is applied

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "Clicked!";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
});