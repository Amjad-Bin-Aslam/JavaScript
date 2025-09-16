// const num = [1,2,3,4,5,6]

// // const initalValue = 0
// const sumWithInitialValue = num.reduce(
//     (acc , currVal) => acc + currVal,
//     // initalValue
// )

// console.log(sumWithInitialValue) 

const shoppingCart = [
    {
        name: "watch",
        price: 500
    },
    {
        name: "wallet",
        price: 100
    },
    {
        name: "perfume",
        price: 1000
    }
]

const total = shoppingCart.reduce((acc , item) => {
    return acc + item.price
} ,0)

console.log(total)