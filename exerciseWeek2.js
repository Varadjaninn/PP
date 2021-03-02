var a = 4
var b = 3

if (a > b) {
    console.log(a)
} else {console.log(b)}





var a = 3;
var b = 4;
var c = 9;

if (a%2===0) {
    console.log('even')
} else {console.log('odd')}

if (b%2===0) {
    console.log('even')
} else {console.log('odd')}

if (c%2===0) {
    console.log('even')
} else {console.log('odd')}





var a = 15;
var b = 12;

if (a % 3 === 0 && a % 5 === 0) {
    console.log (a)
}

if (b % 3 === 0 && b % 5 === 0) {
    console.log (b)
}





var a = 3;
var b = -7;
var c = 2;

if ((a+b+c)>=0) {
    console.log ('The sign is +')
} else {console.log ('The sign is -')}





var a = 10;
if (typeof a === 'number' && a % 2 === 0) {
    console.log (a/2) 
} else {console.log ('X') }

var a = 7;
if (typeof a === 'number' && a % 2 === 0) {
    console.log (a/2) 
} else {console.log ('X') }





var result = '', a = -5, b = -2, c = -6, d = 0, e = -1;

if (a > b && a > c && a > d && a > e) {
result = a;
} else if (b > a && b > c && b > d && b > e) {
    result = b;
} else if (c > a && c > b && c > d && c > e) {
    result = c;
} else if (d > a && d > b && d > c && d > e) {
    result = d;
} else if (e > a && e > b && e > c && e > d) {
    result = e;
}
console.log(result)







var x= 0;
var y=-1;
var z= 4;
		if (x>y && x>z)
		{
				if (y>z)
				{
					console.log(x + ", " + y + ", " +z);
				}
				else
				{
					console.log(x + ", " + z + ", " +y);
				}
		}
		else if (y>x && y >z)
		{
				if (x>z)
				{
					 console.log(y + ", " + x + ", " +z);
				}
				else
				{
					 console.log(y + ", " + z + ", " +x);
				}
		}
		else if (z>x && z>y)
		{
				if (x>y)
				{
					console.log(z + ", " + x + ", " +y);
				}
				else
				{
					console.log(z + ", " + y + ", " +x);
				}
		}  