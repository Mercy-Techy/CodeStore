function go(){
    let student = [
        {
            name:"mercy",
            matric:"183272",
            Age:"20",
            DEPT:"CSE"
        },
        {
            name:"olamide",
            matric:"183271",
            Age:"21",
            DEPT:"CSE"
        },
        {
            name:"oluwagbemiro",
            matric:"183270",
            Age:"20",
            DEPT:"CSE"
        },
        {
            name:"jesuye",
            matric:"183273",
            Age:"20",
            DEPT:"CSE"
        },
        {
            name:"arawole",
            matric:"183274",
            Age:"20",
            DEPT:"CSE"
        },
        {
            name:"chioma",
            matric:"183275",
            Age:"20",
            DEPT:"CSE"
        }
    ]
    let text = document.getElementById("demo").value;
    let i;
    let joy = ""
    for(i in student){
        if(text.toLowerCase() == student[i].name){
           joy += "Hi " + text + ",This is your Matric no: " + student[i].matric;
        }
    }
    if(joy == ""){
      joy += "Hi " + text + ",sorry to tell you but you are not a student of LAUTECH"
    }
      document.getElementById("dem").innerHTML = joy;
}