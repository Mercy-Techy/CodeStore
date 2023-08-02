function go(){
    let mm = document.getElementById('inp').value;
    // used for getting the value of an input 
    let score = mm;
    let text = "";
    if(score >= 70){
        text = "A"
        alert('excellent')
    }
    else if(score >= 60){
        text = "B"
        alert('Very good')
    }
    else if(score >= 50){
        text = "C"
        alert('good')
    }
    else if(score >= 45){
        text = "D"
        alert('fair')
    }
    else if (score >= 40){
      text = "E";
      alert("poor");
    }
    else if(score >= 0){
        text = "F"
        alert("you failed")
    }
   document.getElementById("demo").innerHTML = text
}