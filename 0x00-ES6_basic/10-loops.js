#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
    const updatedArray = [];
  
    for (const idx of array) {
      const value = idx;
      updatedArray.push(appendString + value);
    }
  
    return updatedArray;
  }