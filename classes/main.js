// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance

//creating a class
class Product{
    constructor(name, price){ //putting a constructor inside the class
        this.name = name;
        this.price = price;
    }
    //function1 / method
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`); //toFixed keyword enables decimal points at the end of the number, here it is set to two decimal places
    }
    //function2 /method
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
//creating objects
const salesTax = 0.05; //its for the calculateTotal method

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);


//display
product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);