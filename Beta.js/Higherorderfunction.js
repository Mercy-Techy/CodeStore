// higher order function
// function CHE(){
//     console.log("The Best CHE Department In Lautech");
// }
// function CSE(){
//     console.log("The CSE Best Department In Lautech");
// }
// function APH(){
//     console.log("The Best APH Department In Lautech");
// }

// function Lautech(){
// CHE();
// CSE();
// APH();
//  }
// // the function that swallows another function is the higher order function che is like its child
// // so function lautech is a higher order function.a function can call different functions
//  Lautech()
// how to call a function without calling it fully
// (function mercy(){
//     console.log("mercy is good sister");
// })()
// enclose all in a bracket and put bracket after

// // Event
// onchange
// onclick
// ondblclick
// onkeydown(when u press any button it will run so also with onkeyup)
// onkeyup
// // everything on

let items = [
  {
    name: "rice",
    qty: 8,
    price: 24000,
  },
  {
    name: "semo",
    qty: 10,
    price: 4500,
  },
  {
    name: "spag",
    qty: 7,
    price: 280,
  },
];
function whatsAppHandler() {
  let text = document.getElementById("typist").value;
  let i;
  for(i in items){
  if (text == items[i].name) {
    document.getElementById("demo").innerHTML =
      "Sorry " +
      text +
      " is now expensive.the price is " +
      items[i].price;
  }
  }
}
//  higher order funtion can also contain a function and not only it call but when writhing that function
// it should be self called.





