

const user = {
    username: "amjad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = 'hi'
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

// const add = function(){
//     console.log(2)
// }
// add() 


// const addTwo = (num1 , num2) =>  num1 + num2
const addTwo = (num1 , num2) =>  ({name: "amjad"})


// console.log(addTwo(2 , 4))

