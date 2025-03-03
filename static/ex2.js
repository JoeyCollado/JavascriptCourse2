class User{ //class


    static userCount = 0; //keep track the number of users

    constructor(username){ //constructor
        this.username = username;   
        User.userCount++; //adds the number of user

        }
        //method
        sayHello(){
            console.log(`Hello my username is ${this.username}`);
        }
        //static method
        static getUserCount(){
            console.log(`There are ${User.userCount} users online`);
        }
    }

//objects
const user1 = new User("joey");
const user2 = new User("jake");

//display
console.log(User.userCount); //get total of user
//
console.log(user1.username); //get the user
console.log(user2.username);
//method
user1.sayHello();
user2.sayHello();
//accessing static method
User.getUserCount();