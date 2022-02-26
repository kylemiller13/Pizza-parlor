//Business Logic 
function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}
Pizza.prototype.price = function(){
  let price = 14;
  for (let i = 0; i < this.toppings.length; i++) {
      price += 1;
    }
  if (this.size === "medium"){
    price += 3;
  }
  if (this.size === "large"){
    price += 3;
  }
  return price;
};
//UI Logic
$(document).ready(function() {
  $(".userOutput").hide();
  $("#orderBtn").click(function(event){
    let pizza = new Pizza($("input[name=topping]:checked"),$("#size option:selected").val()); 
   $("#result").text(pizza.price());
   $(".userOutput").show();
    event.preventDefault();
  });
});