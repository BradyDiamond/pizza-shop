

function Pizza(size, toppings,) {
this.size = size;
this.toppings = toppings;
this.getPrice();
}


Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

  Pizza.prototype.getPrice = function() {
    this.price = 0;

    if (this.size === "small") {
      this.price = 5 ;
    } else if (this.size === "medium") {
      this.price = 10;
    } else { 
    this.price = 15;
    }
    this.price += this.toppings.length * 1.5 ; 

};


// UI logic

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    let toppings = [];
    $("input:checkbox[name=topping]:checked").each(function() {
    toppings.push($(this).val());
    });
    let myPizza = new Pizza(size, toppings)
    const outputArray = Object.values(myPizza)
    $('#output').text(outputArray)
  });
});
