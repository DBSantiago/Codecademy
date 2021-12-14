/*
1.
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!
*/

// ********** 1 **********

const reverseArray = (array) => {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

/*
2.
Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”
*/

// ********** 2 **********

const greetAliens = (aliens) => {
  for (let alien of aliens) {
    console.log(
      `Oh powerful ${alien}, we humans offer our unconditional surrender!`
    );
  }
};

/*
3.
Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '. Don't use .map() method
*/

// ********** 3 **********
const convertToBaby = (array) => {
  let babyArray = [];
  for (let i = 0; i < array.length; i++) {
    let newElement = "baby " + array[i];
    babyArray.push(newElement);
  }
  return babyArray;
};

/*
4.
We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than the current element before using .push() to add it to results.
*/

// ********** 4 **********

const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    j = 1;
    while (j < number) {
      j = j * 2;
    }
    results.push(j);
  }
  return results;
};

/*
5.
Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline()
*/

// ********** 5 **********

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};

const acceptEverything = (arr) => {
  arr.forEach((e) => {
    console.log(`Ok, I guess I will eat some ${e}.`);
  });
};

/*
6.
Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.
*/

// ********** 6 **********

const toSquare = (num) => num * num;

function squareNums(array) {
  return array.map((element) => toSquare(element));
}

/*
7.
Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'
*/

// ********** 7 **********

const shoutGreetings = (array) => {
  return array.map((element) => element.toUpperCase() + "!");
};

/*
8.
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.
*/

// ********** 8 **********

const sortYears = (array) => {
  return array.sort().reverse();
};

/*
9.
Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.
*/

// ********** 9 **********

const justCoolStuff = (array1, array2) => {
  return array1.filter((element) => array2.includes(element));
};

/*
10.
Write a function isTheDinnerVegan() that takes in an array of food objects in the format {name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
*/

// ********** 10 **********

const isTheDinnerVegan = (array) => {
  return array.every((element) => element.source === "plant");
};

/*
11.
Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format: {speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
*/

// ********** 11 **********

const sortSpeciesByTeeth = (array) => {
  return array.sort(
    (element1, element2) => element1.numTeeth - element2.numTeeth
  );
};

/*
12.
Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.
*/

// ********** 12 **********

const findMyKeys = (array) => {
  return array.indexOf("keys");
};

/*
13.
Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
*/

// ********** 13 **********

function dogFactory(name, breed, weight) {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight += 1;
    },
  };
}
