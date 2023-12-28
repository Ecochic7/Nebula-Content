// Declare an empty array
const empty = [""]

// Declare an array with all the data types you can think of within it
const datatype = ["20",7,"Hello", 20 ,[1,2,3], true, null, undefined,{}]

// Make a list of classmates names first names in an array
// Get the length of that previous array
const classmates = ["Cristain", "Konatee", "David", "Tashika"]
console.log(classmates.length)
// Check the type of the previous array

console.log(typeof(classmates))
// Check if the previous array is an array
console.log(Array.isArray(classmates))
// Using indexing, grab your name from that previous array
console.log(classmates[3])
// Use the following variable to get the student at the index from the array of students
let index = 2 
console.log(classmates[index])


// Update the array to have each element as a students first and last name : 'firstName lastName'

classmates[2] += "Curtis"
classmates[0] += "Barahona"
classmates[1] += "Morris"
console.log(classmates)