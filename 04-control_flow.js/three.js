// forEach does not return the value
// it just runs the code for each element


// filter return the value
// it builds a new array for for the element that fullfil the condition and retunr the new array. 
// it builds a new array for for the element that fullfil the condition and retunr the new array. Does not modify the original array

// const nums = [1 , 2 , 3 , 4 , 5 , 6 ,7 ,8 ,9]

// const myNums = nums.filter((num) => {
//     return num > 4
// })

// console.log(myNums)



// map transform each element and retur the new array

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNumbers.map((num) => {
//     return num > 5
// })

const newNum = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .map((num) => num - 2)
                    .filter(num => num > 50)

console.log(newNum)
