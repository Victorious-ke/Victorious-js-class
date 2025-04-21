// //let height = 6
// if (height === 6){
//   console.log("Looking tall")
// }
// else if(height === 4){
//   console.log("Dont feel bad, most people are shorter than you")
// }
// else if(height ===3){
//   console.log("you are a dwarf")
// }
// else{
//   console.log("I dont know how tall you are")
// }
let height = 6
if (height >= 6){
  console.log("you can go in the water slide")
}
else if(height >= 3){
  console.log("you can go to the childrens swing")
}
else {
  console.log("just go home")
}

// logical operators
// 1 ! this is a bang it negates whatever is there 
// 2 && (and)
// 3 || (or) called double pipes 

//Functions
// function parameters(variable) - these are the values that the user passes to the function whe
// they are passed inside the ()

function add(a,b){
  console.log(a+b)
}
// calling a function
add (100+60)

function greetme(name){
  console.log("Hello there, "+ name)
}
greetme("Victorious")
// TODO Find truthy and falsy values in js 
// Go through the comparison table between true and false using && and ||

// conditionals
// if if and else 1 condition
// else if more than 1 condition
// else

let carolineHeight = 3

// if(carolineHeight ===6){
//   console.log("Hello Caroline, here is a gift for you!!") // action that will happen if condition defined in the () is true
// }
// else{
//   console.log("Sorry Caroline, no gift for you!!")
// }

if(carolineHeight ===6){
  console.log("Looking tall Caroline")
}
else if(carolineHeight ===5){
  console.log("Dont Average bad, most people are shorter than you")
}
else if(carolineHeight ===4){
  console.log("Dont feel bad, most people are shorter than you")
}
else if(carolineHeight ===3){
  console.log("you are a dwarf")
}
else {
  console.log("I dont know how tall you are")
}
// to do -Functions 
// FizzBuzz a counting game print form 1-50 
// multiples of 3 replaced with Fizz 
// multiples of 5 replaced with Fuzz 
// multiple of 3 and 5 replaced with FizzBuzz
 
// function camelCase(ie calculateBonus)
//  set of () after the function name(contains parameters values/variable passes by the user to the function when calling it)
//  {} set of callibraces function code will go here 
// calling a function  pass the name of the function and a set of empty brackets()
// console log vs return
// coso;e.log _for debugging and knowing whats your code id doing 
// for functions the return keyword returns a usable value from a function
function add(a b){
  console.log(a+b)
}
add(1000,500)


function greetMe(name){
  console.log("Hello there, " + name)
}
greetMe("Caroline")

// parseINT takes any interger stored as a float and conversts it to an integer ("100")
// parseFloat takes any floating point stored as a string and converts it to a float ("100.786")
// type coercion