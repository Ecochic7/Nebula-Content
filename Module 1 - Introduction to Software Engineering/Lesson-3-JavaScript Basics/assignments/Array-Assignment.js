// 1.   Create an array that contains two of your favorite things to do
const favoritethings = ['Knitting', 'WatchingMovies']
// 2.   Using an array method, add another thing you like to do to that list
favoritethings.push('Videogames')
console.log(favoritethings)
// 3.   Reverse the order of the array (remember, if needed use MDN)
favoritethings.reverse()
console.log(favoritethings)
//      Use this array for questions 4-11:
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
console.log(daysOfWeek.length)
// 5.   log the 4th element in the array
console.log(daysOfWeek[3])
// 6.   Remove the first element in the array. Log the new array and the element removed from the array
const remove = daysOfWeek.shift()
console.log(remove)
// 7.   Put 'Sunday' back at the beginning of the array and log the new array
const neww = daysOfWeek.unshift(remove)
console.log(neww)
// 8.   Remove the last element in the array. Log the new array and log the element ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const removedback = daysOfWeek.pop()
console.log(removedback)
// 9.   Add 'Saturday' back to the end of the array and log the new array

daysOfWeek.push(removedback)

//10.   Replace 'Thursday' with 'Friday Junior'
daysOfWeek[4] = 'Friday Junior'
console.log(daysOfWeek)

//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const favday = 'Friday'
console.log(`My favoite day out the week is ${favday}`)
//12.   Combine these two arrays
    let phone = ['iphone', 'android']
    let laptop = ['MacBook', 'HP', 'Dell']
console.log(phone.concat(laptop))
//13.   Write a line of code to test if something is an array or not
const flowers = ['Sunflower', 'Jasmine', 'Rose',]
console.log(flowers)
const isArray = Array.isArray(flowers)
console.log(isArray)