//Buisness Logic
function BuildPizza () { 
  this.pizza 
}


function Pizza(size, cheese, sauce, toppings) {
this.size = size;
this.cheese = cheese;
this.sauce = sauce;
this.toppings = toppings;

Pizza.prototype.buildPizza = function() {
 return this.size + ' ' + this.cheese + ' ' + this.sauce + ' ' + this.toppings
}
}


// UI logic


$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const flavor = $("input:radio[name=size]:checked").val();
    const firstName = $("#name1").val();
    const lastName = $("#name2").val();
    const result = (firstName + " " + lastName);
    const receiptText = " Thank you for your Purchase!"
    $("#output").text(result + " - " + flavor.toUpperCase() + " " + receiptText);
    $("#output").show();
  });
});