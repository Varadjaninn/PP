/*1. Find the min and max element in the following array and switch their places. Print out the
modified array in the console.
Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/

function minMaxSwitch(array) {
    var minEl = array[0];
    var maxEl = array[0];
    var maxElIndex = 0;
    var minElIndex = 0;
    var newArr = [];
    for (var i = 1; i < array.length; i++) {
        if (minEl > array[i]) {
            minEl = array[i];
            minElIndex = i;
        }
        if (maxEl < array[i]) {
            maxEl = array[i];
            maxElIndex = i;
        }
    }
    for (var k = 0; k < array.length; k++) {
        if ( k === minElIndex) {
            newArr[newArr.length] = maxEl;
        } else if (k === maxElIndex) {
            newArr[newArr.length] = minEl;
        } else {
            newArr[newArr.length] = array[k];
        }
    }
    return newArr;
}
console.log(minMaxSwitch([ 3, 500, 12, 149, 53, 414, 1, 19 ]))

/*
2. Use the following array to make a new one by dividing its values by two and adding 5. If
a given element's value is 0, change it to 20.
Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function specArr(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i]/2+5 === 0) {
            newArr[i] = 20;
        } else {
            newArr[i] = array[i]/2+5;
        }
    }
    return newArr;
}
console.log(specArr([ 3, 500, -10, 149, 53, 414, 1, 19 ]))

/*
3. Initialize two arrays. The first one should contain student names, the second one the
number of points for each student. Display student' names with their corresponding
grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input:
[ 'Micahel', 'Anne', 'Frank', 'Joe', 'John', 'David', 'Mark', 'Bill' ], [ 50, 39, 63, 72, 99,
51, 83, 59 ]
Output:
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
the exam.
*/

function studentGrades(array1, array2) {
    var grade = '';
    var finalRes = '';
    for (var i = 0; i < array1.length; i++) {
        if (array2[i] <= 100 && array2[i] > 90) {
            grade = 'earned 10';
        } else if (array2[i] <= 90 && array2[i] > 80) {
            grade = 'earned 9'; 
        } else if (array2[i] <= 80 && array2[i] > 70) {
            grade = 'earned 8';
        } else if (array2[i] <= 70 && array2[i] > 60) {
            grade = 'earned 7';
        } else if (array2[i] <= 60 && array2[i] > 50) {
            grade = 'earned 6';
        } else {
            grade = 'failed to complete the exam.';
        }
        finalRes += array1[i] + ' acquired ' + array2[i] + ' points and ' + grade + '\n';
    }
    return finalRes;
}
console.log(studentGrades([ 'Micahel', 'Anne', 'Frank', 'Joe', 'John', 'David', 'Mark', 'Bill' ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));



/*
4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
values are equivalent to the first arra's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/

function sortArr(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        console.log(i)
        for (var j = i + 1; j < array.length; j++) {
            console.log(j)
            if (array[i] > array[j]) {
                var repos = array [i];
                array[i] = array[j];
                array[j] = repos; 
                console.log(array)
            }
        }
    } for (k = 0; k < array.length; k++) {
        newArray[k] = array[k] * 2;
    }
    return newArray
}
console.log(sortArr([ 13, 11, 15, 5, 6, 1, 8, 12 ]));


/*
5. (skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
*/

function sortArr(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                var repos = array[i];
                array[i] = array[j];
                array[j] = repos;
            }
        }
    }
    return array;
}
console.log(sortArr([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

/*
6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000
*/

var sum = 0;
for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
} 
for (var j = 1; j <= 500; j++) {
    if (j % 2 === 1) {
    sum -= j;
    }
}
var finalSum = sum * 12.5;
console.log(finalSum)


/*
7. Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: [ 'M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A' ]
Output: AnStJoJoDaMa
*/

function takeLetters(array) {
    var newArray = [];
    var newString = '';
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" && array[i].length >= 2) {
            newArray[newArray.length] = array[i];
        }
    }
    for (var j = 0; j < newArray.length; j++) {
        for (var k = 0; k < 2; k++) {
        newString += newArray[j][k];
        }
    }
    return newString;
}
console.log(takeLetters([ 'M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A' ]));

/*
8. Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

function reversOrder(string) {
    var newString = '';
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
console.log(reversOrder('Belgrade Institute of Technology'));

/*
9. Write a program that displays all the combinations of two numbers between 1 and 7.
Do't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/

function numComb () {
    var comb = [];
    var count = 0;
    for (var i = 1; i <= 7; i++) {
        for (var j = i + 1; j <= 7; j++) {
            comb += '(' + i + ',' + j + ')';
            comb += '(' + j + ',' + i + ')';
            count += 2;

        }
    }
    return 'Number of combitations is ' + count + ' and they are: ' + comb;
} 
console.log(numComb())


/*
10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false
*/

function primeNum (a) {
    var counter = 0;
    for (var i = 2; i < a - 1; i++) {
        if (a % i === 0) {
            counter ++;
        }
    }
    if (counter > 0) {
        return false;
    } else {
        return true;
    }
}
console.log(primeNum(3));


/*
11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true
*/

function isPalind(string) {
    newString = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            newString += string[i];
        }
    }
    for (j = 0; j < newString.length; j++) {
        for (k = newString.length - 1; k >= 0; k--) {
            if (newString[j] === newString[k]) {
                return true;
            } else {
                return false;
            }
        }
    }
}
console.log(isPalind('eye'));
console.log(isPalind('Geek'));
console.log(isPalind('a nut for a jar of tuna'));
console.log(isPalind('murder for a jar of red rum'));
console.log(isPalind('nemanja'));

/*
12. Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9
*/

function greatDev(a, b) {
    greatComDev = 0;
    for (var i = 1; i < a + b; i++) {
        if (a % i === 0 && b % i === 0) {
            greatComDev = i;
        }
    }
    return greatComDev;
}
console.log(greatDev(192, 42));
console.log(greatDev(81, 9));
console.log(greatDev(240, 48));
console.log(greatDev(42, 192));