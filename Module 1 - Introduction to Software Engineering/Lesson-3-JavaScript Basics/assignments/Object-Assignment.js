// SUBMIT A LINK TO THE GITHUB REPO FOR THIS ASSIGNMENT
// 1.Create an object for your dream vehicle
// // Give it a minimum of 6 key-value pairs
// // This object should contain many datatypes (string, number, boolean, null, array)
const car1= {
    name: 'Honda',
    model: "CRV",
    differenttype: ['Civic', 'Hatchback',"Accord"],
    yearcreated: 1948,
    isitagoodcar: true,
    isitsabadcare: null,  
} 
console.log(car1)

// 2. Using dot-notation Log to the console 3 properties from the previous object
console.log(car1.name = 'Honda')
console.log(car1.model = 'CRV')
console.log(car1.differenttype = ['Civic', 'Hatchback', 'Accord'])

// 3. Using bracket-notation Log to the console 3 properties from the previous object
console.log(car1['yearcreated' ]= 1948)
console.log(car1['isitagoodcar' ]= true)
console.log(car1['isitsabadcare'] = null)

// 4.Try and log a property that doesn't already exist - what output do we get?
console.log(car1.favoritecar = '06 Civic') 
// 06 Civic

// 5.Add a new key-value pair to the vehicle. 
car1.brandlocation = "Japan"
console.log(car1)
// 6. Using bracket-notation update a property on the vehicle. 

car1['yearcreated']= 1950
console.log(car1)
// 7. Using dot-notation update a property on the vehicle. 
car1.model = 'Prelude'
console.log(car1)

// 8. Create a method for turning your vehicle on

car1.turnOnCar = () => {
    car1.isOn = true
} 
car1.turnOnCar()
// 9.Create a method for turning your vehicle off
car1.turnOffCar = () => {
    car1.isOn = false
} 
car1.turnOffCar()

//10.   
// // a. Check if your vehicle is on (it should be off)
// // b. Start your vehicle
// // c. Check if your vehicle is on (it should be on)
// // d. Stop your vehicle
// // e. Check if your vehicle is on (it should be on)

if(car1.isOn){
    car1.turnOnCar()

}else{
    car1.turnOffCar()
}
console.log(car1)


