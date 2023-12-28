// Given the following list:
// Change the element at index zero to equal itself times 10 
let numArr = [1,2,3,4,5];
numArr[0] *= 10
console.log(numArr)

// Add an additional element to the prior array
numArr.push(13)
console.log(numArr)
// In one line, remove the last element from the prior array and set that element to a variable called 'removedItem'
const removedItem = [10,2,3,4,5,1,13]
removedItem.pop()
console.log(removedItem)


// Check if the prior array contains the number 1
//   If it does, log true, if it doesn't, log false
const isThere = numArr.indexOf(1)
console.log(isThere)
if(numArr[isThere]){
    console.log(true)
} else{
    console.log(false)
}


// Remove the first element from the prior array and set that element to a variable called 'removedFirstItem'
const removedFirstItem = [10,2,3,4,5]
removedFirstItem.shift()
console.log(removedFirstItem)

// Add that item back
removedFirstItem.unshift(10)
console.log(removedFirstItem)

// Given the following array, sort it using an array method
let sortThis = ["dairy", "banana", "cherry", "apple", "eel"];
sortThis.sort()
console.log(sortThis)


// Now reverse the prior array
sortThis.reverse()
console.log(sortThis)

// Write a string stating your favorite 3 foods. 
//  Ex: 'My favorite foods are za, pineapple, hawaiian-pizza'
const Favorite = `My Favorite food are Pizza, Chinese, CarribeanFood, Italian"`

// Convert the prior string into an array of words (don't worry about where punctuation lands). 
//  Ex: ['My', 'favorite', 'foods', 'are', 'za,', 'pineapple,', 'hawaiian-pizza']
//const Favorite1 = [`My Favorite foods are Pizza, Chinese, CarribeanFood, Italian`]
//console.log(Favorite1.splice(''))
const Favoritearr = Favorite.split(` `)
console.log(Favoritearr)
// Convert the output from the prior example back into a string, but with dashes between the words. 
//  Ex: 'My-favorite-foods-are,-za,-pineapple,-hawaiian-pizza'

const Favoritearrr = Favoritearr.join("-")
console.log(Favoritearrr)

// Given the following array: [1,2,3,4,5,7,8,9,10]
// insert the number 6 into its logical location

//const arr1 = [1,2,3,4,5,7,8,9,10]


// Create two arrays and, using JavaScript join them together



// Create a multi-dimensional array


