const _ = {
  clamp(number, lowerBound, upperBound) {
    let lowerClampedValue = Math.max(number, lowerBound);
    let clampedValue = Math.min(lowerClampedValue, upperBound);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (typeof end === typeof undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let helper = start;
      start = end;
      end = helper;
    }
    let isInRange = number >= start && number < end;
    return isInRange;
  },
  words(string) {
    let wordsArray = string.split(" ");
    return wordsArray;
  },
  pad(string, length) {
    let difference = length - string.length;
    if (difference <= 0) {
      return string;
    }
    let startPadding = Math.floor(difference / 2);
    let endPadding = Math.ceil(difference / 2);
    let paddedString =
      " ".repeat(startPadding) + string + " ".repeat(endPadding);
    return paddedString;
  },
  has(object, key) {
    let hasValue = object[key] !== undefined;
    return hasValue;
  },
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
      return undefined;
    }
  },
  drop(array, number = 1) {
    let droppedArray = array.slice(number);
    return droppedArray;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size = 1) {
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
