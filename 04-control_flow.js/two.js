// /const arr = [1 , 2 , 3, 4 ,5]


// for of loop
// it has a built-in iterator method that ieterate the every element of array
// for (const num of arr) {
    // console.log(num)
// }

// iterator iterate the every character of string
// const greeting = "salaam"
// for (const greet of greeting) {
    // console.log(greet)
// }

// Map object holds key-value pair and remembers the original insertion order of keys. A key should be unique.
// const map = new Map();
// map.set('PK' , 'Pakistan')
// map.set('USA' , 'United States of America')
// map.set('Fr' , 'France')

// for (const [key , value] of map) {
    // console.log(key , value)
// }
// console.log(map)

// for(const value of map.keys()){
//     // console.log(value)
// }

// const myObject = {
//     js: "Java",
//     cpp: 'c++',
//     rb: 'rubby'
// }

// for (const key in myObject) {
//     // console.log(`${key} shortCut is for ${myObject[key]}`)
// }


// const myArr = [4 , 5 ,67 , 7]

// //for in loop
// for (const key in myArr) {
//     // console.log(myArr[key])
// }

// for each

// coding.forEach((code , index , coding) => {
    //     // console.log(code , index , coding)
    // }); 
    
const coding = ['js' , 'ruby' , 'python' , 'cpp'] 
    
function printme(item){
    // console.log(item)
}

// coding.forEach(printme)


// let name = "amjad"
// let reverseName = name.split('').reverse().join('')
// console.log(reverseName)


const myCoding = [
    {
        name: "amajd",
        grade: "A"
    },
    {
        name: "Zain",
        grade: "A+"
    },
    {
        name: "Ahmad",
        grade: "A"
    },
    {
        name: "Khan",
        grade: "A"
    },
    
]

myCoding.forEach(item => {
    console.log(item.grade)
});


