/*
1. Write a program that shows text representation of a day in a week for a number input from
1 to 7. Print output in console.
For input 1, output should be “Monday”.
*/

var date = 1;
var result = '';

switch (date) {
    case 1:
       result = 'Monday';
         break;
    case 2:
        result = 'Tuesday';
         break;
    case 3:
        result = 'Wednesday';
         break;
    case 4:
        result = 'Thursday';
         break;
    case 5:
        result = 'Friday';
         break;
    case 6:
        result = 'Saturday';
         break;
    case 7:
        result = 'Sunday';
         break;
    default:
        result = 'Input must be a number between 1 and 7';
         break;
}
console.log (result)

/*
3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
is a weekday or weekend. All other cases output a message explaining that input must be a
number between 1 and 7.
For input 2, output should be “It’s weekday”.
For input 6, output should be “It’s weekend”.
For input 12, output should be “Input must be number between 1 and 7”.
*/

var date = 5;
var result = '';

switch (date) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'Weekday'
        break;
    case 6:
    case 7:
        result = 'Weekend'
        break;
    default:
        result = 'Input must be a number between 1 and 7'
        break;
}
console.log (result)

/*
4. Write a program that for a 1-12 number input (representing a month in a year) shows that
month’s name. All other cases output a message explaining that input must be a number
between 1 and 12.
For input 2, output should be “February”.
For input 6, output should be “June”.
For input 13, output should be “Input must be a number between 1 and 12”.
*/

var month = 3;
var result = '';

switch (month) {
    case 1:
        result = 'January'
        break;
    case 2:
        result = 'February'
        break;
    case 3:
        result = 'March'
        break;
    case 4:
        result = 'April'
        break;
    case 5:
        result = 'May'
        break;
    case 6:
        result = 'June'
        break;
    case 7:
        result = 'July'
        break;
    case 8:
        result = 'August'
        break;
    case 9:
        result = 'September'
        break;
    case 10:
        result = 'October'
        break;
    case 11:
        result = 'November'
        break;
    case 12:
        result = 'December'
        break;
    default:
        result = 'Input must be a number between 1 and 12'
        break;
}
console.log (result)

/*
5. Write a program that for a 1-12 number input (representing a month in a year) shows what
season it is. All inputs different from 1-12 output a message explaining that input must be a
number between 1 and 12.
*/


var month = 7;
var result = '';

switch (month) {
    case 1:
    case 2:
    case 12:
        result = 'Winter';
        break;
    case 3:
    case 4:
    case 5:
        result = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        result = 'Summer';
        break;
    case 9:
    case 10:
    case 11:
        result = 'Autumn'
    default:
        result = 'Input must be a number between 1 and 12'
        break;
}
console.log (result)

/*
6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
message about that grade in the following manner: A - &quot;Good job&quot;&quot;, B - &quot;Pretty good&quot;&quot;, C -
&quot;Passed&quot;&quot;, D - &quot;Not so good&quot;&quot;, F - &quot;Failed&quot;. Input different from letters A-F outputs a message
&quot;Unknown grade&quot;.
*/

var grade = 'A';
var result = '';

switch (grade) {
    case 'A':
        result = 'Good job';
        break;
    case 'B':
        result = 'Pretty good';
        break;
    case 'C':
        result = 'Passed';
        break;
    case 'D':
        result = 'Not so good';
        break;
    case 'F':
        result = 'Failed';
        break;
    default:
        result = 'Unknown grade'
        break;
}
console.log (result)

/*
7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;.
*/

var city = 'Uzice';
var country = '';

switch (city) {
    case 'Lisbon':
    case 'Porto':
    case 'Setubal':
    case 'Madeira':
    case 'Braga':
        country = 'Portugal';
        break;
    case 'Munchen':
    case 'Berlin':
    case 'Frankfurt':
    case 'Koln':
    case 'Nuremberg':
        country = 'Germany';
        break
    case 'Rome':
    case 'Milano':
    case 'Florence':
    case 'Naples':
    case 'Venice':
        country = 'Italy';
        break;
    case 'Athens':
    case 'Thessaloniki':
    case 'Larisa':
    case 'Kavala':
    case 'Corfu':
        country = 'Greece';
        break;
    case 'Belgrade':
    case 'Novi_Sad':
    case 'Nis':
    case 'Kragujevac':
    case 'Uzice':
        country = 'Serbia'
        break;
    default:
        country = 'Please choose a different city';
        break;
}
console.log (country)

/*
8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
”, “*”, “/”) and prints out the appropriate result.
*/
var a = 6;
var b = 3;
var operation = '*';
var result = '';

switch (operation) {
    case '+':
        result = (a + b);
        break;
    case '-':
        result = (a - b);
        break;
    case '*':
        result = (a * b);
        break;
    case '/':
        result = (a / b);
        break;
    default:
        result = 'unknown operation'
        break;
}
console.log (result)