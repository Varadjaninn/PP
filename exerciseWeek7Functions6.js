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

function multTabl() {
    var newArray = [];
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++) {
            newArray += i*j + '';
        }
        newArray += '\n'
    }
    return newArray;
} 
console.log(multTabl())

/* 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.
F = (9*C/5) + 32 */

function convTemperature(c) {
    var Fahrenheit = (9 * c / 5) + 32;
    return Fahrenheit;
}
console.log(convTemperature(20));
console.log(convTemperature(10));

/* 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements. */

function maxElement(array) {
    var newArray = [];
    var max = array[0];
    for (var i = 0; i < array.length; i++){
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            newArray[newArray.length] = array[i];
        }
    }
    for (var j = 1; j < newArray.length; j++) {
        if (max < newArray[j]) {
            max = newArray[j];
        }
    }
    return max;
}
console.log(maxElement([2, 8, true, 6, 22, 'a', 77, null, 58, 33, 1, 88, NaN, 7, 99]))

/* 8. Write a function to find the maximum and minimum elements. Function returns an array. */

function maxMinElements(array) {
    var max = array[0];
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    var maxMinarray = [max,min];
    return maxMinarray;
}
console.log(maxMinElements([12, 55, 22, 88, 81, 95, 2, 7, 24, 65, 99]))

/* 9. Write a function to find the median element of array. */

function medElement(array) {
    var medEl = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array.length % 2 === 1) {
            if (i === array.length - 1 - i) {
            medEl = array[i];
            }
        } else {
            medEl = [array[array.length/2 - 1], array[array.length/2]];
        }

    }
    return medEl;
}
console.log(medElement([2, 22, 55, 77, 166, 2, 76]));
console.log(medElement([2, 22, 55, 77, 1, 166, 2, 76]));

/*
10. Write a function to find the element that occurs most frequently.
*/

function mostOccurElement(array) {
    var mostFrequent;
    var count = 0;
    var mostCount = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                count++;
            }
            if (mostCount < count) {
                mostCount = count;
                mostFrequent = array[i];
            }
        }
        count = 0;
    }
    return mostFrequent;
}
console.log(mostOccurElement([2, 8, 'a', true, 6, 1, 22, 'a', 8, 77, null, 58, 33, 88, 'a', NaN, 7, 1, 99, 'a']))

/*
11. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.
*/

function findElements(array) {
    var firstElement = array[0];
    var lastElement = array[array.length - 1];
    var middleElement = array[(array.length-1)/2];
    var result = [];

    if (array.length % 2 === 0 && array.length !== 0) {
        result = [firstElement, lastElement];
    } else if (array.length % 2 !== 0) {
        result = [firstElement, middleElement, lastElement];
    } else {
        result = array;
    }
    return result;
}   
console.log(findElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(findElements([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(findElements([]));


/*
12. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.
*/

function average() {
    var sum = 0;
    var result = 0;

    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    result = sum/arguments.length;

    return result;
}
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(average(2, 12, 22, 55, 44, 88, 99));



/*
13. Write a function to find all the numbers greater than the average.
*/

function greatThanAverage() {
    var sum = 0;
    var average = 0;
    var result = [];

    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    } 
    average = sum / arguments.length;
    
    for (var j = 0; j < arguments.length; j++) {
        if (arguments[j] > average) {
            result[result.length] = arguments[j];
        }
    }
    return result;
}
console.log(greatThanAverage(1, 10, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(greatThanAverage(2, 66, 12, 22, 55, 44, 88, 99));


/*
14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
square of the height (in meters). Write a function that takes two parameters, weight and
height, computes the BMI, and prints the corresponding BMI category:
● Starvation: less than 15
● Anorexic: less than 17.5
● Underweight: less than 18.5
● Ideal: greater than or equal to 18.5 but less than 25
● Overweight: greater than or equal to 25 but less than 30
● Obese: greater than or equal to 30 but less than 40
● Morbidly obese: greater than or equal to 40

15. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list ['Hello', 'World', 'in', 'a', 'frame'] gets
printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/
