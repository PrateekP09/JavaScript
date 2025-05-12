// Object.entries()

let car ={
    title: "jeep",
    company: "Mahindra",
    color: "red",
    year: 2025
}

console.log(`car =`, car)
let out = Object.entries(car); // array of array[key,value]
console.log(`entries =`,out)

//Object.fromEntries()

let out1= Object.fromEntries(out)
console.log(`object =`, out1)