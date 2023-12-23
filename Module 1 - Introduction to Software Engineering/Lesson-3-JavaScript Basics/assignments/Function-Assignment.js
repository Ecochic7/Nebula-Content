// 1. Write a function that takes in an array of numbers and returns a new array containing the numbers with one added to each
// // Example you pass in the following array [1, 2, 3] the function should return [2, 3, 4]
// const numarray = [ 1,2,3,4,5,6,7,8]
// function array (namesarray){
//     for(let i = 0; i < numarray.length; i++)

function numarray(arr){
    const newarr = []
    for(let i = 0; i < arr.length; i++){
        arr.push(arr[i] + 1){
           
        }
    }return newarr
  }
console.log(numarray([1,2,3,4,5,6,7,8]))
// 2. Write a function that takes in a string, and a letter, and returns true or false if the string contains the letter.
// // Example string = "happy birthday", letter = "a", should return true
// // Example string = "happy birthday", letter = "q" should return false

function containslettter (Examplestring,letter){
    for(let i = 0; i < Examplestring.length; i++){
        if(Examplestring[i] === letter){
            return true
        }
return false
    }
   

}console.log(containsletter( "happy birthday","a"))
// 3. Write a function that takes in an array of full names (formatted "firstName lastName"), and returns a new array containing only first names.
// // Example array = ["Tom Smith", "Bob Jones", "Bill Williams"] returns ["Tom", "Bob", "Bill"]
function firstName(array){
    const newarray = []
    for(let i = 0; i < array.length; i++)
    return array.map(array.split(' ')[0])
}firstName(["Tom Smith", "Bob Jones", "Bill Williams"])
// 4. Write a function that takes in a name and a greeting and logs a string greeting the person to the console.
// // Example name = "John Boy" greeting = Goodnight, returns "Goodnight John Boy"
function sayGreeting(name,greeting){
    return ${greeting} $(name)
}console.log(sayGreeting("John","Hello"))
// 5. Write a function that takes in the year someone was born and returns their age.
// // Example: birth year: 2000 returns 23
function howold(birthyear){
    const year = new Date().getFullYear
return year - birthyear
}
howold(2000)