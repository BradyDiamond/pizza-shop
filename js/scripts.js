

function Pizza(size, toppings) {
this.size = size;
this.toppings = toppings;
}
Pizza.prototype.addTopping = function(topping) {
 this.Pizza.push(topping);
}

























// UI logic


// $(document).ready(function() {
//   $("form#order").submit(function(event) {
//     event.preventDefault();
//     const size = parseInt($("#size").val());
//     $("#output").show();
//   });
// });