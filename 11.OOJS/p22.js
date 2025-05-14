// static method 

/* 
    1. declare the static method inside the class body using 'static' keyword
    2. static methods cant call it using instance  or refernce
    3. we can call static methods by direct calss name / class name
    4. 'this' pointer is global
*/

class car {
    constructor(title,company,type, color){
        this.title = title;
        this.company =company ;
        this.type =type;
        this.color= color;

    }
    getcarname(){
        return `car name is ${this.title}`
    }
    static getcarcolor(){
        document.writeln(`car color is ${this.color}`)
    }
}

let x = new car("thar", "mahindra", "suv", "red")

document.writeln(`<h3> ${x.getcarname()}</h3>`)

car.getcarcolor();