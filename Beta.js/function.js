// you specify a function using the keyword 'function'
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
    price:280
  },
];

function showOrder(){
let i
let text = ""
for (i in items) {
  if (items[i].name == "rice") {
   text += "johnson ordered for " + items[i].name + "<br>"
  } else if (items[i].name == "semo") {
    text += "mercy ordered for " + items[i].name  + "<br>"
  } else if (items[i].name == "spag") {
        text += "yetunde ordered for " + items[i].name + "<br>";
  } else {
    text += "nobody ordered"
  }
}
document.getElementById("people").innerHTML = text
}
