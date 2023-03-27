/*Hello World */
// console.log("HELLO WORLD")
// alert("DURRR")

/*2. Class */

// let serverName = "https://www.google.com.tr"
// let serverIsOpen = false
// if(serverIsOpen === true){
//     console.log(serverName)
// }else{
//     alert("Server is shutting down")
// }

/* 3.Class */

let price = 1000;
let tax = 0.18;
let taxPrice = price * tax;
let totalPrice = price + taxPrice;

console.log(typeof(price))
console.log(typeof(tax))

console.log(
  "Fiyat: " +
    totalPrice +
    " TL" +
    "\n" +
    "Vergi: " +
    taxPrice +
    " TL" +
    "\n" +
    "Vergi Oranı: %" +
    tax * 100
);
