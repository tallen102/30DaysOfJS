//Primitive data types:are immutable(non-modifiable) data types. Once a primitive data type is created we cannot modify it.
let word = 'JavaScript'// will raise a error if we try to modify

word[0] = 'Y'//This expression does not change the string stored in the variable word

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

//Non-primitive: data types are modifiable or mutable
// arrays
let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)  // [10, 2, 3]
//mutable 
//Even if two non-primitive data types have the same properties and values, they are not strictly equal
//Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.
/*let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false*/

//the correct way to do it 
let nums = [1, 2, 3]
let numbers = nums

console.log(nums == numbers)  // true

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = userOne

console.log(userOne == userTwo)  // true
