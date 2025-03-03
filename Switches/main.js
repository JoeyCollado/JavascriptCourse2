//switch = can be an efficient replacement to many else if statements

//days switch program
/*
let day = "ligma";

switch(day){
    case 1:
        console.log("it is monday");
        break;
    case 2:
      console.log("it is tuesday");
        break;
    case 3:
      console.log("it is wednesday");
        break;
    case 4:
      console.log("it is thursday");
        break;
    case 5:
      console.log("it is friday");
        break;
    case 6:
      console.log("it is saturday");
        break;
    case 7:
      console.log("it is sunday");
        break;    
    default:
        console.log(`${day} is not a day`); //default case incase there are no matching cases
}
*/
// advance program = test grade swtich program

let testScore = 22;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F"
}

console.log(letterGrade);