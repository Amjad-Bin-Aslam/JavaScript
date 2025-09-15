(function chai(){
    console.log('DB')
})();

( () => {
    console.log("DB 2")
} )() 


let val1 = 10 
let val2 = 5
function addNum(num1 , num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1 , val2)
console.log(result1)
let result2 = addNum(10 , 2)
console.log(result2)

