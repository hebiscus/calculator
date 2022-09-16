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

let operatorClickStatus = undefined;
let a = undefined;
let b = undefined;
let test = undefined;

const display = document.getElementById("display");

const numberList = document.querySelectorAll(".number");
  
numberList.forEach(function(i){
    i.addEventListener("click", function (e) {  
     if (test == undefined) {
     display.innerText += e.target.innerHTML;
     }

     if (operatorClickStatus == "clicked" && test != undefined) {
        // display.innerText += e.target.innerHTML;
        b = Number(e.target.innerHTML);
     } else if (operatorClickStatus == "clicked") {
        b = Number(display.innerText);
     } else {
        a = Number(display.innerText);
     }
     
    })
  })

let operator = undefined;

const operatorList = document.querySelectorAll(".operator");

operatorList.forEach(function(i) {
    i.addEventListener("click", function (e) { 

        if (a != undefined && b != undefined) {
            operate(operator, a, b);
            operator = e.target.value;
            a = Number(display.innerText);
            b = undefined;
            operatorClickStatus = "clicked";
            test = "yup";
            return;
        }

        operatorClickStatus = "clicked";
        operator = e.target.value;
        display.innerText = "";
    })
})

const equals = document.querySelector(".equals");

equals.addEventListener("click", function () {
    if (b == 0) {
        alert("you think you're smart huh");
        display.innerText = "";
        a = undefined;
        b = undefined;
        operatorClickStatus = undefined;
    } else if (a == undefined && b == undefined) {
        display.innerText = "give me values!";
    }
        else {
        operate(operator, a, b);
        operatorClickStatus = undefined;
    }
})



const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function () {
    display.innerText = "";
    a = undefined;
    b = undefined;
    operatorClickStatus = undefined;
    test = undefined;
})

const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function () { 


})

const decimals = document.querySelector(".decimals");
decimals.disable = true;