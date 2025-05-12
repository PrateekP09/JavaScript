let user ={}

Object.defineProperty(user,"name",{
    value: "harry",
    writeable: true
})

console.log(`user =`, user)

// re assign the value
user.name = "Tom"

/* 
    Writeable => true = re-assign another value to / re write 
                 false = disabled the re assign
*/

console.log(`after user=`, user)