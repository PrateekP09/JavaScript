// class inheritance

class Superclass {
    constructor(){
        this.name ="Harry"
    }
}

class Baseclass extends Superclass{
    constructor(){
        super()  // represents super class constructor
    }
}

let x = new Baseclass();
console.log(`name=`, x.name)