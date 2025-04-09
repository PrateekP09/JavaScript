// function

/* 
  function is block of prgm or logic executes through call.

  1.function body
  function name(parameters){
                //statements
  }

  // assignment\
    var getname = function(param){
    }


    // arrow function
     var getuser= (param) ->{

     }
  2.call
     value
     through event (event attributes)
     through event listeneers
     through dom


*/
function display(){
    document.writeln("<h1> Welcome to javascript</h1>")

}
display();

// assignment

var getname= function(name){
    document.writeln(`<h3> my name is ${name}</h3>`)
}
getname()// parameter is not defined 
getname("manu")

// arrow func
var getname = (addr)=> {
    document.writeln(`<h3> my home address is ${addr}</h3>`)
}

getname("Nagarbhavi")
    
