//Business Logic 
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
 
}
// let newPizza = new Pizza();

Pizza.prototype.price = function(){
  let price = 14;
  for (let i = 0; i < this.toppings.length; i++){
    if (this.toppings[i] === "pepperroni" || "sausage" || "onions"){
      price += 1;
    }
  }
  if (this.size === "medium"){
    price += 3;
  }
  if (this.size === "large"){
    price += 3;
  }
  return price;
}

//UI Logic
$(document).ready(function() {
  $("#pizzaOrder").submit(function(event){
    let size = $('#size option:selected').text();
    let toppings = $('input[name=topping]:checked').val();

    event.preventDefault();
  });
});