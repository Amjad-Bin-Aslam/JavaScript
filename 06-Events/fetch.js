// const getUser = async () => {

//     try {
        
//         const response = await fetch("https://api.github.com/users/Amjad-Bin-Aslam")
//         const data = await response.json();
//         console.log(data.followers)

//     } catch (error) {
//         console.log(error)
//     }

// }

// getUser()


fetch("https://api.github.com/users/Amjad-Bin-Aslam")
.then((response)=> {
    return response.json()
})
.then((data)=> {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})

 