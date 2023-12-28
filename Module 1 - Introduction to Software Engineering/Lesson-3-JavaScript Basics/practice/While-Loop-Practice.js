// Reminder: control-c will kill an infinitely running node-process

// 1. Write a while loop that loops over a string until it finds the letter "a"
const string = "This is a String"
let i = 0
while(i < string.length){
    if(string[i].toLocaleLowerCase() === 'a')
    console.log('we found "A"')
}
i++
//}

// 2. Write a while loop that logs to the console the 'count' until the 'count' reaches 100
// // Inside the while loop be sure to increase count by some number
let count = 0
while(count < 100){
    count += 10 //count = count + 10
    console.log(count)
    
}