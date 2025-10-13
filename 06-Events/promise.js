// const promise1 = new Promise((resolve,reject)=>{
//     // do an async call
//     // DB call, cryptograpy, network call
//     setTimeout(()=>{
//         console.log("Task is completed")
//         resolve();
//     }, 1000)
// })



// promise1.then(()=>{
//     console.log("Promise Consumed.");  
// })


// new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Task 2 completed.");
//         res();
//     },1000)
// }).then(()=>{
//     console.log("Task 2 consumed.")
// }) 


// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({username: "amjad", email: "amjad@gmail.com"})
//     }, 1000);
// })

// promise3.then((user)=>{
//     console.log(user.email)
// })


// const promise4 = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         let err = false;
//         if(!err){
//             resolve({ name: "Zain", pass: "123" })
//         }else{
//             reject("ERROR: Something went wrong.")
//         }
//     }, 1000);
// })

// promise4
// .then((user)=>{
//     console.log(user)
//     return user.name
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err) 
// })
// .finally(()=>{
//     console.log("Promise is either resolved or rejected.")
// })


const promise5 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let err = false;
        if(!err){
            resolve({name: "Amjad", pass: "123"})
        }else{
            reject("ERORR: Something went wrong.")
        }
    }, 1000);
})



const five = async ()=>{
     try {
        const response = await promise5;
        console.log(response)
     } catch (error) {
        console.log(error)
     }
}
five()



const getAllUser = async () => {
    try {
        const response = await fetch("https://api.github.com/users/Amjad-Bin-Aslam")
        const data = await response.json()
        console.log(data.login)
    } catch (error) {
        console.log("E:", error)
    }

}
getAllUser();
 

// fetch("https://api.github.com/users/Amjad-Bin-Aslam")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data.login)
// })
// .catch((err)=>{
//     console.log(err)
// })
