catchNumberEvent();
catchOperationEvent();

function catchNumberEvent() {
  let numElements = document.querySelectorAll(".number");
  numElements.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      display(e.target.innerHTML);
    });
  });
}

function display(val) {
  let inputElement = document.getElementById("screen-input");
  let number = inputElement.value;
  inputElement.value += val;
}

function calculate(operation) {
  if (operation == "+") {
    AddOne();
  }
  if (operation == "-") {
    substractOne();
  }
  if (operation == "AC") {
    allClear();
  }
}

function catchOperationEvent() {
  let opElements = document.querySelectorAll(".op");
  opElements.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      calculate(e.target.innerHTML);
    });
  });
}

function AddOne() {
  let inputElement = document.getElementById("screen-input");
  let number = Number(inputElement.value);
  console.log(number);
  let finalNumber = number + 1;
  inputElement.value = finalNumber;
}

function substractOne() {
  let inputElement = document.getElementById("screen-input");
  let number = Number(inputElement.value);
  let finalNumber = number - 1;
  inputElement.value = finalNumber;
}
function allClear() {
  document.getElementById("screen-input").value = "";
}
