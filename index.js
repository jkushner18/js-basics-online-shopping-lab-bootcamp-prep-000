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
  
if(cart.length===0) {
 
 return console.log('Your shopping cart is empty.') 
  }

var allkeys=[];

for(var i = 0; i<cart.length;i++){
  
var itemandprice = cart[i]

var item = Object.keys(itemandprice)

var price = itemandprice[item];
  

allkeys.push(item + " at " + "$" +price) }

if (cart.length==1){

console.log("In your cart, you have "+ allkeys[0] +".") 
  
}

if (cart.length==2){
  
return console.log("In your cart, you have "+ allkeys[0] + " and " + allkeys[1] + ".")
  
} 

if (cart.length>=3){
  
var last = allkeys.pop();

return console.log("In your cart, you have " + allkeys.join(', ') + ", and " + last +".")


} }




function total() {

var result = 0;  
  
for (var i=0 ; i<cart.length; i++){
  
var itemAndPrice = cart[i];

var item = Object.keys(itemAndPrice);

var price = itemAndPrice[item];

result += price;}

return result} 




function removeFromCart(item) {
  
var allkeys=[];
  
for(var i = 0; i<cart.length;i++){
  
var itemandprice = cart[i];

var key = Object.keys(itemandprice)

allkeys.push(key);


}
 return allkeys 
  
}




function placeOrder(cardNumber) {
  // write your code here
}
