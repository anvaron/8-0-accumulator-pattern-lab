/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls){
  let result = true;
  // >> Validating empty array >> Looping to check if all data types are numbers
  if(rolls.length !== 0){
    for(let i=0; i < rolls.length; i++){
      if(typeof rolls[i] === 'number'){
        result = true;
      }
      else {result = false;}
    }
  }
  return result;
}

/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value){
  let result = null;
  // >> Validating empty array >> Looping to find the given value >> if found it stop execution and return the value 
  if(rolls.length !== 0){
    for(let i=0; i < rolls.length; i++){
      if(rolls[i] === value){
        result = value;
        break;
      }
      else {result = null;}
    }
  }
  return result;
}

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
  let newRolls = [];
  // >> Looping to find the elements equal/greater than the given value >> filling the new array with the filtered values
  for(let i = 0; i < rolls.length; i++) {
    if (rolls[i] >= lowest){
      newRolls.push(rolls[i])  
    }
  }
  return newRolls;
}

/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll 
 * appears in the `rolls` array.
 */
function getRollCounts(rolls){
  let newObj = {};
  // >> Looping to get keys
  // >> Validating if the given key exist in the obj >> if not exist, set the value (init count) >> if exist, increment its value by 1.
  for(let i =0; i <rolls.length; i++){
    if(newObj[rolls[i]] === undefined){
      newObj[rolls[i]] = 1;
    }else{
      newObj[rolls[i]] += 1;
    }
  }
  return newObj;
}

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};
