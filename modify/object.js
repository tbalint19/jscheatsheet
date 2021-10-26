let myObject = { name: "bela", age: 20 }

// ACCESS
let x = myObject.name   // value of variable x is "bela"
let y = myObject.age    // value of variable y is 20

let myOtherObject = { "user-name": "bela", "1stProprity": "price" }
// This object has some "strange" keys: key with hyphen (-) and another key that starts with a number
// these are NOT best practices - however we can find ourselves working with them

let a = myOtherObject["user-name"]      // in this case we use this syntax, because myOtherObject.user-name would throw an error
let b = myOtherObject["1stProprity"]    // same here, myOtherObject.1stProirity would throw an error (key can not start wih number)

// OPERATOR

// update a value
myObject.name = "lajos"
myObject.age = 21

// add a key
myObject["gender"] = "male" // use this syntax, less error prone, see the example above

// or
myObject.gender = "male"

// deleting a key (seldom needed)
delete myObject.name

// BUILT-IN method

// --- (none that is needed on a cheatsheet)