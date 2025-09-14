// function myFun(a , b){
//     const c = a + b;
//     console.log(c)
// }


function myFun(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = myFun(2,3)
// console.log('result:' , result)

function fun(username = "zain"){
    return `${username} just logged in`
}

// console.log(fun('amjd')) 


function calculateCartPrice(val1 , val2 ,...num1){
    return num1

}

// console.log(calculateCartPrice(2 , 3 , 5))  


const user = {
    name: "amjad",
    price: 100   
}

function handleObject(anyObject){
    // console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    name: 'zain',
    price: 299
})


const myArr = [200 , 300 , 400]

function newArr(getArray){
    return getArray[0]
}

// console.log(newArr(myArr))

// console.log(newArr([100 , 345 , 6635]))

// console.log(addOne(2))

function addOne(num1){
    return num1 + 1
}

const addTwo = function(num2){
    return num2 + 2
}
// console.log(addTwo(5))

