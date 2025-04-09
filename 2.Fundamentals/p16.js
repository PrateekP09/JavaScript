/* 
 parameter
 return

 1.parameter return type func
 2.parameter non return
 3. non-parameter return type
 4. non-paarmeter non return type



*/
function user(name,email){
    return `name is ${name} and email is${email}`;

}

var res= user("tom","tom@gmail.com")
document.writeln(`<h3>${res}</h3>`)

//  2.parameter non return

function course(title,duration){
    document.writeln(`<h4>course title ${title}, duration${duration}</h4>`)
}

course("java",2.5)