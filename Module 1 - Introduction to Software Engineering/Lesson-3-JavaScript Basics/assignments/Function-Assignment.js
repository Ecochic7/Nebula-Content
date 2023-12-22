// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// // Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
// const numarray = [ 1,2,3,4,5,6,7,8]
// function array (namesarray){
//     for(let i = 0; i < numarray.length; i++)

function numarray(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + 2){
           console.log(arr[i])
        }
    }
  }
numarray([1,2,3,4,5,6,7,8])
// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// // Example string = "happy birthday", letter = "a", should return true
// // Example string = "happy birthday", letter = "q" should return false
const Examplestring = "happy birthday", letter = "a"
function containslettter (Examplestring){
    return Examplestring.includes(letter)

}console.log(Examplestring)
// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
const array = ["Tom Smith", "Bob Jones", "Bill Williams"]
function firstName(array){
    return array.map(array.split(' ')[0])
}console.log(array)
// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"

// 5. Write a function that takes in the year someone was born and returns their age.
// // Example: birth year: 2000 returns 23
