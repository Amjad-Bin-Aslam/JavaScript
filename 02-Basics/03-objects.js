// singleton or constructor method
// Object.create()

// object literals\
 
const mySym = Symbol("hlo")

const user = {
    name: "amjad",
    "full name": "Zain-ul-Abadin",
    age: 18,
    location: "lahore",
    email: "amjadbinaslam604@gmail.com",
    [mySym]: 'hlo'

}

// console.log(user.email)
// console.log(user["email"])

// console.log(user["full name"])
// console.log(user[mySym])

// console.log(user)

user.greeting = function(){
    console.log("hello js user")
}

user.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`)
}

console.log(user.greeting())
console.log(user.greetingTwo())

// console.log(user)

