//1. length: The string length method returns the number of characters in a string included empty space.
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Tiya'
console.log(firstName.length)  // 4

//acess diffrent characterss in 'JS'
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

/*toUpperCase(): this method changes the string to uppercase letters.
exaample
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT


toLowerCase(): this method changes the string to lowercase letters.
let string = 'JavasCript'

console.log(string.toLowerCase())     // javascript */