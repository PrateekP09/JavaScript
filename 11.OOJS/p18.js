// prototype keyword
// used to create properties for constructor from outside

function car(){
    this.title = "jeep";
}

// constructor.prototype.property = value;
car.prototype.color= "red";

let x= new car()
console.log(`x =`,x)

document.writeln(`<h3> car title is ${x.title}</h3>`)
document.writeln(`<h3> car color is ${x.color}</h3>`)