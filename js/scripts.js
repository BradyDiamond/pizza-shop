

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
    $("input:checkbox[name=topping]:checked").each(function() {
     toppings.push($(this).val());
    });
    console.log(toppings)
    let myPizza = new Pizza(size, toppings)
    console.log(myPizza)
    const outputArray = Object.values(myPizza)
    $('#output').text(outputArray)
   
  });
});


