/*

Bookmaker’s

In your IDE of choice, create a new JavaScript file named booking-house.js 
and make it so that all code written in the file follows JS strict mode.

Create an anonymous immediately-invoking function that will hold main execution 
of all program calls. Make sure that functions that you write in this function 
are pure functions.

Create constructor functions with properties representing the following:
Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
Person - name, surname, date of birth
Player - person, bet amount, country (instance of Country)
Address - country, city, postal code, street and number
BettingPlace - address and list of players (initially empty)
BettingHouse - competition, list of betting places (initially empty) and 
number of players

Create continents as constants (objects that can not change). 
So, when passing a continent as a parameter, you should pass Continent.ASIA.

Add a method to Person that returns a formatted string containing 
the name, surname and date of birth of the person (date of birth in dd.mm.yy format).

Add a method to Address that returns a formatted string like the following one:
Nemanjina 4, 11000 Beograd, SR

Add a method to Player that returns a formatted string containing a country, 
expected win amount (odds * bet amount) and person data.
SR, 1050.00 eur, Pera Peric, 29 years

Add a method to BettingPlace that returns a formatted string containing 
a street (without a number), postal code and city, 
and sum of all bet amounts of that place.
Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

Add a method to BettingPlace that adds a player to the players list of 
a betting place. 

Inside your immediately-invoking function, add a function that returns 
a created Player.

Inside your immediately-invoking function, add a function that creates 
a BettingPlace.

Create an instance of the BettingHouse that receives the name of competition.

Create four players with random data. Create two betting places. 
Add created players as you wish to Betting places. 
Add betting places to the betting house.

Display all betting house data in the following manner:




Football World Cup Winner, 2 betting places, 4 bets
	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
		SR, 1050.00 eur, Pera Peric, 29 years
		SR, 1050.00 eur, Pera Peric, 29 years
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
		GR, 1050.00 eur, Pera Peric, 29 years
		SR, 1050.00 eur, Pera Peric, 29 years
There are 3 bets on Serbia

*/

'use strict';

(function () {

    // const continent = {
    //     ASIA = 'AS',
    //     EUROPE = 'EU',
    //     AFRICA = 'AF',
    //     SOUTH_AMERICA = 'SA',
    //     NORTH_AMERICA = 'NA',
    //     AUSTRALIA = 'AU'
    // }

    function Country(name, odds, continent) {
        if (!name || !odds || !continent) {
            throw new Error ('Invalid Country data input')
        }
        if (!['EU', 'AS', 'AF', 'SA', 'NA', 'AU'].includes(continent)) {
            throw new Error ('Invalid continent input');
        }
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surname, dateOfBirth) {
        if (!name || !surname || !dateOfBirth) {
            throw new Error ('Invalid Person data input');
        }

        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
        //adding "person method"
        this.personData = function () {
            var year = this.dateOfBirth.getFullYear();
			var month = this.dateOfBirth.getMonth() + 1;
			var day = this.dateOfBirth.getDate();
            return this.name + ', ' + this.surname + ', ' + day + '.' + month + '.' + year;
        }
    }

    function Player(person, betAmount, country) {
        if (!person || !betAmount || !country) {
            throw new Error ('Invalid Player data input');
        }
        if (!(country instanceof Country)) {
            throw new Error ('Invalid country input');
        }
        if (!(person instanceof Person)) {
            throw new Error ('Invalid person input');
        }

        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

        this.playerData = function () {
            //expected win amount
            var winAmount = (country.odds * this.betAmount) + ' eur';
            //date
            var year = person.dateOfBirth.getFullYear();
			var month = person.dateOfBirth.getMonth() + 1;
			var day = person.dateOfBirth.getDate();
            var today = new Date();
            var currentYear = today.getFullYear();
            var currentMonth = today.getMonth() + 1;
            var currentDay = today.getDate();
            var howOld = function () {
                if (month === currentMonth) {
                    if (day < currentDay) {
                        return ((currentYear - year) - 1) + ' years';
                    } else {
                        return (currentYear - year) + ' years';
                    }
                } else if (month > currentMonth) {
                    return ((currentYear - year) - 1) + ' years';
                } else {
                    return (currentYear - year) + ' years';
                };
            };
            return this.country.name + ', ' + winAmount + '. ' + this.person.name + ' ' + this.person.surname + ', ' + howOld();
        }
    }

    function Address(country, city, postalCode, street, number) {
        if (!country || !city || !postalCode || !street || !number) {
            throw new Error ('Invalid Address data input');
        }  
        
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        //adding address method
        this.addressData = function () {
            return this.street + ' ' + this.number + ', ' + this.postalCode + ' ' + this.city + ', ' + this.country;
        }
    }

    function BettingPlace(address) {
        if (!address || !(address instanceof Address)) {
            throw new Error ('Invalid betting place data input');
        }
        this.address = address;
        this.listOfPlayers = [];

        this.sumOfAllBets = function () {
                var sum = 0;
                this.listOfPlayers.forEach (function (player) {
                    sum += player.betAmount;
                })
                return sum;
            }
        this.bettingPlaceData = function () {
            return this.street + ', ' + this.postalCode + ' ' + this.city + ', sum of all bets: ' + sumOfAllBets() + 'eur';
        }

        this.addPlayer = function (player) {
            if (!player || !(player instanceof Player)) {
                throw new Error ('Invalid player data input');
            }
            this.listOfPlayers.push(player);
        }
    }

    function BettingHouse(competition, numberOfPlayers) {
        if (!competition || !numberOfPlayers) {
            throw new Error ('Invalid betting house data input');
        }
    }

    function createdPlayer(personName, personSurname, dob, betAmount, countryName, odds, continent) {
        var person = new Person(personName, personSurname, dob);
        var country = new Country(countryName, odds, continent);
        return new Player()
    }





//testing

    try {
        var osoba1 = new Person('Nemanja', 'Varadjanin', '12/15/1985')
        console.log(osoba1.personData());

        var osoba2 = new Person('Pera', 'Peric', '05/03/1992');
        console.log(osoba2.personData());

        var zemlja1 = new Country('SR', 10.5, 'EU')

        var adresa1 = new Address('SR', 'Beograd', '11000', 'Nemanjina', 4)
        console.log(adresa1.addressData());

        var igrac1 = new Player(osoba2, 100, zemlja1);
        console.log(igrac1.playerData());
        var igrac2 = new Player(osoba1, 74, zemlja1);
        console.log(igrac2.playerData());



    } catch (error) {
        console.log('Error message:' + error.message);
    }

    
}) ()





