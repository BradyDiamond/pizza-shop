

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
    const size = $("#size").val() + " ";
    // const toppings= " " + $("#topping").val();
    let toppings = [];
    $("topping").each(function(element) {
      topping.push($('#topping').val());
    });
    let myPizza = new Pizza(size, toppings)
    console.log(myPizza)
    const outputArray = Object.values(myPizza)
    $('#output').text(outputArray)
   
  });
});


