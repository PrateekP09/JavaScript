// Object.defineProperties(obj,{})
let product ={}

console.log(`product= `,product)

Object.defineProperties(product,{
    id:{
        value:1
    },
    title: {
        value: "vivo v30"
    },
    category:{
        value: "mobile"
    },
    price:{
        value: 12345
    }
})

console.log(`product =`, product)