// static = function that defines properties or methods that belong
//          to a class rather than the objects created 
//          from that class (class owns anything static, not the objects)  
//          anything that is static belong to the class itself 

class mathUtil{ // if you would like the static property you have to access it by its class
    //static object
    static PI = 3.14159;

    //static method
    static getDiamter(radius){ // radius is a parameter
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;   //this means mathUtil 
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

//display
//          class    obj
console.log(mathUtil.PI);
//          class    method
console.log(mathUtil.getDiamter(10)); //get diameter of 10
//
console.log(mathUtil.getCircumference(10));
//
console.log(mathUtil.getArea(10))