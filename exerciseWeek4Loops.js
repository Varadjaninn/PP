/*1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen.*/

for (x=0; x<=15; x++) {
    if (x%2===0) {
        console.log ('even')
    } else console.log ('odd')
}

//2. Write a program to sum the multiples of 3 and 5 under 1000.
var result = 0;

for (x=0; x<1000; x++) {
    if (x % 3 === 0 || x %5 === 0 ) {
        result += x;
    }
}
console.log (result);


//3. Write a program to compute the sum and product of an array of integers.

var a = [5, 2, 8, 7, 5];
var sum = 0;
var product = 1;

for (x=0; x<a.length; x++) {
    sum += a[x];
    product *= a[x];
}
console.log (sum, product);


// 4. Write a program which prints the elements of the following array as a single string.
// var x = ["1", "A", "B", "c", "r", true, NaN, undefined];

var x = ["1", "A", "B", "c", "r", true, NaN, undefined]

var program = ""; 

for (a=0; a<x.length; a++) {
    program += x[a];
}
console.log (program);


//5. Write a program that prints the elements of the following array.

var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];

console.log (a)



//6. Write a program that outputs the sum of squares of the first 20 numbers.

sum = 0;

for (x=0; x<=20; x++) {
    sum += (x*x)
}

console.log (sum)


/*
7. Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.

David 80
Marko 77
Dany 88
John 95
Thomas 68
The grades are computed as follows :

<60% F
<70% D
<80% C
<90% B
<100% A
*/

var studentMarks = [80, 77, 88, 95, 68];
var Average = 0;


for (x=0; x<studentMarks.length; x++) {
    Average+=studentMarks[x]/studentMarks.length}
    	if (Average<=100 && Average>=90) {
            console.log ("Grade A")
        } else if (Average<90 && Average>=80) {
            console.log ("Grade B")
        } else if (Average<80 && Average>=70) {
            console.log ("Grade C")
        } else if (Average<70 && Average>=60) {
            console.log ("Grade D")
        } else if (Average<60) {
            console.log ("Grade F")
}


/*
8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "&quot;"Fizz"&quot;" instead of the number, and for numbers
divisible by 5 (and not 3), print "&quot;"Buzz"&quot;" instead. When you have that working, modify your
program to print "&quot;"FizzBuzz"&quot;", for numbers that are divisible by both 3 and 5 (and still print
"&quot;"Fizz"&quot;" or "&quot;"Buzz"&quot;" for numbers divisible by only one of those).
Note: This is actually an interview question that has been claimed to weed out a significant
percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
good about yourself.
*/

var x = 1;

while (x <= 100) {
    if (x%3===0 && x%5===0) {
        console.log ("FizzBuzz")
    }
    else if (x%3 === 0) {
        console.log ("Fizz")
    } else if (x%5 === 0) {
        console.log ("Buzz")
    } else console.log (x); 
    x++;
}


