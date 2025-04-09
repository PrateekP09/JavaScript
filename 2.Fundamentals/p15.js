// func call by event

function printname(name){
    document.writeln(`<h3>my name is ${name}</h3>`)
}


var btnEl= document.getElementById("btn")
// event listener
// dom_element.addEventListener(event,function(event.reference))

btnEl.addEventListener("click",function(event){
     var name= "john"
     document.writeln(`<h3> my name is ${name}</h3>`)
});

// using dom elements

var loginEl= document.getElementById("login")

// dom_element.event = function(event){}
loginEl.onclick= function(event){
    alert(`login success`)
}