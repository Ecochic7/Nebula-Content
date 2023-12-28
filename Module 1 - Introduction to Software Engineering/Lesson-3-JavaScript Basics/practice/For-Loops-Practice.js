// 1. Declare a for loop that starts at 0, goes until 20, and increments by 1
// // Each loop it should log to the console the current index

for(let i = 0; i < 20 ; i++){
        console.log(i);
        }

// 2. Declare a for loop that starts at 1, goes until 40, and increments by 2
// // Each loop it should log to the console the current index

for(let i = 0; i < 40 ; i++){
        console.log(i * 2)
}

// 3. Create an array with all student names in it. 
// // Loop over the array and log each student's name to the console.
// // Inside the array declare an un-required, but useful variable for 'currentStudent'
const studentnames = ["David", "Cristian", "Konatee"]
for(let i = 0; i < studentnames.length; i++){
        let currentstudent = arrayofstudents[i]
        console.log(currentstudent)
}


// 4. Use the array below for the following question
// // Loop over the numArray & ONLY log even numbers to the console.
// // // 2 Hints: there will be an IF statement within the loop & be sure to check the value, not the index
        const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];
for(let i = 0; i < numArray.length; i++){
        if(numArray[i] % 2 == 0){
                console.log(numArray[i])
        }
}
// 5. Use the above numArray array for this question
// // Create a for loop which will iterate over each element of the above numArray and output a new array of only odd numbers

const oddNums = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3]
for(let i = 0; i < oddNums.length; i++){
        if(oddNums[i] % 2 == 1){
                console.log(oddNums[i])
        }
}

// 6. Using the nums and the two empty placeholder arrays below
// // Create a for loop which will fill the two separate arrays, one with only positive numbers, one with only negative numbers

const nums = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
const positiveArr = [];
const negativeArr = [];
for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        if(nums >= 0){
                positiveArr.push(num)
break;
        }else {(nums <= 0 )
                negativeArr.push(num)
                

}
console.log(positiveArr)
console.log(negativeArr)
}