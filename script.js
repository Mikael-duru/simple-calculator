const displayResult = document.querySelector("#display");
const calculatorBtns = document.querySelectorAll(".calculator_btn");

calculatorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.id === "clear"){
      displayResult.value = "";
    }
    else if (btn.id === "backspace"){
      displayResult.value = displayResult.value.slice(0, -1);
    }
    else if (btn.id === "equal") {
      result();
    }
    else if (btn.id === "!"){
      let i;
      let num = displayResult.value;
      let f = 1;
      for (i = 1; i <= num; i++){
        f *= i
      };

      displayResult.value = f;
    }
    else if (btn.id === "sin"){
      displayResult.value = Math.sin(displayResult.value);
    }
    else if (btn.id === "cos"){
      displayResult.value = Math.cos(displayResult.value);
    }
    else if (btn.id === "tan"){
      displayResult.value = Math.tan(displayResult.value);
    }
    else if (btn.id === "log"){
      displayResult.value = Math.log(displayResult.value);
    }
    else if (btn.id === "e"){
      displayResult.value += 2.718;
    }
    else if (btn.id === "pi"){
      displayResult.value += 3.14;
    }
    else if (btn.id === "pow"){
      displayResult.value = Math.pow(displayResult.value, 2);
    }
    else if (btn.id === "sqrt"){
      displayResult.value = Math.sqrt(displayResult.value, 2);
    }
    else {
      displayResult.value += btn.id;
    }
  })
});

const result = () => {
  if(displayResult.value == "") {
    return;
  } 
  else {
    try {
      displayResult.value = eval(displayResult.value);
    }
    catch(err){
      let errorInput = displayResult.value;

      displayResult.value = "error";
      
      setTimeout(() => (displayResult.value = errorInput), 1000)
    }
  }
}