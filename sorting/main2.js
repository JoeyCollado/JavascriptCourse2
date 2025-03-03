const people = [{name: "joey", age: 19, gpa: 1.0},
                {name: "jake", age: 133, gpa: 2.0},
                {name: "james", age: 119, gpa: 4.0},
                {name: "john", age: 139, gpa: 5.0}];


people.sort((a,b) => a.gpa - b.gpa); //sorting using properties of an object


console.log(people)