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
5. (skip :))Sort a previously defined array in a descending order and display it in the
console.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
be multiplied by 12.5 and displayed in console.
Output: 2350000
7. Define a 10 element array. Take the first two letters from every string (that has at least 2
letters) in the array and create a new string from them. Print it out in the console.
Input: [ 'M', 'Anne', 12, 'Steve', 'Joe', 'John', 'David', 'Mark', true, 'A' ]

Output: AnStJoJoDaMa

8. Write a program that takes a string and prints its characters out in reversed order in the
console.
Input: Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
9. Write a program that displays all the combinations of two numbers between 1 and 7.
Do't display two of the same numbers at the same time. Display the number of possible
combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
10. Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false
11. Check if a given string is a palindrome (spaces are ignored).
Input: eye | Geek | a nut for a jar of tuna
Output: true | false | true
12. Write a program that calculates the greatest common divisor of two integers. Note: The
greatest common divisor of two non-zero integers is the greatest positive number that
divides both numbers with no remainder.
Input: 192 42 | 81 9
Output: 6 | 9
*/