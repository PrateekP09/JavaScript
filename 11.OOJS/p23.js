class product {
    constructor(a,b){
        this.a =a;
        this.b =b;
    }

    static calculate(obj){
        console.log(`obj =`, obj)
        document.writeln(`<h1> product = ${obj.a* obj.b}</h1>`)
    }
}

let x = new product(10, 5)
product.calculate(x)