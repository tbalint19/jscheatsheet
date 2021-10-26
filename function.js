// minimal syntactically correct function
// function KEYWORD, function name (can be anything), parentheses for params (can be empty, like here), and a block
function someBusinessLogic() {          
    // these lines, this block will run ONLY WHEN the function is CALLED
    // nothing will happen... but syntactically it is correct
}

someBusinessLogic() // function is CALLED, all the lines written in the related block ACTUALLY runs know
someBusinessLogic() // and again
someBusinessLogic() // and again... (this time, obiously, nothing happens, because the function does not do anything)

// this function can work with 2 params
function someOtherBusinessLogic(someParam, someOtherParam) {
    // someParam and someOtherParam can be used in this function (and only here)
}

someOtherBusinessLogic(1, 2) // when someOtherBusinessLogic runs, someParam's value is 1, and someOtherParam's value is 2
someOtherBusinessLogic("bela", true) // when someOtherBusinessLogic runs, someParam's value is "bela", and someOtherParam's value is true

function add(number1, number2) {
    // a function CAN (but does not have to) return a value
    const result = number1 + number2
    return result       // we do not want to use this value HERE
}

const someResult = add(2, 3)
// value of someResult is 5, and we can do with this result whatever we want

const someOtherResult = add(4, 5)
// value of someOtherResult is 9, and we can do with this result whatever we want
// even something else, than what we did with someResult
