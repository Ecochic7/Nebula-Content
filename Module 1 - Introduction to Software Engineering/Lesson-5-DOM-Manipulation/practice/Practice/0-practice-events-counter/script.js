// COUNTER EXERCISE

// Select the body element from index.html
const body = document.querySelector('body')
// Set an attribute of 'style' to the body tag and add a background color of anything other than white
body.style.backgroundColor = 'pink'
/* -------------------------------------------------------------------------- */

// Create an h1 element
const newh1 = document.createElement("h1")


// Append a new h1 element to the body element as a child
body.append(newh1)
// Add text to the h1 element 
const text = document.querySelector('h1')
text.innerText = "New H1"

// Assign the background color of this element to something unique
const color = document.querySelector('h1')
color.style.backgroundColor = 'green'
// Set a new style attribute to the h1 element
color.style.color = 'orange'
// Add font size to the h1Element
newh1.style.fontSize = "150px"
// Set the default text to the number zero
newh1.innerText = '0'
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const increment = document.createElement('button')
// Append the button element to the body element
body.append(increment)
// Add text to the boxButton
increment.innerText = 'Increase'
// Add a class attribute to boxButton
increment.classList.add('button-styling')
/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
const decrement = document.createElement('button')
// Add the button element to the body element
body.append(decrement)
// Add text to the button element
decrement.innerText = 'Decrease'
// Add a class attribute of style to the button element
decrement.classList.add('button-styling')
/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNcTION
// Create functionality that, when you click this button it increases the h1 value

increment.addEventListener('click', (e) => {
    let num = parseInt(newh1.innerText)
    num++
    newh1.innerText = `${num}`

})
// Create functionality that, when you click this button it decreases the h1 value
decrement.addEventListener('click', (e) => {
    let num = parseInt(newh1.innerText)
    num--
    newh1.innerText = `${num}`
})
/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 
const resetBtm = document.createElement('button')
body.append(resetBtm)
resetBtm.innerText = 'Reset'
resetBtm.classList.add('button-styling')

resetBtm.addEventListener('click', (e) =>{
    newh1.innerText = `0`
})