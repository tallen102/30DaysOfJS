//Strings are texts, which are under single , double, back-tick quote
let space = ' '           // an empty space string
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
//let age = 250
//String Concatenation: Connecting two or more strings together is called concatenation
//example below:
let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);
//or Concatenating Using Addition Operator(error prone way refrain from using )
//let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition
//console.log(personInfoOne)

//long literal strings
//We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. Example:
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
/*Escape Sequences in Strings
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")*/
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


//Template Literals (Template Strings)
//To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign
//Syntax
//`String literal text`
//`String literal text ${expression}`

console.log(`The sum of 2 and 3 is 5`) //just writing it out              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

//example 2 
let firstName2 = 'Asabeneh'
let lastName2 = 'Yetayeh'
let country2 = 'Finland'
let city2 = 'Helsinki'
let language2 = 'JavaScript'
let job2 = 'teacher'
let age2 = 250
let fullName2 = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
//Using a string template or string interpolation method, we can add expressions, which could be a value, or some operations
//let a = 2 //dont repeat code
//let b = 3 //dont repeat code 
console.log(`${a} is greater than ${b}: ${a > b}`)
