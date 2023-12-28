// Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. Test the function with some numbers.
// Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.
// Define a function called evenNumbers that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the modulus operator to check whether a number is even or not).
// Define a function called reverseWords that takes in a string and returns a string with the order of words reversed.
// has context menu

// function multiplyBy10(num=10){
//     for(i = 0; i < num.length; i++){
//         if(num[i] * 10){
//             return(100)
//         }
//     }

// }
// console.log(multiplyBy10)

function multiplyBy10(num){
    return num * 10
}
console.log(multiplyBy10(10))

function sayGoodbye(name){
    return (`Farwell ${name}`)
}
console.log(sayGoodbye("Tom"))

function 