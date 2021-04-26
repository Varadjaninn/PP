/*
1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
*/

( 
    function (array) {
        var swap = array[0];
        array[0] = array[array.length - 1];
        array[array.length - 1] = swap;

        console.log(array)
    } 
) ([4, 5, 11, 9])

/*
2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20
*/

(
    function (a, b) {
    console.log (a*b);
    } 
) (4, 5)


/*
3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2
*/

(
    function (string) {
        var newString = '';
        var count = 0;
        for (var i = 0; i < string.length; i++) {
            if (string[i] === 'm' || string[i] === 'M') {
                newString += '*';
                count++;
            } else {
                newString += string[i];
            }
        }
        console.log(newString);
        console.log(count);
    }
) ('prograMming')

/*
4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com
*/

function email(name, surname) {
    return function () {
        return name + '.' + surname + '@gmail.com';
    }
}
var result = email('pera', 'peric');
console.log(result());

/*
5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28
*/

function decimalCalc(string) {
    return function () {
        return parseInt(string,8);
    }
}
var result = decimalCalc('034');
console.log(result());


/*
6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool!
*/

function successCallback() {
    return 'Your password is cool!';
}

function errorCallback() {
    return 'Your password is invalid!';
}


function isValidPassword(password, functionCorrect, functionError) {
        if (password.length >= 6) {
            for (var i = 0; i < password.length; i++) {
                password[i] = parseInt(password[i]);
                if (!isNaN(password[i])) {
                    return functionCorrect();
                }
            }
            return functionError();
        } else {
            return functionError();
        }
}

console.log(isValidPassword('JSGuru123', successCallback, errorCallback ));
console.log(isValidPassword('JSGuru', successCallback, errorCallback ));
console.log(isValidPassword('N111emanjaVaradjanin', successCallback, errorCallback ));

/*
7. Write a function that filters elements of the given array so that they satisfy a condition
given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3]
*/

function filterOddElement(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
}

function callBackFunOdd (array, filterFun) {
    return filterFun(array);
}

console.log(callBackFunOdd([2, 8, 11, 4, 9, 3], filterOddElement));