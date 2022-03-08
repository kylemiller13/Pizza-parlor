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
    price += 6;
  }
  return price;
};
//UI Logic
$(document).ready(function() {
  $(".userOutput").hide();
  $("#orderBtn").click(function(event){
    let toppingsArray = [];
    $("input[name=topping]:checked").each(function() {
    toppingsArray.push(this.value);
  });
    let pizza = new Pizza($("input[name=topping]:checked"),$("#size option:selected").val()); 
  $("#result").text(pizza.price());
  $(".userOutput").show();
    event.preventDefault();

  });
});