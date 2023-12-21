// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
for(i = 0; i < 30; i += 1){
    console.log(i)
}


// 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index

for(j = 1; j < 10; j += 2){
    console.log(j)
}

// 3. Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.

const celebrity = ["Zendaya Maree", "Jenna Ortega", "Ethan Cutkosky", "Jeremy Allen White", "Quinta Brunson" ]
for(let i = 0; i < celebrity.length; i++){
    console.log(celebrity[i])
}
// 4. Loop over your celebrity list and 
// // If a celebrity's full name has an even number of characters log it to the console

for(let i = 0; i < celebrity.length; i++){
    if(celebrity[i] % 2 === 0)
    console.log(celebrity[i])
}

// 5. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only first names
const first = []
for(let i = 0; i < celebrity.length; i ++){
const names = celebrity[i].split(' ')
    first.push(names[0])

}
console.log(first)
// 6. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only last names
const last = []
for(let i = 0; i < celebrity.length; i ++){
const names1 = celebrity[i].split(' ')
    last.push(names1[1])

}
console.log(last)


// 7. Loop over the celebrity list and then loop through each name. 
// // If a letter is a vowel, log it to the console

for(let i = 0; i < celebrity.length; i ++){
    let  vowel = celebrity[i]
if(vowel === 'a' || vowel === 'e' || vowel === 'i'|| vowel === 'o' || vowel === 'u'){

}
}
console.log(celebrity[i])


// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console

for(let i = 0; i < celebrity.length; i ++){
for(let j = 0; j < celebrity.length; j ++){
    if(celebrity[i][j] === celebrity[i][j].toUpperCase())
    console.log(celebrity[i][j])
}
}



// // 9. Convert your celebrity array to all caps and no spaces:
// //  Ex:
// // // Input:  ['Martha Stewart', 'David Beckham', etc..] 
// // // Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
const allcapnames = celebrity.map(name  => name.toUpperCase())
console.log(allcapnames)

// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

const favoriteceleb = "Jeremy Allen White"
let favceleb = null
for(i = 0; i < celebrity.length; i ++){
   if(celebrity[i] === favoriteceleb){
    favceleb = celebrity[i];
    break;
   }
}
console.log(favoriteceleb)
//BONUS:
// // Write a loop that iterates from zero until 30
// // If an index is divisible by 2 log 'fizz'
// // If an index is divisible by 3 log 'buzz'
// // If an index is divisible by both 2 & 3, log 'fizz-buzz'
// // Otherwise print the index to the console
