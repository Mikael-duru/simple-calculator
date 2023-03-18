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