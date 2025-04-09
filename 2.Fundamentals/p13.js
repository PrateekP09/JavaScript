// Json Array
// JSon (java script object notation)

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

// to convert object to json string 
var out=  JSON.stringify(users)
console.log(`string=`,out)

// to convert back json to object'
console.log(`string=`,JSON.parse(out))



var object =[
    {
    id:1,
    name:"rithwik",
    type:"female"
},
{
    id:2,
    name:"harshit",
    type:"female"

}];
console.log(`users`,JSON.stringify(object))
console.log(`users`,JSON.parse(out))