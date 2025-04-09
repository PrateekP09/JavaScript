// object array

var users = [
    {
        id :1,
        name: "john",
        email:"john@gmail.com",
        age:22,
        city: "banglore"
    },
    {
        id: 2,
        name:"tom",
        email:"tom@gmail.com",
        age: 24,
        city:"manglore"
    }
]

console.log(`users=`, users)

users.forEach(function(val,index){
    document.writeln(`<h1> ${val.id} ${val.name}</h1>`)
    document.writeln(`<h1> ${val.email}</h1>`)

})

// array using constructor

var course = new Array()

course[0]={
    id:1,
    title:"javascript",
    type:"frontend"

};

course[1]={
    id:2,
    title:"java",
    type:"backend"
};
console.log(`course=`,course)

//  array using parameter
var bikes= new Array({id:1, title:"hero"},{id:2,title:"tvs"},{id:3,title:"yamaha"})
console.log(`bikes=`,bikes)