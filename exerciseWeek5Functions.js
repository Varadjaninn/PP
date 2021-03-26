
//1. Write a program that calculates the maximum of two given numbers.

function max(a, b){
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return 'numbers are equal'
    }
} 
var result = max(5, 5);
console.log(result);




//2. Write a program that checks if a given number is odd.

function check(a){
    if (a % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
var result = check(8);
var result1 = check(5);

console.log(result)
console.log(result1);


//3. Write a program that checks if a given number is a three digit long number.

function digit(a) {
    if (a > 99 && a < 1000) {
        return 'three digit long number'
    } else {
        return 'this is not a three digit long number';
    }
}
var result = digit(444);
var result1 = digit(22);

console.log(result);
console.log(result1);


//4. Write a program that calculates an arithmetic mean of four numbers.

function average(a, b, c, d) {
    var x = (a + b + c + d) / 4;
    return x;
} 
var result = average(5, 8, 7, 22);

console.log(result)

/*
5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****

*/

function square(n) {
    var newSquare = "";
    var star = "*";
    var newLine = "\n";
    var empty = " ";
    for(var i=0; i<n; i++) {
        for (var j=0; j<n; j++) {
            if (i === 0 || i === n-1 || j === 0 || j === n-1) {
                newSquare += star;
            } else {
                newSquare += empty;
            }
        }
        newSquare += newLine;
    }
    return newSquare;
}

var proba = square(5);
console.log(proba);


/*
6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *

*/

function repres(a, b, c) {
    var chart = '';
    for (var i = 0; i < 3; i++) {
        if (i===0) {
            for (var j = 0; j < a; j++) {
                chart += '*';
            }
        } else if (i===1) {
            for (var k = 0; k < b; k++) {
                chart += '*';
            }
        } else {
            for (var l = 0; l < c; l++) {
                chart += '*';
            }
        } 
        chart += '\n';
    }
    return chart;
}

var result = repres(5, 3, 7);

console.log(result);

//7. Write a program that calculates a number of digits of a given number.

function numDig(a) {
     var str = a + '';
    var result = str.length;
    return result;
    }
    
    var result = numDig(15151515151515);
    console.log(result);
    
/*
8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3
*/

function appNo(a, e) {
    var x = 0;
    for (var i = 0; i < a.length; i++) {
        if ( a[i] === e) {
            x++;
        } 
    } return x;
}
var result = appNo([2, 4, 7, 8, 7, 7, 1], 7)

console.log(result);


//9. Write a program that calculates the sum of odd elements of a given array.


function sumOdd(array) {
    var x = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] %2 !== 0) {
            x += array[i]
        }
    } return x;
}

var result = sumOdd([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

console.log(result);


/*
10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.
*/

function appLett(string) {
    var sum = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            sum++;
        }
    } return sum;

}
var result = appLett('Nemanja');
var result1 = appLett('VAradjanin NemanjA')
console.log(result);
console.log(result1);


/*
11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.
*/

function conCat(string, a) {
    var newString = '';
    for (var i = 0; i < a; i++) {
        newString += string; 
    } return newString;
}

var result = conCat('abc', 4)

console.log(result);