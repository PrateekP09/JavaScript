/* array */
/* 

Group of values

types

1.single array
    a.literal
    b. array using constructor
    c. array using parameter
2. object array
   - group of objects
    a.literal
    b. array using constructor
    c. array using parameter
3. JSON Array(server response)

*/

// single array
var users=["john", "tom", "harry", "jerry"]
console.log("array=",users)
console.log("2nd user=",users[2])

document.writeln(`<h3> users = ${users}</h3>`)
document.writeln(`<h3> users = ${users[3]}</h3>`)

// loop iteration
let i=0;
while(i<users.length){
    document.writeln(`<p> users= ${users[i]}</p>`)
    i++;
}

// array.foreach(function(val,index){}); // array iterator
users.forEach(function(val,index){
    document.writeln(`<h5>${index} ${val}</h5>`)

});

// single => array using cnstructor (assignment)
var color= new Array();
color[0]="red";
color[1]="white";
color[2]="black";
color[3]="green";
color[4]="orange";
console.log(`colors=`, color)

// using for loop
for(let i=0;i<color.length;i++){
    document.writeln(`<h5> ${i} ${color[i]}/h5>`)
}
document.writeln("<hr/>")


// single => array using constructor(parameter)
var cars= new Array("Toyota Innova", "Mahindra thar","i20")
console.log(`cars=`, cars)

// using for in loop = for(let index in array) (it carries the index )
for(let index in cars){
    document.writeln(`<h5> ${index} ${cars[index]}/h5>`)
}
document.writeln("<hr/>")

// using for of loop
for(let val of cars){
    document.writeln(`<h5> ${val}/h5>`)
}
document.writeln("<hr/>")

// array.map(function(val,index)){(return)}

let out= users.man(function(val,index){
   return `mr/Miss${val}`
})
color.log(``)