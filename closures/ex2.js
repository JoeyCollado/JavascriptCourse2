

function createCounter(){


    let count = 0;

    function increment(){
        count ++;
        console.log(`the counter increases to ${count}`);
    }

    return {increment}; //return function increment
}

const counter = createCounter(); //invoking the outer function

counter.increment();