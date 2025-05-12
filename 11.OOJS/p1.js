/* 
    1.Object
      Object Constructor
      Object Constructor methods
      Inheritance
      Inheritance chain
              __ proto__ keyword
      
    2.Constructor
      custom constructors
      Types
      Constructor
      Prototype

    3.class 
      Types
      OOPS concepts
    4.Promise Constructor
      AJAX call
      REST API Call
    5.Map Constructor - entries
    6.Set Constructor
    7.Properties    

*/

var user ={
    name: "john",
    email:"john@gmail.com",
    age:22,
    isAdmin: false,
    hobbies:["riding","cycling","driving"],
    city:"bengaluru",
    getName: function(){
        document.writeln(`<h1> user name is ${this.name}</h1>`)
    },
    getcity: ()=> {
        // this keyword is not functional
        return "city name is" + this.city;
    }
}

user.getName()
document.writeln(`<h3> email is =${user.email}</h3>`)
document.writeln(`<h3> age is =${user.age}</h3>`)// object.key
document.writeln(`<h3>isAdmin is =${user["isAdmin"]}</h3>`) //object

document.writeln(`<h3> ${user.getcity()} </h3>`)

user.hobbies.forEach(function(item){
    document.writeln(`<h4> ${item}</h4>`)
})

console.log(`user =`,user)
document.writeln(`${user}`)// [object Object]