var a = 3;
var b = 2
var c = 31

var Mood = "stupid";
console.log (Mood)

var d = a - b - c;
var e = a * 5 - 7 / a
console.log (d,e)

var kilogram = 1000
var ukupnoKilogramaBanana = 1.2
var ukupnogramaBanana = ukupnoKilogramaBanana * kilogram 
console.log (ukupnogramaBanana)

var min = 60
var Anna = 5 * min
var Tom = 30 * min
console.log (Anna, Tom)

var MB = 1000
var newsArticleNo = usbStick / 98
var GB = MB * 1000
var usbStick = 4 * GB
console.log(usbStick,newsArticleNo)

//DEVET NE ZNAM

var name = 'Nemanja';
var age = 35;
var cat = false;

console.log (typeof name, typeof age, typeof cat)

    typeof "number",
    typeof true,
    typeof null,
    typeof "false",
    typeof 56

console.log (!!min, !!cat, !!name)




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


var age = 35;
console.log (!age, age>120)


var speed = 130;

if (speed < 60 || speed > 120) 
    {speed = 'over the speed limit'}
else {speed = 'proper speed'}
console.log(speed)


var speed = 85;

(speed < 60 || speed > 120) ? console.log ('over the speed limit') : console.log ('proper speed')