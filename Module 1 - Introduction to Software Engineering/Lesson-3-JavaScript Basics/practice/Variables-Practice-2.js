// Create a variable for each aspect of an address 
// First Name, Last Name, House-Number, Street-Name, City, State, Zip
// Combine them to be usable as a postage address

/*
First-Name Last-Name
House-Number, Street-Name 
City, State
Zip

Your log should look like this:

Steve Rogers
569, Amsterdam Ave
New York, NY
18062 
*/
const fName = "Steve"
console.log(fName)
const lName = "Rogers"
console.log(lName)
const houseNum = 569
console.log(houseNum)
const street = "Amsterdam Ave"
console.log(street)
const city = "New York"
console.log(city)
const state = "NY"
console.log(state)
const zip = 18062
console.log(zip)

const address = `${fName} ${lName} 
${houseNum}, ${street}
${city}, ${state}
${zip}`

console.log(address)