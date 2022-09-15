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
        case "add":
            display.innerText = add(a, b);
            break;
        case "subtract":
            display.innerText = subtract(a, b);
            break;
        case "multiply":
            display.innerText = multiply(a, b);
            break;
        case "divide":
            display.innerText = divide(a, b);
    }
}

let displayValue = undefined;
let operatorClickStatus = undefined;
let a = undefined;
let b = undefined;

const display = document.getElementById("display");

const numberList = document.querySelectorAll(".number");
  
numberList.forEach(function(i){
    i.addEventListener("click", function (e) {  
     display.innerText += e.target.innerHTML;
     displayValue = e.target.innerHTML;
     

     if (operatorClickStatus == "clicked") {
        b = Number(displayValue);
     } else {
        a = Number(display.innerText);
     }

    })
  })

let operator = undefined;

const operatorList = document.querySelectorAll(".operator");

operatorList.forEach(function(i) {
    i.addEventListener("click", function (e) { 
        operatorClickStatus = "clicked";
        operator = e.target.value;
        display.innerText = "";
        displayValue = undefined;
    })
})

const equals = document.querySelector(".equals");

equals.addEventListener("click", function () {
    operate(operator, a, b);
    operatorClickStatus = undefined;
})



const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function () {
    display.innerText = "";
    displayValue = undefined;
    a = undefined;
    b = undefined;
    operatorClickStatus = undefined;
})

const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function () { 


})