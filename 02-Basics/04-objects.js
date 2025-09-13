// singleton or constructor
// const user =  new Object();


const user = {}

user.id = "1234"
user.name = 'saim'


// console.log(user)


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {...obj1 , ...obj2}
const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3)

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1)) 

// console.log(user.hasOwnProperty('name'))

const course = {
    name: "js",
    price: "99",
    teacher: 'hitesh'
}

const {teacher} = course

console.log(teacher)