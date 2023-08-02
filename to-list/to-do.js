let text = "";
function cancel(x){
  let array1 = JSON.parse(localStorage.getItem("array"))
  let arraynew = array1.filter(i=>i.no!=x)
  localStorage.setItem("array",JSON.stringify(arraynew))
  let waste = array1.filter((i) => i.no == x);
  
function ren(){
  let mode = document.getElementById("mode")
  let overlay = document.getElementById("overlay")
  mode.style.display = "block"
  mode.style.zIndex = 3
  overlay.style.display = "block"
}
function ramed(){
  let mode = document.getElementById("mode");
  let overlay = document.getElementById("overlay");
  mode.style.display = "none";
  overlay.style.display = "none";
}
let obj;
function run(){
  let mode = document.getElementById("mode");
  let overlay = document.getElementById("overlay");
  mode.style.display = "none";
  overlay.style.display = "none";
  let user = JSON.parse(localStorage.getItem("array"))
  let time = document.getElementById("time").value
  let input = document.getElementById("input").value;
    if(input){
      if(time){
        obj = { input: input, time: time,no:Math.random()}
      }
      else{
        obj = { input: input,no:Math.random()};
      }
    }
     if (input == "") {
       alert("Please Fill The Input Box");
     } else {
       if(user){
         user.push(obj);
         localStorage.setItem("array", JSON.stringify(user));
         if(time){
           text += `<div  class=" bg-white d-flex justify-content-between fw-bold my-2 p-2">${obj.input} <br> ${obj.time}<span onclick="cancel(${obj.no})" >&times;</span></div>`;
         }
         else{
           text += `<div class=" bg-white d-flex justify-content-between fw-bold my-2 p-2">${obj.input}<br>&nbsp;<span onclick="cancel(${obj.no})" >&times;</span></div>`;
         }
         let list = document.getElementById("list");
         list.innerHTML = text;
       }
       else{
         alert("Ray")
         let ray = new Array();
         ray.push(obj);
         localStorage.setItem("array", JSON.stringify(ray));
          if (time) {
            text += `<div class=" bg-white d-flex justify-content-between fw-bold my-2 p-2">${obj.input} <br> ${obj.time}<span onclick="cancel(${obj.no})">&times;</span></div>`;
          } else {
            text += `<div class=" bg-white d-flex justify-content-between fw-bold my-2 p-2">${obj.input}<br>&nbsp;<span onclick="cancel(${obj.no})">&times;</span></div>`;
          }
          let list = document.getElementById("list");
          list.innerHTML = text;
       }
      }
    }
  let newarray = JSON.parse(localStorage.getItem("array"))
  if(newarray){
    for(let i=0;i<newarray.length;i++){
      if (newarray[i].time) {
        text += `<div class="bg-white d-flex justify-content-between fw-bold my-2 p-2">${newarray[i].input} <br> ${newarray[i].time}<span onclick="cancel(${newarray[i].no})">&times;</span></div>`;
      } else {
        text += `<div class="bg-white d-flex justify-content-between fw-bold my-2 p-2">${newarray[i].input} <br> &nbsp;<span onclick="cancel(${newarray[i].no})">&times;</span></div>`;
      }
    }
  }
  // document.getElementById("list").innerHTML = text
