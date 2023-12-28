// 1. Write a function that multiplies 3 input numbers together.
function multiplies(numb1,numb2,num3){
 return numb1 * num3 * numb2
}
console.log(multiplies(5,8,10))
// 2. Write a function that takes in a number and logs all odd numbers leading up to that number
function takein(number){
    for(let i = 0; i < 20; i++){
        if(i % 2 === 1)
        console.log(i, 'odd')
    else console.log(i)
    
    }
}
takein(7)
// 3. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
const listofname = ["Dwayne Johnson", "Halle Berry", "Denzel Washington", "Shia LaBeouf"]
const initials = []
function celebnames (){
    for(let i = 0; i < listofname.length; i++){
        const namesarray = listofname[i].split(' ')
        const firstinital = namesarray[0][0]
        const lastinital = namesarray[1][0]
        initials.push(firstinital + lastinital)
        

    }
    return initials
}
console.log(celebnames(listofname))
// 4. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator
function calculate(numb4,numb5,operator){
    if(operator === '+'){ // operator is a +,-,*,/ but as to be put in a string '+','-','/','*'
        return numb4 + numb5
    }
    
   }
   console.log(calculate(26,99,'+'))
// 5. Write a function which takes in two arrays and returns those arrays combined together. 
const favoritefood1 = ["Pizza", "ChickenSalad", "Chinese"]
const hobbies = ["Kitting", "Reading", "RollerSkatting"]

function twoarray (favoritefood1,hobbies){
    return favoritefood1.concat(hobbies)
}
console.log(twoarray(favoritefood1,hobbies))