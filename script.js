document.addEventListener("DOMContentLoaded", function () {
  let currentInput = "";
  let resultDisplayed = false;

  const resultField = document.getElementById("result");

  document
    .querySelector(".buttons")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        handleButtonClick(event.target.innerText);
      }
    });

  function handleButtonClick(value) {
    if (resultDisplayed && value !== "C") {
      clearDisplay();
    }

    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearDisplay();
    } else {
      appendToDisplay(value);
    }
  }

  function appendToDisplay(value) {
    currentInput += value;
    resultField.value = currentInput;
  }

  function clearDisplay() {
    currentInput = "";
    resultField.value = "";
    resultDisplayed = false;
  }

  function calculateResult() {
    try {
      const result = eval(currentInput);
      if (typeof result === "undefined") {
        resultField.value = "Invalid Input";
      } else if (!isFinite(result)) {
        resultField.value = "Math Error";
      } else {
        resultField.value = result;
      }
      resultDisplayed = true;
    } catch (error) {
      resultField.value = "Error";
    }
  }
});
