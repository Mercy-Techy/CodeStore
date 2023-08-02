// dom means document object model.we use it manipulate html
// this becomes the identity of the statement it is contained in
// function checker(x){
//     x.innerHTML = "OOOPS"
// }
// function datee(){
//     alert("dateeeee is")
// }
// document.getElementById("id").onclick = datee();

// let emma = document.createElement("p")
// let text  = document.createTextNode("Emmanuel's Tag")
// emma.appendChild(text)
// let mother_element  = document.getElementById("demo")
// mother_element.appendChild(emma)

 function checker(){
       document.getElementById("boby").style.color = "white"
       document.getElementById("boby").style.backgroundColor = "red"
       document.getElementById("boby").style.height = "100vh"
       let inp = document.createElement("input")
       let mee = document.getElementById("mee")
       mee.append(inp)
       inp.style.width = "20rem"
       inp.style.height = "3rem"
       inp.setAttribute("placeholder","pls fill")
       inp.onchange = alert("wrong answer")
 }