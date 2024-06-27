#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];

  for (const idx of array) {
    const value = idx;
    myArray.push(appendString + value);
  }

  return myArray;
}
