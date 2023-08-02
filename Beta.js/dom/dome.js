let products = [
  {
    name: "IphoneX",
    price: "200",
    img: "asset/test-bg.jpg",
  },
  {
    name: "shoe",
    price: "100",
    img: "asset/hotel1.jpg",
  },
  {
    name: "speck",
    price: "300",
    img: "asset/skyscraper4.jpg",
  },
  {
    name: "oil",
    price: "400",
    img: "asset/skyscraper5.jpg",
  },
];
let text;
let product;
for (product in products) {
  text += `<img src="${products[product].img}" height="150"/>" <br> ${products[product].name} <br> ${products[product].price} 
  <button class="btn" id="btn"> Add to cart </button>  <br>`;
}
let div = document.getElementById("mydiv");
div.innerHTML = text;
let search = document.getElementById("search")
let input = document.createElement("input")
search.appendChild(input)
input.setAttribute("value","search")
input.setAttribute("placeholder","type something")
input.setAttribute("type","number")
input.onchange = ()=>{
    alert("mercy")
}
let body = document.querySelectorAll(".btn")
// return all element with class btn in an array
let m;
body.forEach(i=>{
    i.addEventListener("click",function(){
      alert("Added to cart")
      i.innerHTML = "Go to cart"
      i.setAttribute("disabled","disabled")
      // i.style.display = "none"
      // will remove the button totally
    })
    i.addEventListener("dblclick",function(){
      i.setAttribute("disabled","disabled")
      i.style.display = "none"
      // will remove the button totally
    })

})

// let body = document.getElementById("mydiv")
// let btn = document.getElementById("btn")
// let arr = []
// for(j of body.children){
//   arr.push(j)
// }
// for(let i=3;i<arr.length;i+=5){
//    arr
// }

// it returns the children under body or whatever tag you have and returns it as an array

// let female = "tolu"
// let manle = "bolu"
// // back tick allows you to write anything without quote or addition sign but put variables in curly bracket
// // and put the dollar sign b4 it else it will write it like that
// console.log(`${female} is a girl and ${male} is a boy`)
// tags are element and all those thing inside like class and id are attribute
