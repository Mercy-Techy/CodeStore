// let gradingHandler = ()=>{
//   let score = document.getElementById("score").value
//   let grade = document.getElementById("demo")
//   score>=70 && score<=100?grade.innerHTML="A"
//   :score>=60 && score<70?grade.innerHTML="B"
//   :score>=50 && score<60?grade.innerHTML="C"
//   :score>=45 && score<50?grade.innerHTML="D"
//   :score>=40 && score<45?grade.innerHTML="E"
//   :score=""?grade.innerHTML=" "
//   :score>=0 && score<40?grade.innerHTML="F":grade.innerHTML="Score Invalid"

// }
// document.getElementById("score").addEventListener("keyup",gradingHandler)
let gradingSystem = () => {
  let studentDetails = [
    {
      mn: 183272,
      score: 70,
      course: "MTH 107",
    },
  ];
  let mnn = document.getElementById("mnn").value;
  let sore = document.getElementById("sore").value;
  let crs = document.getElementById("crs").value;
  studentDetails.push({
    mn: mnn,
    score: sore,
    course: crs,
  });
  let i;
  let matric = "";
  let studscore = "";
  let studgrade = "";
  let studcourse = "";
  let text = "";
  for (i = 0; i < studentDetails.length; i++) {
    matric = studentDetails[i].mn;
    studscore = studentDetails[i].score;
    studcourse = studentDetails[i].course;
    if (studscore >= 70 && studscore <= 100) {
      studgrade = "A";
      text +=
        matric +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studcourse +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studscore +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studgrade +
        "<br>"
  }
    else if (studscore >= 60 && studscore <70) {
      studgrade = "B";
      text +=
        matric +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studcourse +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studscore +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studgrade +
        "<br>"
  }
   else if (studscore >= 50 && studscore <60) {
      studgrade = "C";
      text +=
        matric +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studcourse +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studscore +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studgrade +
        "<br>"
  }
    else if (studscore >= 45 && studscore < 50) {
      studgrade = "D";
      text +=
        matric +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studcourse +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studscore +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studgrade +
        "<br>"
  }
    else if (studscore >= 40 && studscore < 45) {
      studgrade = "E";
      text +=
        matric +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studcourse +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studscore +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studgrade +
        "<br>"
  }
    else if (studscore > 0 && studscore < 40) {
      studgrade = "F";
      text +=
        matric +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studcourse +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studscore +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studgrade +
        "<br>"
  }
    else if (studscore=" ") {
      studgrade = " ";
      text +=
        matric +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studcourse +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studscore +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        studgrade +
        "<br>"
  }
   
  else{
     alert("Invalid Score")
  }
  document.getElementById("stud").innerHTML = text;
};
}
document.getElementById("btn").addEventListener("click", gradingSystem);