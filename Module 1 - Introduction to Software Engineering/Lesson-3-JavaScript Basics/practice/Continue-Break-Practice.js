// 1. Write a for loop that looks for the letter a
// // The loop should log the letter 'a' to the console
// // STOP immediately after finding the letter 'a'

const string = "This is a String"
let i = 0
while(i < string.length){
    if(string[i].toLocaleLowerCase() === 'a')
    console.log(`we found "A"`)
break;
i++
}
   
// 2. Write a for loop that looks for a number
// // The loop should log 'at index _ there is the number _' to the console 
// // Stop immediately after finding that number
// // // ex: Input: ['a','b','c', 100,'e']
// // // Output: 'at index 3 there is the number 100'
const num = ['a','b','c', 100,'e']
for(let i = 0; i < num.length; i++)
if(typeof(num[i] )=== 'number'){
    console.log(`at the index ${i} there is the number ${num[i]}`)
    break;
}

// 3. Using the continue keyword loop over an array of numbers & strings
// // If the current element is a number skip it
// // Otherwise add the element to an array
// // After finishing the loop log the new array to the console

const arrofnumsandstrings = [12, 27, "car", "dog",5,8,"a"]
const arrofstrings = []
for(let i = 0; i < arrofnumsandstrings.length; i++){
if(typeof(arrofnumsandstrings[i]) === 'number'){
    continue
}
arrofstrings.push(arrofnumsandstrings[i])
}
console.log(arrofstrings)