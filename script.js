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
            return add(a, b);
            break;
        case subtract:
            return subtract(a, b);
            break;
        case multiply:
            return multiply(a, b);
            break;
        case divide:
            return divide(a, b);
    }
}

let displayValue = 0;

let numberList = document.querySelectorAll(".number");
  
numberList.forEach(function(i){
    i.addEventListener("click", function (e) {
     const display = document.getElementById("display");
     display.innerText += e.target.innerHTML;
     displayValue += (e.target.innerHTML);
    })
  })



