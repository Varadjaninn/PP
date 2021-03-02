/*
1. Create several variables using different letter cases and beginning characters. Check if they
still exist if you refer to them in different case - does case matter here? Try to declare a variable
starting with number as the first character.
*/

var Vezba;
var _nesto = 10;
var $varijabla = '';
var 1kafa

/*
2. Save a string (text) describing your current mood in a variable and print it out in console.
*/

var Mood = 'Sleepy';
console.log (Mood)

/*
4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?
*/

var a = 3;
var b = 2;
var c = 31;
var Result = a-b-c;

console.log(Result)

var a = 4;
var b = 2;
var c = 1.14;
var d = 3;
var Result = a/b-c*d;

console.log (Result)

//5. How many grams weight 1.2kg of bananas?

var banana = 1.2;
var kilogram = 1000;
var bananaUGramima = banana * kilogram;
console.log (bananaUGramima+' g')

/*
6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
about Tom who is being late half an hour? It is hard to be on time these days…
*/

var minut = 60;
var Anna = 5 * minut;
var Tom = 30 * minut;

console.log (Anna + ' sekundi'+','+ Tom + ' sekundi')

/* 
7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
articles each in size 98KB can fit in it?
*/

var GB = 1000;
var USB = 4 * GB;
var article = 0.098;

console.log (USB + ' MB' + ' , ' + (USB / article) + ' articles')

/*
9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?
*/

var a = 5;
a *= 2;
console.log (a)

/*
10. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.
*/

var Name = 'Nemanja';
var Age = 35;
var Cat = false;

console.log(typeof Age);



/*
13. Use the console to check the results you think should go in the following table:
*/

var p = true;
var q = true;
console.log (p&&q, p||q)

var p = true;
var q = false;
console.log (p&&q, p||q)

var p = false;
var q = true;
console.log (p&&q, p||q)

var p = false;
var q = false;
console.log (p&&q, p||q)


/*
14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120
*/

var age = 35;

if (age === 35) {
    console.log ('True')
} else ('False')

var age = 35;

if (age < 0 || age > 120) {
    console.log ('False')
} else {
    console.log ('True')
}

/*
15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
we store the current speed value in the variable speed. Write an expression which will check if
we are driving drive safely or not? (true if we are driving safe and false if not)
*/

var Speed = 130;

if (Speed < 60 || Speed > 120) {
    console.log ('False')
} else console.log ('True')