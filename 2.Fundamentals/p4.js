// Non-primitives (array, obj, entry, map, set)
// 1d, json, obj array
// destructure is the way of passing the data to console and to find prototype of datatype, applicable only to non-primitive
// iteration is the process of accessing the ele one by one 
// datatype of non primitive represnts as obj
var users=["john","tom","harry","mary"]
console.log("users",users)
console.log("users",typeof users)// datatype of array represents array as obj, prototypes of array is array only(whereverr group exists prototype exists)
console.log("users",users.length)

document.writeln(`<h1> users =${users}</h1>`)
document.writeln(`<h1> users =${users[3]}</h1>`) // {users[3]}- defines the index value in array to represent
console.log('\n')

