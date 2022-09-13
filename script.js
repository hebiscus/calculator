const add = function(a, b) {
	return a +b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
  };

const divide = function(a, b) {
	return a / b;
};

function operate(operator, a, b) {
    switch (operator) {
        case add:
            display.innerText = add(a, b);
            break;
        case subtract:
            display.innerText = subtract(a, b);
            break;
        case multiply:
            display.innerText = multiply(a, b);
            break;
        case divide:
            display.innerText = divide(a, b);
    }
}

let displayValue = "";

const display = document.getElementById("display");

const numberList = document.querySelectorAll(".number");
  
numberList.forEach(function(i){
    i.addEventListener("click", function (e) {
     const display = document.getElementById("display");
     display.innerText += e.target.innerHTML;
     displayValue += (e.target.innerHTML);
    })
  })

const operatorList = document.querySelectorAll(".operator");

operatorList.forEach(function(i) {
    i.addEventListener("click", function (e) { 
        let operator = e.target;
        let a = displayValue;
        const display = document.getElementById("display");
        display.innerText = "";
        displayValue = "";
    })
})

let operator = "";


const equals = document.querySelector(".equals");

equals.addEventListener("click", function () {
    let b = displayValue;
    operate();
})

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function () {
    display.innerText = "";
    displayValue = "";
})
