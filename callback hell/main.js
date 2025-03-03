// Callback Hell = Situation in JavaScript where callbacks 
//                            are nested within other callbacks to the
//                           degree where the code is difficult to read.
//                           Old pattern to handle asynchronous functions.
//                           Use Promises + async/await to avoid Callback Hell

// asynchronus function = can be completed an any time/ they're unordered
// synchronous function = have order


function task1(callback){ //passing argument as callback is necessary to make this code synchronous

    setTimeout(() =>{
        console.log("task 1 complete");
        callback(); //pass in the callback
    }, 2000); //two argument is a callback and time in milliseconds, to make code synchronous
    
}

function task2(callback){
    
    setTimeout(() =>{
        console.log("task 2 complete");
        callback();
    }, 1000);
}

function task3(callback){
    
    setTimeout(() =>{
        console.log("task 3 complete");
        callback();
    }, 3000);
}

function task4(callback){
    
    setTimeout(() =>{
        console.log("task 4 complete");
        callback();
    }, 1500);
}
//doing in asynch
/* 
task1();
task2();
task3();
task4();

console.log("all task complete");
*/

//doing in synch using arrow function, once task 1 is complete passin the callback to task 2
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("all task complete"));

            })
        });
    })


