// document.body.addEventListener('click', (event) =>{
//     console.log(event)
// })

let H1 = document.querySelector('.H1');
let clicked = true;

H1.addEventListener("click", (e) => {
    if(e.target === H1 && clicked){
      H1.style.backgroundColor = "purple";       
       H1.style.color = "teal";   
       
    }   
    })