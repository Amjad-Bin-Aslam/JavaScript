const name = " amjad"
const repoCount  = 20



// string concatenation
// console.log(name + repoCount + "value")

// string interpolation
// console.log(`salaam, My name is ${name} and my repocount is ${repoCount}`) 

// const gameName = new String('zain')

// console.log(typeof gameName)
// console.log(gameName[0])
// console.log(gameName.length) 
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('n'))

const url = "https://amjad.com/amjad%20aslam"

const replaceMe = url.replace('%20' , '-')
console.log(replaceMe)
