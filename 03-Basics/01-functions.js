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

console.log(fun('amjd'))
