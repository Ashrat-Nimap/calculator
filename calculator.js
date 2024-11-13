let btn = document.getElementById("calculate");
let display = document.getElementById("display");

btn.addEventListener("click", function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;
     
    switch(operator){
        case "+":
        display.innerHTML = parseFloat(num1) + parseFloat(num2);
        break;
        case "-":
        display.innerHTML = parseFloat(num1) - parseFloat(num2);
        break;
        case "*":
        display.innerHTML = parseFloat(num1) * parseFloat(num2);
        break;
        case "/":
            try{
                if(num2 == 0){
                    throw new Error("Dominator should be zero")
                }

            }catch(Error){
                display.innerHTML = Error.message;
            }
            display.innerHTML = parseFloat(num1) / parseFloat(num2);  
             
        break;
    }
    
})