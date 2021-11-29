let input = "Hello world";

const vowels = ["a","e","i","o","u"];

let resultArray = [];

for (let i=0; i < input.length; i++){
    if (input[i] === "e"){
      resultArray.push(input[i]);
      resultArray.push(input[i]);
    }
    if (input[i] === "u"){
      resultArray.push(input[i]);
      resultArray.push(input[i]);
    }
    if (input[i] === "i" || input[i] === "o" || input[i] === "a"){
      resultArray.push(input[i]);
    }
}
resultSentence = resultArray.join("")[0].toUpperCase() + resultArray.slice(1, resultArray.length -1).join("").toLowerCase();
console.log(resultSentence)