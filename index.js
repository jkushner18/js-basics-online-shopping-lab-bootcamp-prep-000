var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

var itemPrice=Math.floor(Math.random()*100);

var newCartItem = {}

newCartItem[item]=itemPrice

cart.push(newCartItem)

console.log(item+" has been added to your cart.")

return cart

}

function viewCart() {
  
for(var i = 0;i<=cart.length ;i++){
  
var statement = "In your cart, you have "
  
if (cart.length===0)  {
  
console.log("Your shopping cart is empty.")  

}

else if(cart.length==1){

console.log("'"+ statement + Object.keys(cart[i])+ " at " + "$" + cart[i][Object.keys(cart[i])[0]]+ "." + "'") }
  
else {console.log("nope")}
  
}
  } 


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
