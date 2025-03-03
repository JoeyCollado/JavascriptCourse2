//arithmetic operators = operands (values, variables, etc.)
//                       operators (+ - * / **)
//                       ex. 11 = x + 5;

let students = 30 // assigning a value to the variable students

students = students + 1; // re assign the variable adding 1 to it
students = students - 1; // re assign the variable subtracting 1 to it
students = students * 2; // re assign the variable multiplying 2 to it
students = students / 2; // re assign the variable dividing it to 2
students = students ** 2; // 30 to the power of 2, using exponents
// modulus operators
students = students % 2; // modulus operator, the remaining value we can get when we divide
let extraStudents = students & 3;

//augmented assignment operators
students += 2; //adding value to the variable
students -= 2;
students *= 2;
students /= 2;
students **= 2;
students %= 2;
//
// increment and decrement operator
students ++; //increment operator
students --; //decrement operator
//
/*
operator precedence // works like pemdas, this is the guide to solve the below equation

1. parenthesis
2. exponents
3. multiplication & division and modulus
4. addition and subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
//           1 + 2 * 3 + 16
//           1 +   6   + 16
//                 23  
console.log(result)