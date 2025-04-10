// Non parameter non return

function getName() {
    var name = prompt("Enter your name?");
    document.writeln(`<h3>my name is ${name}</h3>`)
}

// Non parameter return

function sum(){
    let x=prompt("enter your input x?")
    let y=prompt("enter your input y?")

    return Number(x) + Number(y)
}

document.writeln(`<h3> sum= ${sum()}</h3>`)