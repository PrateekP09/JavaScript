// object 
//obj is grp of key and value pairs
// basic js is called vanilla js

// library has pre written code

var car={
    //key:value(this is called one property)
    title: "Mahindra Thar",
    make:2025,
    color:"red",
    fwd: false,
    rwd: true,
    body:["base","hardtop","softtop","topend"],
    extra:{
        fuel:"diesel"
    }

}
console.log("car=",car)// protoype=object
console.log("car=", typeof car)

document.writeln(`car = ${car}`)// cant destructure obj

document.writeln(`<h3> title= ${car.title}</h3>`)
document.writeln(`<h3> make= ${car.make}</h3>`)// object key
document.writeln(`<h3> color= ${car.color}</h3>`)


document.writeln(`<h3> fwd= ${car['fwd']}</h3>`)// object['key']
document.writeln(`<h3> fuel= ${car.extra.fuel}</h3>`)
