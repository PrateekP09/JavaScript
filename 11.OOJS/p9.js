let user ={}

Object.defineProperties(user,{
    name: {
        value: "mike",
        writable: true
    },
    email:{
        value:"mike@gmail.com",
        writable:true
    },
    city: {
        value: "Manglore",
        writable: false
    },
    getName: {
        value: function(){
            return `<h1> name is ${this.name}</h1>`
        }
    },
    getEmail:{
        value: () => {
            // inside the arrow function this pointer return undefined 
            document.writeln(`<h1> email id is =${this.email}</h1>`)
        }
    }
})

console.log(`user =`,user)

// to avoid runtime errors (exception)
try{
    user.name = "sam"
    user.email = "sam@gmail.com"
    user.city= "bengaluru"
}catch (error){
    console.log(error)
}

console.log(`after=`, user)