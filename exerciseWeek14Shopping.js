/*
In your IDE of choice, create a new JavaScript file named shopping.js and 
make it so that all code written in the file follows strict mode.

Create an anonymous immediately-invoking function that will 
hold the main execution of all program calls. 
Writing a simple command console.log(“Hi”) inside this function 
and running the code should output “Hi“ in the console.

Create constructor functions with properties representing the following “things”:
Product - product id (random number of 5 digits generated on every product 
creation), name, price (with 2 decimal places), expiration date
ShoppingBag - a list of products (initially empty; 
function constructor does not have any input parameters)

Add getInfo method to Product. It should return a formatted string containing 
product code (the first and last letter of the name together with the product id)
, name and price."Banana" -> BA32784, Banana, 129.31
 
Add addProduct method to ShoppingBag. It should receive a Product 
and add it to the product list. 
You can add a product to the list only if it has a valid expiration date.  

Add a method to ShoppingBag that calculates the average product 
price of products in your product list 
and prints out this value with the precision of three decimals. 

Add getMostExpensive method that finds the most expensive product and prints 
out its info.

Add calculateTotalPrice method to ShoppingBag that calculates the total 
price of products in the shopping bag list. 

Create a constructor function with properties representing the following:

PaymentCard - account balance (number with 2 decimal places), 
active or inactive status, valid until date	

Create checkoutAndBuy function which receives shopping bag and payment card 
and prints if the purchase is successful or not. 
Purchase is successful only if the amount on the card is greater or equal to 
the total price of products in the shopping bag. 
If there is not enough money, print out the amount that is missing to complete 
the purchase.
*/

"use script";

(function () {
    
    function Product( name, price, expirationDate) { 
        if (!name || !price || !expirationDate) {
            throw new Error ('Invalid input');
        }
        this.id = Math.round( 89999 * Math.random() + 10000 );
        this.name = name;
        this.price = Number(Math.round(price+'e2')+'e-2');
        this.expirationDate = new Date(expirationDate);

        this.getInfo = function () {
            return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase() + this.id + ', ' + this.name + ', ' + this.price;
        }
    }

    function ShoppingBag() {
        this.listOfProducts = [];
        this.addProduct = function (product) {
            if (!product || !(product instanceof Product)) {
                throw new Error ('Invalid product data');
            }
            var today = Date.now();
            if (today < product.expirationDate) {
                this.listOfProducts.push(product);
            }
        }
        this.getAverageProductPrice = function () {
            var sum = 0;
            this.listOfProducts.forEach(function (product) {
                sum += product.price;
            })
            var averagePrice = sum/this.listOfProducts.length;
            return Number(Math.round(averagePrice + 'e3') + 'e-3');
        }
        this.getMostExpensive = function () {
            var mostExpensive = this.listOfProducts[0].price;
            var final;
            this.listOfProducts.forEach(function(product) {
                if (product.price >= mostExpensive) {
                    mostExpensive = product.price;
                    final = product.getInfo();
                }
            }); 
            return final;
        }
        this.calculateTotalPrice = function () {
            var total = 0;
            this.listOfProducts.forEach(function (product) {
                total += product.price;
            });
            return total;
        }
    }

    function PaymentCard(accountBalance, status, validUntilDate) {
        if (!accountBalance || !status || !validUntilDate) {
            throw new Error ('Invalid input');
        }
        
        if (!['active', 'inactive'].includes(status)) {
            throw new Error('Invalid status input')
        }

        this.accountBalance = Number(Math.round(accountBalance +'e2')+'e-2');
        this.status = status;
        this.validUntilDate = new Date(validUntilDate);
        var today = Date.now();

        this.isValid = function () {
            return (this.validUntilDate > today); 
        }
    }

    function checkoutAndBuy(shoppingBag, paymentCard) {
        if (!shoppingBag ||  !(shoppingBag instanceof ShoppingBag)) {
            throw new Error('Invalid Shopping bag input');
        }
        if (!paymentCard ||  !(paymentCard instanceof PaymentCard)) {
            throw new Error('Invalid Payment card input');
        }
        this.shoppingBag = shoppingBag;
        this.paymentCard = paymentCard;
        
        var cashback = this.shoppingBag.calculateTotalPrice() - this.paymentCard.accountBalance;
        if (paymentCard.status === 'active' && paymentCard.isValid()) {
            if (paymentCard.accountBalance >= shoppingBag.calculateTotalPrice()) {
                return 'The purchase is successful';
            } else {
                return 'You are missing: ' + Number(Math.round(cashback +'e2')+'e-2') + 'din.';
            }
        } else {
            return 'Payment card either expired or it is invalid';
        }

    }



    //testing

    try {

        var proizvod1 = new Product ('banana', 100.67728, '05/06/2022');
        var proizvod2 = new Product ('strawberries', 200.78546, '07/07/2022')
        var proizvod3 = new Product ('kiwi', 450.78546, '08/08/2022')
        console.log(proizvod1);
        console.log(proizvod1.getInfo());
        console.log(proizvod2.getInfo());


        var korpa = new ShoppingBag();
        korpa.addProduct(proizvod1);
        console.log(korpa.listOfProducts);
        korpa.addProduct(proizvod2);
        console.log(korpa.listOfProducts);
        korpa.addProduct(proizvod3);
        console.log(korpa.listOfProducts);
        console.log(korpa.getAverageProductPrice());
        console.log(korpa.getMostExpensive());
        console.log(korpa.calculateTotalPrice());

        var kartica = new PaymentCard(900.5444, 'active', '05/30/2021.');
        console.log(checkoutAndBuy(korpa, kartica));

        var kartica1 = new PaymentCard(700.5444, 'active', '05/30/2021.');
        console.log(checkoutAndBuy(korpa, kartica1));
        
    } catch (error) {
        console.log('Error message:' + error.message);
    }

}) ()


