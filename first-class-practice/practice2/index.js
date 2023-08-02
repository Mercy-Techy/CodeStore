// function
// function eggbuns(){
//     let x = 7;
//     let y = 6;
//     document.write(x + y)
// }
function go() {
  let matric = ["mercy", "olamide", "jesuye", "oluwagbemiro"];
  let inpvalue = document.getElementById("inp").value;
  if (matric.includes(inpvalue)) {
    alert(
      Math.floor(Math.random() * 9000) +
        "-" +
        Math.floor(Math.random() * 9000) +
        "-" +
        Math.floor(Math.random() * 9000) +
        "-" +
        Math.floor(Math.random() * 9000)
    );
    // the intergers used to multiply is just used to show the length pf numbers to be generated
  } else {
    alert("you are a yahoo boy!fear God");
  }
}
