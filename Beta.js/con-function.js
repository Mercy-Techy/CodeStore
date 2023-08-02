let ceremony = () => {
  let age = document.getElementById("input").value;
   let Nage = Number(age);
    if(Nage>=25){
            document.getElementById("demo").innerHTML = "You can registar"
        }
        else{
            document.getElementById("demo").innerHTML = "You are either too young or too old to apply for the job"
        }
};
document.getElementById("btn").addEventListener("click", ceremony);
// the eventlistener has accepts only two parameter and when writing the event put it in string and remove the string.thanks



/