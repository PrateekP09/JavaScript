// object Inheritance

let u1={
    name: "tom",
    email: "tom@gmail.com"
}

console.log(`u1=`,u1)

let u2= Object.create(u1, {
    age: {
        value: 22
    },
    mobile: {
        value: "9909234587"
    }
})
console.log(`u2=`,u2)