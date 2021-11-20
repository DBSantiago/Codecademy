// This is my age.
const myAge = 27;

// This value will change
let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

const myName = "Santiago".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`)