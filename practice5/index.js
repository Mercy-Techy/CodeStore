function show(){
    alert("Please Take Note That Our Machine Can Only Accept 2 Operands.Also It Uses Only Operator: +,-,*,/")
}
function calculator(){
    let operand1 = document.getElementById("operand1").value 
    let operand2 = document.getElementById("operand2").value 
    let operator = document.getElementById("operator").value 
    if(operator == "+" ){
        let result = Number(operand1) + Number(operand2);
        document.getElementById("ans").innerHTML = operand1 + " "+ operator + " " + operand2 + " = " + result
        }
    else if(operator == "-" ){
        let result = Number(operand1) - Number(operand2);
        document.getElementById("ans").innerHTML = operand1 + " "+ operator + " " + operand2 + " = " + result
        }
    else if(operator == "*" ){
        let result = Number(operand1) * Number(operand2);
        document.getElementById("ans").innerHTML = operand1 + " "+ operator + " " + operand2 + " = " + result
        }
    else if(operator == "/" ){
        let result = Number(operand1) / Number(operand2);
        document.getElementById("ans").innerHTML = operand1 + " "+ operator + " " + operand2 + " = " + result
        }
    else{
        document.getElementById("ans").innerHTML = "Your Operator Is Not Part Of The Operators Specified Earlier"
    }
}
console.log(typeof(operator))