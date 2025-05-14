let u1 ={
    name: "sam",
    email:" sam@gmail.com"
}

let u2= {
    age:22,
    mobile: "99008765432",
    __proto__:u1
}

let u3 ={
    city:"bengaluru",
    zip: "560091",
    __proto__:u2
}

let u4 ={
    state: "Karnataka",
    country: "india",
    __proto__:u3
}

console.log(`u4=`,u4)