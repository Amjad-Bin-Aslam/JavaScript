// JavaScript is dynamically typed
// because the type of variable is determined at runtime


// # Primitve data type..............

// 7 types: string , number  , BigInt , Boolean , null ,  undefined , symbol(used for unique value)

// in primitive we get the copy not the original value so any change 


// # Reference (Non primitive)

// types: Objects , Array , function

// change occurs in their original value because we are getting their reference not copy of their value

const id = Symbol("123")
// console.log(id)
const anotherId = Symbol("123")
// console.log(anotherId)
// console.log(id === anotherId) 

let a = 10
let b = a
b = 20
// console.log(a , b)


let obj1 = {name: "zain"}
let obj2 = obj1
obj2.name = "Bablu"
console.log(obj1.name)

// console.log(typeof(null)) 
