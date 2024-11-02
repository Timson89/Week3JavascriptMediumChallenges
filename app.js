// Timothy Olofson
// Frontend Simplified(FES)
// Week3: Javascript
// Lesson: Problem Solving - Medium Challenges 



// Q1. Given Two Values, Return Value1 if Falsy else Return Value2?

function filterOutFalsy(val1, val2) {

  // if (value1 == false) {

  //   return value1;
  // }
  // return value2;


  // *** Simplified ***

  // if (!value1) {

  //   return value1;
  // }
  // return value2;


  // *** Simplified Again ***


  return (!val1 ? val1 : val2);
}
console.log(filterOutFalsy(true, 'Dog')); // -> Dog


// Q2. Return the Length/Size of Any Given Array.

function arrLength(arr) {

  return arr.length;
}
console.log(arrLength([0,1,2,3])); // -> 4


// Q3. Get the last Element in the Array.

function arrLastElem(arr) {

  return arr[arr.length - 1];
}
console.log(arrLastElem([0,1,2,3])); // -> 3


// Q4. Return the Sum of An Array.

function arrSum(arr) {

  let sum = 0;

  // *** How to Loop An Array ***

  for (let i = 0; i < arr.length; ++i) { // arr.length -1 removes elem starting from the last.

    // *** How to console.log An Array ***

    // console.log(arr[i]);

    sum = sum + arr[i];
  }
  return sum;
}
console.log(arrSum([9,8,7,6,5])); // -> 6 


// Q5. Add Up the Numbers From A Single Number.

function progressiveSum(num) {

  let sum = 0

  for (let i = 1; i <= num; ++i) {

    sum = sum + i;
  }
  return sum;
}
console.log(progressiveSum(4)); // -> 10


// Q6. Convert A number into time(MMinutes:SSeconds).

function calcTime(seconds) {

  let calcMinutes = Math.floor(seconds / 60);
  let calcSeconds = seconds % 60;

  if (calcMinutes.toString().length === 1) {

    calcMinutes = '0' + calcMinutes;
  }
  if (calcSeconds.toString().length === 1) {

    calcSeconds = '0' + calcSeconds;
  }
  return calcMinutes + ':' + calcSeconds;
}
console.log(calcTime(66)); // -> 01:06


// Q7. Return the Largest Number of A given Array.

function getMax(arr) {

  let max = arr[0];
 
  for (let i = 1; i < arr.length; ++i) {

    if (arr[i] > max) {

      max = arr[i];
    }
  }
  return max;
}
console.log(getMax([-300,-100,-200])) // -> -100


// Q8. Reverse A String.

function reverseString(str) {

  // let reversedString = '';


  // *** Incrementing 'for' Loop ***

  // for (let i = 0; i < str.length; ++i) {

  //   reversedString = str[i] + reversedString;
  // }
  // return reversedString;


  // *** Decrementing 'for' Loop ***

  // for (let i = str.length - 1; i >= 0; --i) {

  //   reversedString += str[i];
  // }
  // return reversedString;


  //////////////////////////////////////

  // *** Reversed Array Property ***

  // * String to Array: ''.split('') 

  // * Flips An Array: .reverse() 

  // * Array to String: .join('') 

  //////////////////////////////////////


  // *** Most simplified Version ***

  return str.split('').reverse().join('');
}
console.log(reverseString('abc')) // -> cba


// Q9. Turn Every Element in An Array into 0.

function convertToZeros(arr) {


  // *** 'for' Loop ***

  // let newArr = [];

  // for (let i = 0; i < arr.length; ++i) {

  //   newArr[i] = 0;
  // }
  // return newArr;


  // *** 'fill' Array ***

  // return new Array(arr.length).fill(0);


  // *** 'map' Array ***

  // return arr.map(elem => {

  //  // * Must return itself if using curly brackets '{}' *

  //   return 0;
  // })


  // *** Most Simplified Version ***

  return arr.map(elem => 0)
}
console.log(convertToZeros([1,2,3,4,5,6])); // -> [0, 0, 0, 0, 0, 0]


// Q10. Remove 'apples' from Any Given Array of Fruits.

function removeApples(arr) {


  // let noApples = [];

  // *** 'for' Loop ***

  // ** 'Push' Array **

  // for (let i = 0; i < arr.length; ++i) {

  //   if (arr[i] !== 'Apple') {

  //     noApples.push(arr[i]);

  //     // console.log(arr[i]);
  //   }
  // }
  // return noApples;


  // *** 'filter' Array ***

  // ** Most Simplified Version

  // * Must return itself if using curly brackets '{}' *

  return arr.filter(elem => // {

    // return
    
    elem !== 'Apple' // }
  )
}
console.log(removeApples(['Banana', 'Apple', 'Pear', 'Pinapple', 'Apple'])) // -> -'Apple'(s)


// Q11. Remove All Falsy Values from Any Given Array and Only Return Truthy Values.

function removeFalsyValues(arr) {

  // *** Most simplified Version ***

  // return arr.filter(elem => !!elem === true)

  let truthyArr = [];

  for (let i = 0; i < arr.length; ++i) {

    if (!!arr[i] === true) {

      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}
console.log(removeFalsyValues([100, "", [], 0, null, undefined, "0", true, false, NaN])) // -> [100, Array(0), '0', true]


// Q12. Truthy to true & Falsy to false.

function convertToBoolean(arr) {

  return arr.map(elem => !!elem) 
}
console.log(convertToBoolean([500, 0, "Timothy", "", []])) // -> [true, false, true, false, true]