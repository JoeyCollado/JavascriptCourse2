    //Random Number Generator

    const min = 50;
    const max = 100;

    let randomNum = Math.floor(Math.random() * (max - min)) + min; //gives us a random number between 50-100 range
                                                   // floor removes the decimal portion
                                                   // + min set the minimum number to be 50

     //let randomNum = Math.floor(Math.random() * 6) + 1; //gives us a random number between 1-6
                                                   // floor removes the decimal portion
                                                   // + 1 set the minimum number to be 1

    console.log(randomNum);