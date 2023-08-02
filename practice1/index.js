function go() {
     let  matric = document.getElementById('int').value;
     let level = document.getElementById('itp').value;
     let name = document.getElementById('inp').value;
     let faculty = document.getElementById('it').value;
     let gender = document.getElementById('gen').value;

     let student = ['183271','183272','183273','183274','183275','183276','183277','183278','183279','183280'];
     
     if (student.includes(matric)) {
          if (level == "100") {
            if (gender == "male") {
              alert(
                "Hi, " +
                  name +
                  ".your hostel is Obafemi awolowo hostel" +
                  '\n' +
                  "Your room password is: " +
                  Math.floor(Math.random() * 9000)
              );
            } else if (gender == "female") {
              alert(
                "Hi, " +
                  name +
                  ".your hostel is Moremi awolowo hostel" +
                  '\n' +
                  "Your room password is: " +
                  Math.floor(Math.random() * 9000)
              );
            } else {
              alert(
                "Are you sure you are a human beign.you might need to do a am not a robot test."
              );
              alert(
                "Thats just a joke try again,you might have done a mistake."
              );
            }
          }
           else if (level == "200") {

            if (gender == "male") {
              alert(
                "Hi, " +
                  name +
                  ".your hostel is Ladoke akintola hostel" +
                  '\n' +
                  "Your room password is: " +
                  Math.floor(Math.random() * 9000)
              );
            } else if (gender == "female") {
              alert(
                "Hi, " +
                  name +
                  ".your hostel is Joke akintola hostel" +
                  '\n' +
                  "Your room password is: " +
                  Math.floor(Math.random() * 9000)
              );
            } else {
              alert(
                "Are you sure you are a human beign.you might need to do a am not a robot test."
              );
              alert(
                "Thats just a joke try again,you might have done a mistake."
              );
            }
           }
           else if (level == "300") {
                if (gender == "male") {
                  alert(
                    "Hi, " +
                      name +
                      ".your hostel is Tai solarin hostel" +
                      '\n' +
                      "Your room password is: " +
                      Math.floor(Math.random() * 9000)
                  );
                } else if (gender == "female") {
                  alert(
                    "Hi, " +
                      name +
                      ".your hostel is china solarin hostel" +
                      '\n' +
                      "Your room password is: " +
                      Math.floor(Math.random() * 9000)
                  );
                } else {
                  alert(
                    "Are you sure you are a human beign.you might need to do a am not a robot test."
                  );
                  alert(
                    "Thats just a joke try again,you might have done a mistake."
                  );
                }
           }
            else if (level == "400") {
                if (gender == "male") {
                  alert(
                    "Hi, " +
                      name +
                      ".your hostel is Mercy arawole hostel" +
                      '\n' +
                      "Your room password is: " +
                      Math.floor(Math.random() * 9000)
                  );
                } else if (gender == "female") {
                  alert(
                    "Hi, " +
                      name +
                      ".your hostel is Olamide arawole hostel" +
                      '\n' +
                      "Your room password is: " +
                      Math.floor(Math.random() * 9000)
                  );
                } else {
                  alert(
                    "Are you sure you are a human beign.you might need to do a am not a robot test."
                  );
                  alert(
                    "Thats just a joke try again,you might have done a mistake."
                  );
                }
            }
            else if (level == "500") {
                if (gender == "male") {
                  alert(
                    "Hi, " +
                      name +
                      ".your hostel is Ayomide ayanfe hostel" +
                      '\n' +
                      "Your room password is: " +
                      Math.floor(Math.random() * 9000)
                  );
                } else if (gender == "female") {
                  alert(
                    "Hi, " +
                      name +
                      ".your hostel is jesuye oluwagbemiro hostel" +
                      '\n' +
                      "Your room password is: " +
                      Math.floor(Math.random() * 9000)
                  );
                } else {
                  alert(
                    "Are you sure you are a human beign.you might need to do a am not a robot test."
                  );
                  alert(
                    "Thats just a joke try again,you might have done a mistake."
                  );
                } 
            }
     }
      else {
       alert(
         "Sorry " +
           name +
           ",you are not our student,you properply picked the wrong school"
       );
}


}