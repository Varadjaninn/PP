/*
1. Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
● takes 4 arguments: number of children, partner's name, geographic location, job title.
● outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N
kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(children, partner, location, job) {
    return 'You will be a ' + job + ' in ' + location + ', and married to ' + partner + ' with ' + children + ' kids.';
}

console.log(tellFortune(2, 'Marina', 'Madeira', 'programmer'));
console.log(tellFortune(4, 'Monika', 'Kuala Lumpur', 'enologist'));
console.log(tellFortune(5, 'Sofia', 'Palma de Mallorca', 'Hotel GM'));



/*
2. You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
● takes 1 argument: your puppy's age.
● calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
● outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
years.
*/

function calculateDogAge(age, rate) {
    var dogsYears = age * rate;
    return 'Your doggie is ' + dogsYears + ' years old in dog years!'
}

console.log(calculateDogAge(7, 7));
console.log(calculateDogAge(3, 7));
console.log(calculateDogAge(12, 7));


/*
3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
● takes 2 arguments: age, amount per day.
● calculates the amount consumed for rest of the life (based on a constant max age).
● outputs the result to the screen like so: "You will need NN to last you until the ripe old age of
X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/


function calculateSupply(age, dailyamount) {
    var maxAge = 100;
    var daysLeft = (maxAge - age)*365;
    var lifeSuply = parseInt(daysLeft * dailyamount);

    return 'You will need ' + lifeSuply + ' kg to last you until the ripe old age of ' + maxAge + '.';
}

console.log(calculateSupply(77, 0.433));
console.log(calculateSupply(36, 0.743));
console.log(calculateSupply(21, 0.52148));


/*
4. It's hot out! Let's make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
● Store a celsius temperature into a variable.
● Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
● Now store a fahrenheit temperature into a variable.
● Convert it to celsius and output "NN°F is NN°C."
*/
function celsiusToFahrenheit(number) {
    var celsius = number;
    var fahrenheit = (number * 9)/5 + 32;
    return celsius + '°C is ' + fahrenheit + '°F';
}
console.log(celsiusToFahrenheit(20))

function fahrenheitToCelsius(number) {
    var fahrenheit = number;
    var celsius = ((number - 32)*5) /9;
    return fahrenheit + '°F is ' + celsius + '°C';
}
console.log(fahrenheitToCelsius(75))