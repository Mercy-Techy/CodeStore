
let countries = [
  {
    Name: "Nigeria",
    President: "Mohammodu Buhari GCFR",
    vp: "Prof Yemi Osibanjo",
    PI: "assets/images/Nigeria/buhari.jpg",
    VI: "assets/images/Nigeria/osibanjo.jpg",
    NA: "",
    Flag: "assets/images/Nigeria/nigeria-flag.png",
  },
  {
    Name: "America",
    President: "Joe Biden",
    vp: "Kamala Harris",
    PI: "assets/images/America/presidentA.jpg",
    VI: "assets/images/America/vicepresidentA.jpg",
    NA: "",
    Flag: "assets/images/America/flagA.png",
  },
  {
    Name: "China",
    President: "Xi Jinping",
    vp: "Wang Qishan",
    PI: "assets/images/China/presidentc.jpg",
    VI: "assets/images/China/vicepresidentc.jpg",
    NA: "",
    Flag: "assets/images/China/flagc.jpg",
  },
  {
    Name: "England",
    President: "Queen Elizabeth",
    vp: "Borris Johnson",
    PI: "assets/images/england/president.jpg",
    VI: "assets/images/england/vicepresident.jpg",
    NA: "",
    Flag: "assets/images/england/flag.png",
  },
  {
    Name: "Ghana",
    President: "Nana Akufo Addo",
    vp: "mahamudu Bawumia",
    PI: "assets/images/Ghana/president.jpg",
    VI: "assets/images/Ghana/vicepresident.jpg",
    NA: "",
    Flag: "assets/images/Ghana/flag.png",
  }
];
let text = ""
for(let i=0; i<countries.length; i++){
text +=
  "the name of the president of " +
  countries[i].Name +
  " is " +
  countries[i].President +
   `<img src='${countries[i].PI}' height ='30'>` +
  ".The vice president name is " +
   `<img src='${countries[i].VI}' height ='30'>` +
  countries[i].vp + 
  '.This is the picture of the flag '+
   `<img src='${countries[i].Flag}' height ='30'>` +
   '<br>'
}
document.getElementById('demo').innerHTML = text

// let data = [
//   { name: "Rice", Qty: 8, Price: 900, PI: "assets/images/Nigeria/buhari.jpg" },
//   {
//     name: "Beans",
//     Qty: 8,
//     Price: 900,
//     PI: "assets/images/Nigeria/osibanjo.jpg",
//   },
//   { name: "Garri", Qty: 8, Price: 900,PI: "assets/images/sophia2.gif" },
//   { name: "Yam", Qty: 8, Price: 900 },
// ];
// let text = '';
// for(let i=0; i<data.length; i++){
//   text +=
//     data[i].name +
//     ",The Quantity is " +
//     ",The price of 1kg is" +
//     data[i].Price +
//     `<img src='${data[i].PI}' height ='30'>` +
//     "<br>";
// }
// document.getElementById('demo').innerHTML = text;


// document.getElementById("demo").innerHTML =
//   "The name of my product is " +
//   data.name +
//   ",and i have a quantity of " +
//   data.Qty +
//   " with each unit having a price of " +
//   data.Price;
// // it means write name(rice) inside demo

