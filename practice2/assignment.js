function go() {
  let students = {
    Mercy: 183272,
    Olamide: 183271,
    Jesuye: 183273,
    Arawole:183274,
    Gbemi:183275
  };
  let name = document.getElementById("name").value;
  let matric = document.getElementById("matric").value;
  let number = Object.values(students);
    if(number.includes(matric))
          alert(
            "Hi " +
              name +
              ",your pin is: " +
              Math.floor(Math.random() * 9000) +
              "-" +
              Math.floor(Math.random() * 9000) +
              "-" +
              Math.floor(Math.random() * 9000) +
              "-" +
              Math.floor(Math.random() * 9000) 
          );
      
      else{
          alert('Hi ' + name + ',you are not a student in our school.you probably picked the wrong school')
      }
  
 
   
}
// function go() {
//      let students = {
//     Mercy: 183272,
//     Olamide: 183271,
//     Jesuye: 183273,
//     Arawole: 183274,
//     Gbemi: 183275
//   };
//   let name = document.getElementById("name").value;
//   let matric = document.getElementById("matric").value;
//      if(matric == students['Mercy']){
//          alert(
//             "Hi " +
//               name +
//               ",your pin is: " +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) 
//           );
//       }
//     else if(matric == students['Olamide']){
//          alert(
//             "Hi " +
//               name +
//               ",your pin is: " +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) 
//           );
//       }
//      else if(matric == students['Jesuye']){
//          alert(
//             "Hi " +
//               name +
//               ",your pin is: " +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) 
//           );
//       }
//       else if(matric == students['Arawole']){
//          alert(
//             "Hi " +
//               name +
//               ",your pin is: " +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) 
//           );
//       }
//     else if(matric == students['Gbemi']){
//          alert(
//             "Hi " +
//               name +
//               ",your pin is: " +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) +
//               "-" +
//               Math.floor(Math.random() * 9000) 
//           );
//       }
//       else{
//           alert('Hi ' + name + ',you are not a student in our school.you probably picked the wrong school')
//       }
//     }
