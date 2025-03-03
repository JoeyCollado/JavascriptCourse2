// Error = an object is created to represent a problem that occurs
//         occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                    ex. close files, close connections, release resources


try{
    console.log("Hello");
    //network errors
    //promise rejection
    //security errors
}

catch(error){
    console.error(error) //console.error is best for catching errors, good for debugging

}

finally{ //optional, always execture regardless of error
    //Close files
    //Close Connections
    //Release resources
    console.log("This always executes")

}


console.log("You have reach the end!")