// prototype keyword
// used to add properties to the constructor externally

function car(){

}

// constructor.prototype.property = value;

car.prototype.title = "Innova";
car.prototype.color ="white";
car.prototype.year = 2024;

car.prototype.getcarinfo =function(){
    document.writeln(`<h1> car is ${this.title}, color is ${this.color} 
        and year is ${this.year}</h1>`)
}

let x= new car();
x.getcarinfo()

console.log(`title =`, x.title)
console.log(`color =`, x.color)
console.log(`year =`, x.year)