// param in class 

class product {
    constructor(a,b){
        this.x = a;
        this.y = b;
    }

    calculate(){
        return this.x * this.y;
    }
}

let p = new product(10,30)
document.writeln(`<h1> product =${p.calculate()}</h1>`)

 p = new product(65,2)
document.writeln(`<h1> product =${p.calculate()}</h1>`)

 p = new product(12,2)
document.writeln(`<h1> product =${p.calculate()}</h1>`)