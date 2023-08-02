function show(){
    age = document.getElementById("demo").value;
    name = document.getElementById("dem").value;
    if(age>=18 && age<=40){
        alert("Dear "+ name +".You Have Succesfully Signed Up.Thanks")
    }
    else{
        alert("Dear "+ name + ".You Are Either Older Than 40 Or Not Up to 18 Which Is Not Acceptable.So Sorry")
    }
}