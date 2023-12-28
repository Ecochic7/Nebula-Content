// 1. Write a function that takes in 1 number and returns that number + 1
function multiplyNumBy (num1){
    console.log(num1)
    return num1 + 1
    
}
console.log(multiplyNumBy(5))
// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function name1 (person){
  return(`have a goodnight ${person}`)
}
console.log(name1('Smith'))
// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
function checkforzero (arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            console.log(' The array contains a number ZERO!!')
            break;
        }
    }
  }
checkforzero([2,5,9,0,8,66,55,49])
// 4. Write a function that console logs 'hello world' 10 times to the console. 
function Greeting(){
    for(let i = 0; i < 10; i++){
        console.log('hello world')
    }  
   
}
Greeting()
// 5. Write the prior function utilizing a 'fat arrow' function
const favoritefood = () => [
    console.log("PIZZA!")
]
favoritefood()