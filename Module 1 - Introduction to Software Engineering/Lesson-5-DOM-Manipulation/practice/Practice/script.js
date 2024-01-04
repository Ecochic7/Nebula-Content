// Grab the elements and log them to the console


// Q1:  Attach this document to the index.html


// Q2:  Grab the second element that has the text Hello
const GrabIdElement = document.querySelector("#first");
console.log(GrabIdElement)
// Q3:  Grab the text in the h1 that says 'Good Afternoon'
const holdH1 = document.querySelectorAll('h1');
const goodafternoonh1 = holdH1[2]
const text = goodafternoonh1.innerText
console.log(text)
// Q4:  Grab the h1 with the text that says "Catch me if you can"
const Grabh1 = document.querySelector('.catch-me');
console.log(Grabh1)
// Q5:  Grab the span element and change the text to "Got ya"
const spanelement = document.querySelector("span")
spanelement.innerText = "Got ya"
console.log(spanelement.innerText)