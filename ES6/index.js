function a() { // FUNCTION SCOPE
    var x = 2 // VARS ARE FUNCTION SCOPED
}

// console.log(x) // x is not defined


// var x = 4

// if(true) { // BLOCK SCOPE
//     let x = 10
//     console.log(x)
// }

// console.log(x)


// let check; 

// if (x === 2) {
//     check = true
// } else {
//     check = false 
// }

// let check = x === 2 ? "success" : "fail"

// console.log(typeof check)


// this

const myObject1 = {
    name: "John",
    jobs: ["Teacher", "Superhero", "Something else"],
    myMethod: function () {
        console.log("OUTER THIS", this)
        this.jobs.forEach(function (job) {
            console.log(`${this.name} is a ${job}`)
        })
        // console.log("my name is: " + this.name)
    }
}


const myObject2 = {
    name: "John",
    jobs: ["Teacher", "Superhero", "Something else"],
    myMethod: function () {
        console.log("OUTER THIS", this)
        this.jobs.forEach((job) => {
            console.log(`${this.name} is a ${job}`)
        })
        // console.log("my name is: " + this.name)
    }
}

myObject1.myMethod() 
myObject2.myMethod() 


// FACTORY FUNCTIONS 
const obj1 = function(name, age) {
    return {
        name,
        age,
    }
}

// const stefano = obj1("Stefano", 18)
// console.log(stefano)

// CONSTRUCTOR FUNCTIONS (ONLY FUNCTION DECLARATION SYNTAX !== ARROW FUNCTION)
// function Person(name, age) { 
//     this.name = name;
//     this.age = age

//     console.log(this.name)
// }

// const user1 = new Person("Stefano", 28)
// const user2 = new Person("Pavan", 18)

// console.log(user1)

// button.addEventListener("click", function () {
//     this.classList.add("d-none") // this is the button node
// })

// button.addEventListener("click", (event) => event.target.classList.add("d-none"))
// button.addEventListener("click", (event) => event.target.closest(".card").remove())


// DESTRUCTURING 

const student = {
    name: "Pavan",
    surname: "Kumar",
    // age: 9
}

// OLD WAY
// const name = student.name
// const surname = student.surname

const {name, surname} = student

console.log(name)
console.log(surname)

const letters = ["a", "b", "c", "d", "e", "f"]

// const [, secondLetter, , , fifthElement, , ] = letters

// let fifthElement = letters[6]

// console.log(fifthElement)

const [, secondLetter, ...rest] = letters

console.log(secondLetter, rest)


const myFunc = (value, {name, surname, age = 20}, ...rest) => {
    console.log(value)
    console.log(name)
    console.log(surname)
    console.log(age)

    // console.log(rest)
}

myFunc(5, student, 2,1,2,3,5,6,12,2,3,1,6,6,12,3,12)

let search = (query = "forest") => {
    console.log(query)
    // fetch("endpointURL" + query, {})
}

search()
search("nature")


// SPREAD OPERATOR


let person1 = {
    name: "Emilian",
    surname: "Kasemi"
}

let person2 = {
    name: "André",
    // surname: "Sousa",
    age: 32,
    area: "Europe",
    world: "Mars"
}

// let person3 = person1 // SAME SPACE IN MEMORY #DONT EVER DO IT!
// let person3 = {}

// Object.assign({}, person1) // OLD METHOD TO COPY AN OBJECT AND NOT ITS REFERENCE

// let person3 = Object.assign({}, person1)

let person3 = { ...person1, ...person2, world: "Earth" }

// person3.name = "Stefano"

console.log(person3)


const sentence = ["This", "is", "a", "sentence"]
const sentence2 = [...sentence, "!"]

console.log([...sentence[0]])
console.log(sentence2)

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, 273, 891 , ...arr2]

const arr4 = [...arr3]

console.log(arr4)


const letters2 = ["a", "b", "e", "c", "d", "e", "f", "e", "e", "e"]

console.log(letters2.some(letter => letter === "e"))
console.log(letters2.every(letter => letter === "e"))

const arrOfArrays = [[1,2], 3, 4, [5, 6, [7]]]
const arrOfNums = arrOfArrays.flat(3)
console.log(arrOfArrays.flat(3))

console.log(arrOfNums.find(num => num > 2))
console.log(arrOfNums.findIndex(num => num > 2))

const index = arrOfNums.findIndex(num => num > 2)
console.log(arrOfNums[index])
console.log(arrOfNums.indexOf(3))
console.log(arrOfNums.indexOf(999))

console.log(arrOfNums.fill({}, 3, 5))

console.log(arrOfNums.includes(99))
console.log(arrOfNums.slice(2,4))
console.log(arrOfNums.splice(3,1))


// let sum = arr4.reduce((accumulator, currentValue) => {
//     console.log(accumulator)
//     console.log(currentValue)
//     return accumulator + currentValue
// }, 0)

let sum1 = arr4.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

const letters3 = ["a", "b", "e", "c", "d", "e", "f", "e", "e", "e"]

let filteredWithReduce = letters3.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])

let filteredWithSet = [...new Set(letters3)]

console.log(filteredWithSet)
console.log(filteredWithReduce)

console.log(sum1)

const books = [
    { title: "Il fu Mattia Pascal", author: "Luigi Pirandello", price: 22, quantity: 14},
    { title: "Divina commedia", author: "Dante Alighieri", price: 50, quantity: 16},
    { title: "Il nome della rosa", author: "Umberto Eco", price: 17, quantity: 8},
    { title: "Uno nessuno centomila", author: "Luigi Pirandello", price: 16, quantity: 5},
    { title: "Orlando furioso", author: "Ludovico Ariosto", price: 33, quantity: 34},
    { title: "La coscienza di Zeno", author: "Italo Svevo", price: 22, quantity: 8},
    { title: "I promessi sposi", author: "Alessandro Manzoni", price: 33, quantity: 6},
]

let sum2 = books.reduce((acc, curr) => acc + curr.price, 0)
let stock = books.reduce((acc, curr) => acc + curr.quantity, 0)

console.log(sum2)
console.log(stock)


// aggregateAuthors = {
//     "Luigi Pirandello": [{}],
//     "Dante Alighieri": [{}]
// }

const aggregateAuthors = books.reduce((acc, curr)=> {

    if(!acc[curr.author]) {
       acc[curr.author] = []
    }
   
    acc[curr.author].push(curr)

    let lastBook = acc[curr.author][acc[curr.author].length - 1]

    delete lastBook.author

    return acc
}, {})

console.log(aggregateAuthors
    )