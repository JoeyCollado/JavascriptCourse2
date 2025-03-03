//nested objects = objects inside another objects.
//                 allow you to represent more complex data structrues
//                 Child object is enclosed by a Parent object

//                 Person{Address{}, ContactInfo{}} 
//                 ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

class Person{ //parent class

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address); //calling constructor of address class
    }
}

class Address{ //child class

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

//constructing person objects

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person2 = new Person("Patrick", 37,   "128 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", 
                                                    "Bikini Bottom", 
                                                    "Int. Waters");

console.log(person1.name);
console.log(person1.age); 
console.log(person1.address);                                   
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country); //accessing a property of nested object