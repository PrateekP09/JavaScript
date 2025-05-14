// class 

// grp or collection of objects (state and behaviours)

// state = properties, behaviours = methods


class user {
    constructor(){
        this.name = "john",
        this.age = 22,
        this.city ="bengaluru";
        this.isAdmin =false;
    }

    getusername(){
        document.writeln(`<h1> username is  ${this.name}</h1>`)
    }
}

let  x = new user()
x.getusername()

document.writeln(`<h2> age is ${this.age}</h2>`)
document.writeln(`<h2> city is ${this.city}</h2>`)