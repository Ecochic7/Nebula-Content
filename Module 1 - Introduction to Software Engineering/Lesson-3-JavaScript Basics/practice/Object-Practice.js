// 1. Create an object for a celebrity and save it to a variable
const celebrity = {
    eyecolor: 'Brown',
    height: 5.9,
    from: 'Illinois',
    fullname: 'Michelle Williams',
};
console.log(celebrity)
// 2. Using dot-notation add 3 key-value pairs to the celebrity
celebrity.favoritefood = 'Gumbo,'
celebrity.accomplishments = 'won a Grammy'
celebrity.favoritecolor = "Purple"
console.log(celebrity)
// 3. Using c add 3 key-value pairs to the celebrity
 
  celebrity['howmanychildred'] = 2
  celebrity['age'] = 44
  celebrity['birthday'] = 'July 29'
  

  console.log(celebrity)
  // Expected output: "Doe"
  
// 4. Write a function that allows us to add or update 3 properties
 const addprperty = (object, key, value) => {
object[key] = value
  }
  addprperty(celebrity,"freind","Beyonce")
  addprperty(celebrity,"freind2","Kelly")
  addprperty(celebrity,"freind3", "Letoya")
console.log(addprperty( ))
// 5. Using a loop - log all the celebrities properties to the console

