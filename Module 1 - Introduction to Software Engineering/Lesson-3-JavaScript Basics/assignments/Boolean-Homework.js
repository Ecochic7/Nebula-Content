//1. Write a statement that checks if 2 and 'two' are equal

console.log(2 === 'two')
//2. Write a statement that checks if '2' and 2 are loosely equal

console.log(2 == "2")
//3. Write a statement that checks if 14 and '14' are strictly equal

console.log(14 === "14")
//4. Write a statement that checks if 10 is greater than -100

console.log(10 > -100)
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4

console.log(4 === Math.round(4.4))
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up

console.log(10 >= Math.ceil(9.1))

//7. Write a statement that checks if 10 is greater than 2 and 3 is greater than 4

console.log(10 > 2 && 3 > 4)
// // 7.a Without changing any of the numbers, or their order. How do we make this print true?

console.log(10 != 2 && 3 != 4)


//8. Pick a number between 1-20 and assign it to a variable
const fruit = "Watermelons"
console.log(fruit)
const howmany = Math.random() * 20
console.log(howmany)
// // This is the number of watermelons you purchased.
// // If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
// // If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
// // If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
// // If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
// // If your number of watermelons is more than 15, print 'Did you have a coupon?'

if(howmany === 1 || howmany === 2){
  console.log ('Looks like you like watermelon')
}
else if(howmany > 2){
    console.log ('Thats a lot of watermelon')
}
else if(howmany > 5){
    console.log ('Thats too many watermelon!')
}
else if(howmany > 10){
    console.log ('You must be CRAZY for watermelon!')
}
else {
    console.log ('Did you have a coupon?')
}
//   if(numOfWM === 1 || numOfWM ===  2) {
//     console.log('Looks like you like watermelon')
//   } else if (numOfWM > 2 && numOfWM <= 5) {
//     console.log('Thats a lot of watermelon')
//   } else if (numOfWM > 5 && numOfWM <= 10){
//     console.log('Thats too many watermelon!')
//   } else if (numOfWM > 10 && numOfWM <= 15) {
//     console.log('You must be CRAZY for watermelon!')
//   } else {
//     console.log('Did you have a coupon?')
//   }

// //9. Create a variable that represents your current hunger on a level of 1-10
//   // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
//   // Otherwise print. "I'm not hungry"
const myHunger = Math.random() * 10
console.log(myHunger)
 let howhungry = myHunger > 6 ? 'Time to eat' : "I'm not hungry"
 console.log(howhungry)
// 10. Think of an Magic-8 Ball
// Write a switch statement that works the same way.
// When you run this file you should
// Generate a random number
// And get an out put from your switch statement?
// Ex:
// I update a question variable to say "Will I win the lottery?"
// I run node <FILENAME>
// The console prints out:
// Will I win the lottery? Not Likely.
const Magic8 = "Magic-8 Ball"
const lottery = Math.ceil(Math.random() * 8)
console.log(lottery)
switch(lottery){
    case 1:
        console.log(`${Magic8} Will I will the lottery? Not Likely`);
        break;
    case 2:
        console.log(`${Magic8} Will I will the lottery? Not Likely`);
        break;
     case 3:
        console.log(`${Magic8} Will I will the lottery? Not Likely`);
        break;
    case 4:
        console.log(`${Magic8} Will I will the lottery? Not Likely`);
        break;
    case 5:
        console.log(`${Magic8} Will I will the lottery? Not Likely`);
        break;
     case 6:
        console.log(`${Magic8} Will I will the lottery? Not Likely`);
        break;
    case 7:
        console.log(`${Magic8} Will I will the lottery? Not Likely`);
        break;
     default:
            console.log(`${Magic8} Will I will the lottery? Yess`);
            
}
// BONUS:
// On the prior example, try and have the answer print like someone is speaking to you.
const tom = "How are You?"
console.log(tom)
switch(tom){
    default:
    console.log(`Tom asked me. ${tom}`)
    

}
// Ex:
//Input:  Will I win the lottery?
//Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you
const input = "Will I win the lottery?"
console.log(input)
switch(input){
default:
    console.log(`I asked a friend ${input} and they answered Will you win the lottery? Not likely.`)
    

}


// Ex2:
// Input: Will I get a new pet this year?
// Output: Will you get a pet this year? It is certain.
const input1 = "Will I get a new pet this year?"
console.log(input1)
switch(input1){
default:
    console.log(`I asked myself should I or  ${input1} I thought about it then I answeed myself I Will get a pet this year? It is certain.`)
    

}
// Try and handle many edge cases - can we put in any question and have it spit out a grammatically correct response?
