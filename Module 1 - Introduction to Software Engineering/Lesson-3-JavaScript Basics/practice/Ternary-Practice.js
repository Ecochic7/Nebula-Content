// USE FAKE INFO FOR THE FOLLOWING EXERCISE

// Initialize a variable called creditCardNum, set it equal to a fake credit card string-number

const creditCardNum = "1231-2933-0987"
console.log(creditCardNum)

// Initialize a variable called last4SS, set it equal to a 4 string-numbers (don't use your real SS last 4!)
const last4SS = "1234"
console.log(last4SS)

// Initialize a variable called userId, set it equal to a fake user ID
const userId = "Tashika1234"
console.log(userId)

// Initialize a variable called password, set it equal to a fake password
const password = "String1234"
console.log(password)

// Create two last variables called inputId & inputPass, initially set them as the same values as userId and password
const inputId = "Tashika1234"
const inputPass = "String1234"
console.log(inputId + inputPass)

// Write a ternary statement that checks if userId is equal to inputId and if password is also equal to inputPass
// If they are the same, log the credit card num and the last4SS
// If not, log 'incorrect username or id'

let output = userId === inputId && password === inputPass ? `Your credit card numer is ${creditCardNum} and the last 4 Socials ${last4SS}` : "incorrect username or id"
console.log(output)