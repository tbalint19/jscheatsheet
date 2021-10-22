// for loops

// FOR LOOP
for (let number = 1; number < 100; number++) { // IF I want this block to run a hundred times
    // THIS block will run 'multiple times' - 100 times in this case
}

// FOR OF LOOP
// array
let myArray = [ "bela", "lajos", "kazmer" ]
for (const name of myArray) {
    // THIS block will run 'multiple times' - 3 times in this case
    // value of 'name' variable will be: "bela" (first time), "lajos" (second time), "kazmer" (third time)
    // variable for the loop should be descriptive
}

// string
let myString = "otto"
for (const letter of myString) {
    // THIS block will run 'multiple times' - 4 times in this case
    // value of 'letter' variable will be: "o" (first time), "t" (second time), "t" (third time), "o" (fourth time)
    // variable for the loop should be descriptive
}

// FOR IN LOOP
// object
let obj = { name: "bela", age: 20 }
for (const key in obj) {
    // THIS block will run 'multiple times' - 2 times in this case
    // value of 'key' variable will be: "name" (first time), "age" (second time)
    const aValueOfObj = obj[key]
}

// array
for (const index in myArray) { // if we care about the current index
   // THIS block will run 'multiple times' - 3 times in this case
   // value of 'index' variable will be: 0 (first time), 1 (second time), 2 (third time)
   const name = myArray[index]
}

// string
for (const index in myString) { // if we care about the current index
    // THIS block will run 'multiple times' - 4 times in this case
    // value of 'index' variable will be: 0 (first time), 1 (second time), 2 (third time), 3 (fourth time)
    const currentLetter = myString[index]
 }