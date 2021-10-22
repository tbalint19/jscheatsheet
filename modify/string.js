let x = "bela"

// OPERATOR
let y = x + "kovacs"
// y's value is "belakovacs" now
x += "kovacs"

let z = x * 3
// z's value is "belabelabela" !!!! IT IS NOT WORKING - z's value is NaN

// BUILT-IN methods
let a = x.repeat(3)
// "belabelabela"

let b = x.split("")
// [ "b", "e", "l", "a" ]

// !!!!!! STACKOVERFLOW !!!!!!! - we did NOT know how to do this
let c = [x.slice(0, 2), "T", x.slice(2)].join('')
console.log(c)