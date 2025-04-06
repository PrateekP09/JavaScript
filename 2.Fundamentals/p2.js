// variables

/*
    var - global scope
    let - local scope
    const
 */
    // var can be re declared with new variable and new memory is created
    var x=45;
    console.log("x="+x)

    var x=55;
    console.log("x="+x)

    // let cannot be re-declared with new let , but can be re-assigned directly using var name
    let y=55;
    console.log("y="+y)
    
    y=60;
    console.log("y="+y)

    // const cannot be re-assigned again, once declared same const value for overall code(applicable only for primitive)
    const z =70;
    console.log("z="+z)

    // z=50;  re assign error
    // console.log("z="+)
