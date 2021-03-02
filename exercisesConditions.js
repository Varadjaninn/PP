/* 
Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
Sample numbers: 3, -7, 2
Output: The sign is -
*/

var Result = '', a = 3, b = -7, c = 2;

if ((a + b + c) < 0 ) {
    console.log(Result = 'The sign is -')
} else console.log (Result = 'The sign is +')


/* 
Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.
Sample numbers: -5, -2, -6, 0, -1
Output: 0 
*/

var Result = '', a = -5, b = -2, c = -6, d = 0, e = -1;

if (a > b && a > c && a > d && a > e ) {
    console.log(Result = a )
} else if (b > a && b > c && b > d && b > e) {
    console.log(Result = b)
} else if (c > a && c > b && c > d && c > e) {
    console.log (Result = c)
} else if (d > a && d > b && d > c && d > e) {
    console.log (Result = d)
} else if (e > a && e > b && e > c && e > d) {
    console.log (Result = e)
}


/*
Task 3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/

var Result = '', a = 0, b = -1, c = 4;

if (a > b && a > c){
    if (b > c) {
        console.log ( Result = a + ',' + b + ',' + c)
    } else {
        console.log ( Result = a + ',' + c + ',' + b)
    }
} else if ( b > a && b > c) {
    if ( a > c) {
        console.log ( Result = b + ',' + a + ',' + c)
    } else {
        console.log ( Result = b + ',' + c + ',' + a )
    }
} else if ( c > a && c > b) {
    if ( a > b) {
        console.log ( Result = c + ',' + a + ',' + b)
    } else {
        console.log ( Result = c + ',' + b + ',' + a)
    }
}



/*
Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10 Sample input: 7
Output: 10 / 2 = 5 Output: X
*/

var Input = 10;

if (typeof Input === 'number') {
    if (Input % 2 === 0) {
        console.log (Input / 2)
    } else {
        console.log ('X')
    }
}


var Input = 7;

if (typeof Input === 'number') {
    if (Input % 2 === 0) {
        console.log (Input / 2)
    } else {
        console.log ('X')
    }
}


/*
Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.
*/

var Result = '', a = 26, b = 15;

if (a > b){
    console.log (Result = a)
} else console.log (Result = b)


/*
Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Sample Input: 60°C
Output : 60°C is 140 °F
*/

var Input = 10;
var Fahrenheit = (9 * Input) / 5 + 32;
var Celsius = ((Fahrenheit - 32) * 5) / 9;


console.log (Celsius + '°C is ' + Fahrenheit + '°F')



/*
Task 7. Write a JavaScript program to get the difference between a given number and 13, if
the number is greater than 13 return double difference between that number and 13.
Sample Input: 11 Sample Input: 32
Output : 2 Output : 38
*/

var Input = 11;

if ( Input > 13) {
    console.log ((Input-13)*2)
} else console.log (13 - Input)


var Input = 32;

if ( Input > 13) {
    console.log ((Input-13)*2)
} else console.log (13 - Input)

/*
Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
values are same, then returns triple their sum.
Sample Input: 12,5 Sample Input: 8,8
Output : 17 Output : 48
*/

var integer1 = 12;
var integer2 = 5;

if (integer1 === integer2) {
    console.log ((integer1 + integer2)*3)
} else console.log (integer1 + integer2)


var integer1 = 8;
var integer2 = 8;

if (integer1 === integer2) {
    console.log ((integer1 + integer2)*3)
} else console.log (integer1 + integer2)

/*
Task 9. Write a JavaScript program to check two given numbers and print “true” if one of
the number is 50 or if their sum is 50.
Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10
*/

var Input1 = 5;
var Input2 = 54;

if (Input1 === 50 || Input2 === 50 || (Input1 + Input2) === 50 ) {
    console.log ('True')
} else console.log ('-')


var Input1 = 6;
var Input2 = 50;

if (Input1 === 50 || Input2 === 50 || (Input1 + Input2) === 50 ) {
    console.log ('True')
} else console.log ('-')


var Input1 = 40;
var Input2 = 10;

if (Input1 === 50 || Input2 === 50 || (Input1 + Input2) === 50 ) {
    console.log ('True')
} else console.log ('-')


/*Task 10. 
Write a JavaScript program to check a given integer is within 20 of 100 or 400,
and print range in which number belongs.
Sample Input: 13 Sample Input: 34 Sample Input: 256
Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
*/

var Integer = 13;

if (Integer < 20 || Integer > 400) {
    console.log ('-')
} else if (Integer > 20 && Integer < 100) {
    console.log ('20 ⇔ 100')
} else if ( Integer > 100 && Integer < 400) {
    console.log ('100 ⇔ 400')
}


var Integer = 34;

if (Integer < 20 || Integer > 400) {
    console.log ('-')
} else if (Integer > 20 && Integer < 100) {
    console.log ('20 ⇔ 100')
} else if ( Integer > 100 && Integer < 400) {
    console.log ('100 ⇔ 400')
}


var Integer = 256;

if (Integer < 20 || Integer > 400) {
    console.log ('-')
} else if (Integer > 20 && Integer < 100) {
    console.log ('20 ⇔ 100')
} else if ( Integer > 100 && Integer < 400) {
    console.log ('100 ⇔ 400')
}