// start with strings, numbers and booleans

let age = 100
let age2 = age

console.log(age, age2)

age = 200

console.log(age, age2)

let name = 'Robert'
let name2 = name

console.log(name, name2)

name = 'Joe the go'
console.log(name, name2)

// Let's say we have an array

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy', 'Miker']

// and we want to make a copy of it.

const team = [].concat(players)
console.log(players)
console.log(team)

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point
// to the same array!

// So, how do we fix this? We take a copy instead!

const team2 = players.slice()

// one way

// or create a new array and concat the old one in

// or use the new Es6 Spread

const team3 = [...players]

const team7 = Array.from(players)

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects

const person = {
  name: 'Wes Bos',
  age: 80
}

console.log(person)

let robot = { ...person }
robot.age = 90
console.log(robot)

// and think we make a copy:

let names = Object.assign({}, person, { name: 'Robot' })
console.log(names)

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is the only 1 level deep - both for Arrays and Objects.
// lodash has a cloneDeep method, but you should think twice before using it.
