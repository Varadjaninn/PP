/*1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/

function insStr(str1, str2, n) {
    var newStr = "";
    for (var i = 0; i < str1.length; i++) {
        if (i === n-1) {
        newStr += str1[i] + str2;
        } else {
        newStr += str1[i];
        }
    }
    return newStr;
}

var result = insStr("My random string", "JS ", 5);
console.log(result)


/*
2. Write a program to join all elements of the array into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, "", undefined, 47, null]
*/

function joinEl(array) {
    newStr = '';
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined && array[i] !== null && isFinite(array[i])) {
            newStr += array[i];
        }
    }
    return newStr;
}
var result = joinEl([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(result)

/*
3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47]
*/

function filterVal (array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (!!array[i] === true) {
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}
result = filterVal([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(result)


/*
4. Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number
*/

function reversNumber (a) {
    var b = '' + a;
    var result = '';
    for (var i = (b.length - 1); i >= 0; i--) {
        result += b[i];
    }
    return parseFloat(result);
}
var final = reversNumber(12345);

console.log('The reverse is', final, 'and the type is:', typeof final)

/*
5. Write a function to get the last element of an array. Passing a parameter 'n' will return the
last 'n' elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]
*/

function lastElement (array, n) {
        var a = 0;
        var nElements = [];
        if (n === undefined) {
            for (var i = 0; i < array.length; i++) {
                 a = (array[array.length-1]);
            } 
            return a;
        } else {
            for (var j = (array.length-n); j < array.length; j++) {
                nElements[nElements.length] = array[j];
            }
            return nElements;
        }
}

var result = lastElement([7, 9, 0, -2] );
var result1 = lastElement([7, 9, 0, -2], 2);
console.log (result)
console.log (result1)



/*
6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null]
*/

function elementNo (a, b) {
    var array = [];
    if (b === undefined) {
        for (var i = 0; i < a; i++) {
            array[array.length] = null;
        } 
    } else {
        for ( var i = 0; i < a; i++) {
            array[array.length] = b;
        }
    }
    return array;
}

var result = elementNo(6, 0);
var result1 = elementNo(2, 'none');
var result2 = elementNo(2);

console.log (result);
console.log (result1);
console.log (result2);



/*
7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
(including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.

Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/

function perfectNo (a) {
    var result = (a + ' is not a perfect number');
    var b = 0;
    for (var i = 1;  i < a; i++) {
        if (a % i === 0) {
          b += i;
        } 
    if (b === a && (b+a)/2 === a) {
        result = (a + ' is a perfect number')
        }
    }
    return result;
}

var final = perfectNo(8128);
console.log(final)

/*
8. Write a function to find a word within a string.
'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/

function findWord(str1, str2) {
    var newString = '';
    var counter = 0;
    var x = 0;
    for (var i = 0; i < str1.length; i++) {
        if (str2[x] === str1[i]) {
            newString = newString + str1[i];
            x++;
            if (newString === str2) {
                counter++; 
                x = 0;
            }
        }  else {
            newString = '';
            x = 0;
            
        }
    }
    return '"' + str2 + '"' + ' was found ' + counter + ' times';
}

var final = findWord('The quick brown fox', 'fox');
var final1 = findWord('aa bb cc dd aa', 'aa');

console.log(final)
console.log(final1)


/*
9. Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/

function hideEmail (string) {
    var hiddenEmail = '';
    var dots = '...';
    var monkey = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === '@') {
            monkey = i;
        }
    } for ( var j = 0; j < 3; j++) {
        hiddenEmail += string[j];
    }
    hiddenEmail += dots;
    for ( var k = monkey; k < string.length; k++) {
        hiddenEmail += string [k];
    }
    return hiddenEmail;
}
var result = hideEmail('myemailaddress@bgit.rs');
var result1 = hideEmail('nvaradjanin@gmail.com')

console.log(result)
console.log(result1)


/*
10. Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/

function mostFrequent(array) {
    var frequency = 0;
    var highestFrequency = 0;
    var item;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                frequency++;
                if (frequency > highestFrequency) {
                    highestFrequency = frequency;
                    item = array[i];
                }
            }
        } 
        frequency = 0;
    }
    return item + '(' + highestFrequency + ' times)';
}

var result = mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log(result)