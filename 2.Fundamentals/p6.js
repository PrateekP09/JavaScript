// operators 
/* 
1. arithmetic ( +, -, *, /, %)
2. logical ( && || !)
3.Relational / conditional ( <, > , >=, <=, ==, ===, !==)
4.assignment( =, +=, -=, *=, /=, %=)
5. increment & decrement
    pre - ++i --i
    post - i++ i--
6. ternary = (condition ? true: false)
7. others = () [] {} '' "" `` $ ^ @ # : ; , . \
*/

let x= 40;
let y=45.8;
let a="123456.556"

console.log("sum=",x+y)

console.log("sum=", x+a)// adding integer with string makes concatenation(40+123456.556 = 40123456.556)
console.log("diff=", y-x)
console.log("mul",x*y)
console.log("quotient",x/y)
console.log("remainder",x%y)
console.log(`\n`)

let r1= 20 > 30
let r2= 44 > 10

console.log("and =", r1 && r2)
console.log("or =", r1 || r2)
console.log("not =", !r1)
console.log(`\n`)

let a1="344";
let a2=344;
let a3=344;

console.log("equal to=",a2==a3)
console.log("equal to=",a1==a3)

console.log("strictly equal to=",a1===a3)

console.log(`\n`)

let p=23;
console.log("p=",p)// op 23

p+=40;
console.log("p=",p)// op 63

p-=10;
console.log("p=",p)// op 53

p*=5
console.log("p=",p)

p/=5;
console.log("p=",p)

p%=5;
console.log("p=",p)

console.log(`\n`)

let f=33;

console.log("++i =",++f)//pre incre
console.log("--i =",--f)// pre decre

let g=44
console.log("ï++=",g++)
console.log("ï--=",g--)

console.log(`\n`)

let res1= 10 > 4? "hi rithwik" : "Invalid Condition"
console.log("res1 =", res1)

let res2= 10 < 4? "invalid" : "Java Script Operators"
console.log("res2 =", res2)