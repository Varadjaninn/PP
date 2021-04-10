/* 1. Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
E, I, O, and U. */

//Dario's way

function couVow(string) {
    var count = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
                count++;
            }
    }
    return count;
}
console.log(couVow('Riba ribi grize rep'))

//My way


function couVow(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (
        string[i] === 'a' ||
        string[i] === 'e' ||
        string[i] === 'i' ||
        string[i] === 'o' ||
        string[i] === 'u' ||
        string[i] === 'A' ||
        string[i] === 'E' ||
        string[i] === 'I' ||
        string[i] === 'O' ||
        string[i] === 'U'
        ) {
        count++;
        }
    }
    return count;
}
console.log(couVow('Riba ribi grize rep'))

/* 2. Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3] */

function arrComb(array1, array2) {
   var newArr = [];
   for (var i = 0; i < array1.length; i++) {
       newArr[newArr.length] = array1[i];
       newArr[newArr.length] = array2[i];
    }
   return newArr;
}
console.log(arrComb(['a','b','c'], [1,2,3]))



/* 3. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2] */

function rotateArr(array, k) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (i >= k) {
            newArr[newArr.length] = array[i];
        }
    }
    for (var j = 0; j < k; j++) {
        newArr[newArr.length] = array[j];
    }
    return newArr;
}
console.log(rotateArr([1,2,3,4,5,6], 2));
console.log(rotateArr([1,2,3,4,5,6], 4));

/*4. Write a function that takes a number and returns array of its digits.*/

function returnDig (a) {
    var newArr = [];
    var aString = a + '';
    for (var i = 0; i < aString.length; i++) {
        newArr[newArr.length] = parseInt(aString[i]);
    }
    return newArr;
}
console.log(returnDig(205025));


/*5. Write a program that prints a multiplication table for numbers up to 12.*/


