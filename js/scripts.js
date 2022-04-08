

function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
}
Pizza.prototype.addTopping = function(topping) {
 this.toppings.push(topping);
};





// UI logic


$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    const size = $("#size").val();
    let toppings = [];
    $("#topping").each(function(element) {
      toppings.push($('#topping').val());
    });
    let myPizza = new Pizza(size, toppings)
    console.log(myPizza)
  });
});