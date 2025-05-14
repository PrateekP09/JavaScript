// constructors
/* 
    1.it follows a function 
    2.name of constructor first letter is uppercase
    3. parameter and  non parameter constructor
    4. no return type
    5. every property of constructor create using "this" keyword
    6. we access property of constructor by ref/instance using new keyword

    function constructor(params){
    this.property =value;
    }

    let ref = new constructor(params)
    ref.property
*/

function user(){
    this.name = "john";
    this.email = "john@gmail.com";
    this.mobile = "9988776653";
    this.age= 22;
    this.hobbies = ["riding", "driving"],
    this.account = {
        banknam : "SBI",
        accno: 123453
    };
    this.city ="bengaluru";
    this.getuser = function(){
        return "user name is "+ this.name;
    };
    this.getEmail =() => {
        document.writeln(`<h3> user email =${this.email}</h3>`)
    }
}

let x = new user();
console.log(`object/ref/instance=`, x)

document.writeln(`<h3> ${x.getuser()}</h3>`)
x.getEmail()
document.writeln(`<h3> mobile =${x.mobile}</h3>`)
document.writeln(`<h3> age =${x.age}</h3>`)
document.writeln(`<h3> bank= ${x.account.bankname}</h3>`)
document.writeln(`<h3> account= ${x.account.accno}</h3>`)
document.writeln(`<h3> city= ${x.city}</h3>`)

x.hobbies.foreach((item) =>{
    document.writeln(`<h3> ${item}</h3>`)
}) 