let myArray = [ 1, 2, 3 ]

// ACCESS
let firstElem = myArray[0] // index starts from 0
let lastElem = myArray[myArray.length-1]
let anElem = myArray[15] // if index is bigger than the length of the array, it is undefined

let lengthOfArr = myArray.length // the length property of the arrays are often used
// fun fact - myArray has a PROPERTY called length, BECAUSE under the hood every array is a (special...) object

// OPERATOR (?)
myArray[1] = "something else" // override second elem to the string "something else"

// BUILT-IN method

myArray.push("another elem")    // MUSTHAVE! WE USE THIS A LOT

myArray.pop()                   // goot to know - removes last elem
myArray.shift()                 // good to know - removes first elem
myArray.unshift("something")    // good to know - adds an elem to the begining of the array (NOT OVERWRITES)
myArray.splice(2, 0, "newElem") // good to know - insert item ("newElem" string) at second index WITHOUT overwriting anything
myArray.splice(3, 1)            // good to know - deletes item at 3rd index (the fourth element)

let aString = myArray.join("-")               // can be "stackoverflowed" - creates a string from the elements, sticking them to each other with the string added as the first param 
myArray.reverse()               // can be "stackoverflowed" - quite intuitive
myArray.sort()                  // can be "stackoverflowed" - quite intuitive basic usage, bit unintuitive compare function
// ...and so on...