/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here
const {color, make, model, year} = carDetails;


////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  //Code Here
  const {firstName, lastName, title} = obj
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
const statePopulation = {
  utah: 1,
  california: 2,
  texas: 3,
  arizona: 4
}

const totalPopulation = (obj) => {
  const {utah, california, texas, arizona} = obj;
  return utah + california + texas + arizona
}

totalPopulation(statePopulation)


////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/
const ingredientsList ={
  carb: 'flour',
  fat: 'butter',
  protein: 'eggs'
}

const ingredients = ({carb, fat, protein}) => [`${fat}`, `${protein}`, `${carb}`];

ingredients(ingredientsList)

////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

//Code Here

let numbers ={
  first: 1,
  second: 2,
  third: 3
}

const largeNumbers = ({first, second, third}) => Math.min(first, second, third)

largeNumbers(numbers)


////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

//Code Here
let letters ={
  a: [1],
  b: [1,2],
  c: [1,2,3]
}

function numberGroups({a, b, c}) {
  const longestArrLength = Math.max(a.length, b.length, c.length)
  let longest = []
  if (longestArrLength === a.length) {
    longest = a
  } else if (longestArrLength === b.length) {
    longest = b
  } else {
    longest = c
  }
  return longest;
}


