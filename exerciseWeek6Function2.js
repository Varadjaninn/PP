/*1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false
*/

function checkIsString(a) {
    return typeof a === "string";
}

var a = "Nemanja";
result = checkIsString(a);
console.log(result);



/*
2. Write a function to check whether a string is blank or not.
"My random string" -> false
"" -> true
12 -> false
false -> false
*/

function isBlank(a) {
    if (a === "") {
        return true;
    } else {
        return false;
    }
}

var a = "";
result = isBlank(a);
console.log(result)

/*
3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/

function conCat(a,n) {
    newString = "";
    for (var i = 0; i <= n; i++) {
        if (i !== n) {
            newString += a;
        }
    } return newString;
}
var result = conCat("Ha", 3)
console.log(result)

/*4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/

function lettOcc(str, n) {
    var result = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === n) {
            result++;
        } 
    } 
    return result;
}
var final = lettOcc("My random string", "n");
console.log(final)


/*
5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.
*/

function occPos(str, n) {
    var charPosition = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === n) {
            charPosition = i;
            break;
        } else {
            charPosition = -1;
        }
    }
    return charPosition;
}

var result = occPos("varadjanin", "n");
console.log(result)


/*
6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.
*/

function lastOcc(str, n) {
    var charPosition = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === n) {
            charPosition = i + 1
        } else {
            charPosition = -1;
        }
    }
    return charPosition;
}

var final = lastOcc ("varadjanin", "n");
console.log(final)


/*
7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/

function convStr(str) {
    var newArray = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newArray[newArray.length] = null;
        } else {
            newArray[newArray.length] = str[i];
        }
    } return newArray;
}

var final = convStr("My random string");
console.log(final)



/*
8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/

function checkPrime(n) {
    var number = 0;
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            number++;
        }
    } if (number > 0) {
        number = "not a prime number"
    } else {
        number = "prime number"
    }
    return number;
}

var final = checkPrime(7);
console.log(final)


/*
9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/

function repSpc(str, sep) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newString += sep;
        } else {
            newString += str[i]; 
        }
    }
    return newString;
}

var result = repSpc("My random string", "-");
console.log(result)


/*
10. Write a function to get the first n characters and add “...” at the end of newly created string.
*/

function addDots(str, n) {
    var newStr = "";
    for ( var i = 0; i < n; i++) {
        newStr += str[i];
    }
    newStr += "..."
    return newStr;
}
var result = addDots("My random string", 5);
console.log(result)


/*
11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

function convArr(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var conv = parseFloat(array[i]);
        if (isFinite(conv)) {
            newArray[newArray.length] = conv;
        }
    }
    return newArray
}

var result = convArr(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log (result)


/*
12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.
*/

function yearsTillRetirement(yearOfBirth, gender) {
    var age = 2021 - yearOfBirth;
    var retirementM = 65 - age;
    var retirementF = 60 - age;
    if (gender === "m") {
       if (age < 65) {
            return retirementM;
            } else {
                return  "Already retired";
            }
        } else {
            if (age < 60) {
                return retirementF;
            } else {
                return "Already retired";
            }
        }
    }
var result = yearsTillRetirement(1970, "m");
console.log (result) 

/*
13. Write a function to 
humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/

function redExer(n) {
    var str = "" + n;
    if (str[str.length -1] >= 1 && str[str.length - 1] <= 3 && str[str.length - 2] == 1) {
        str += "th";
    } else if (str[str.length -1] == 2) {
        str += "nd";
    } else if (str[str.length -1] == 3) {
        str += "rd";
    } else if (str[str.length -1] == 1) {
        str += "st";
    } else {
        str += "th";
    }
    return str;
}
console.log(redExer(211)); //???

//dario:
function humanizeNumber(num) {
    if (typeof num == "undefined") {
        return;
    }
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }
    switch (num % 10) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
    }
    return num + "th";
}
