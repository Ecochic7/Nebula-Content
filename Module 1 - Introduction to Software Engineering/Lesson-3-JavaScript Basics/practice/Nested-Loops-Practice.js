// 1. Given an array of strings
// // Loop over the array of strings
// // And loop over each string.
// // If a word has the letter "a" in it, log it to the console
    const names = ['Bill', 'Jordan', 'Pete', 'Daniel']

for(let i = 0; i < names.length; i++){

const name = names[i]
// console.log(names[i])
for(let j = 0; j < name.length; j++){
    // console.log(name[j])
    if(name[j] === 'a'){
        console.log(name)
    }
}
}
// 2. Given an array of strings
// // Loop over the array
// // And loop over each string.
// // Create a new array of strings where every other letter in each string is capitalized 
// // // Ex: ['This','is','an','array','of','strings'] => ['ThIs','Is','An','ArRaY','Of','StRiNgS']
    const stringArray = ['This','is','an','array','of','strings']
const newarr = []
for(let i = 0; i < stringArray.length; i++){
    let strings = stringArray[i]
     for(let j = 0; j < strings.length; j++){
     if(strings[j].toUpperCase() )
     console.log(strings[j])
     }
}
//     const strings = stringArray[i]
// // console.log(stringArray[i])
//     for(let j = 0; j < strings.length; j++){
//         if(strings[j] += stringArray[i] )
//     console.log(strings[j])

//     }
// }

// 3. Given an array of arrays of numbers (nested array)
// // Add all the inner values up and push them into a single array
// // // Example: [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]] => [12, 85, 83, 66, 77]
    const arrayOfArrays = [[5, 4, 3], [20, 15, 50], [20, 13, 50], [21, 35, 10], [25, 21, 31]]
    const inner = []
    for(let i = 0; i < arrayOfArrays.length; i++){
        let sum = 0
        
console.log()
    }

    