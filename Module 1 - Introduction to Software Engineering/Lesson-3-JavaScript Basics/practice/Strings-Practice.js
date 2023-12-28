// Turn the following string into all lowercase letters
const noCaps = 'This Should Not Have Capital Letters!'

console.log(noCaps.toLowerCase())

// Turn the following string into all uppercase letters
const loud = "i'm very loud!";

console.log(loud.toUpperCase())

// Join the prior two variables together.
 
console.log( noCaps.concat(loud))

// Turn the following string into an array of names
const stringOfNames = 'Ally Becca Carlos Drake Edgar Felicity Greta Hector';
const stringarr = stringOfNames.split(' ')
console.log(stringarr)

// Make your own mad-libs using a template literal

food1 = "frenchfry"
candy = "gummybears" 

const favoritefood = `My Favorite Foods are ${food1}. I also enjoy eating ${candy}`
console.log(favoritefood)

// Given the name Tony Stark, get his initials
const ironMan = "Tony Stark"
const initials = ironMan[0] + ironMan[5]
console.log(initials)

// Given the string "Hey now, you're an all-star!" get the string, "all-star" and save it to a new variable
const string = "Hey now, you're an all-star!"
const allstar = string.slice(19,27)
console.log(allstar)
// Using the string "How are you?" extract the question mark.
const string1 = "How are you?" 
const questionmark = string1.[string1.length - 1]
console.log(questionmark)

// Given the following variables, add them together to get 15 
const ten = "10";
const five = "5";

console.log(parseInt(10)) + (parseInt(5))

// Given the following sentence, turn it into an array.

const sentence = 'Welcome to the jungle!'; 
const stringarr1 = sentence.split(' ')
console.log(stringarr1)