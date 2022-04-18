 _Brady's Pizza_

#### By _**Brady Diamond**_

#### _A site to build a pizza_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_


## Description

_A website to build a pizza_

## Setup/Installation Requirements

_this webite is availible through my profile located at https://github.com/BradyDiamond_

_Using "git clone" add this repository to your desktop_
_In the cloned folder open "index.html"_
_select your toppings and press "buy my pie" to see your total__

## Known Bugs

* _currently not functional_

## License
_licensed under the [MIT License] (LICENSE)_

_Copyright (c) _2022_ _Brady Diamond_ 

Describe: Pizza()

Test: It will return a Pizza and size
code: function Pizza(medium)
Expected output: Pizza {size: medium}

Test: It will return a Pizza with size and topping
code: Pizza.prototype.addTopping("peperoni") 
Expected output: Pizza {size: medium, peperoni}

Test: It will return a Pizza with size and multiple toppings
code: Pizza.prototype.addTopping("peperoni",  sausage) 
Expected output: Pizza {size: medium, peperoni, sausage}

Test: It will return a Pizza with size and price attatched to size
code: Pizza.prototype.getPrice(small) 
Expected output: Pizza {size: small, price: 5}


Test: It will return a Pizza with size and multiple toppings with price adjusted for base size and topping 
code: Pizza.prototype.addTopping("peperoni",  sausage)
getPrice(medium)
Expected output: Pizza {size: medium, peperoni, 8}

Test: It will return a Pizza with size and multiple toppings with price adjusted for base size and multiple toppings 
code: Pizza.prototype.addTopping("peperoni",  sausage)
getPrice(medium)
Expected output: Pizza {size: medium, peperoni, sausage 8}
