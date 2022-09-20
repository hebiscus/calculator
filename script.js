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
let incrementStatus = undefined;
let dontClear = undefined;

const display = document.getElementById("display");

const numberList = document.querySelectorAll(".number");
  
numberList.forEach(function(i){
    i.addEventListener("click", function (e) {  
     if (test == undefined) {
     display.innerText += e.target.innerHTML;
     }

     if (operatorClickStatus == "clicked" && test != undefined && dontClear == undefined) {
        display.innerText = "";
        if (incrementStatus != undefined) {
            b = Number(e.target.innerHTML);
            display.innerText += Number(b);
            dontClear = "ehe";
        } else {
            b += e.target.innerHTML;
            display.innerText += Number(b);
        }
     } else if (operatorClickStatus == "clicked" && test != undefined && dontClear != undefined && incrementStatus != undefined) {
        display.innerText += (e.target.innerHTML);
        b = Number(display.innerText);
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
            incrementStatus = "uh";
            operate(operator, a, b);
            operator = e.target.value;
            a = Number(display.innerText);
            b = undefined;
            operatorClickStatus = "clicked";
            test = "yup";
            dontClear = undefined;
            decimalsClicked = "yes";
            decimals.disabled = false;
            
            return;
        }

        operatorClickStatus = "clicked";
        operator = e.target.value;
        display.innerText = "";
        decimals.disabled = false;
    })
})

const equals = document.querySelector(".equals");

equals.addEventListener("click", function () {
    if (b == 0 && operator == "divide") {
        alert("think you're smart huh");
        display.innerText = "";
        a = undefined;
        b = undefined;
        operatorClickStatus = undefined;
        decimalsClicked = "yes";
        decimals.disabled = false;
    } else if (a == undefined && b == undefined) {
        display.innerText = "give me values!";
    }
        else {
        operate(operator, a, b);
        operatorClickStatus = undefined;
        decimalsClicked = "yes";
        decimals.disabled = false;
    }
})


const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function () {
    display.innerText = "";
    a = undefined;
    b = undefined;
    operator = undefined;
    operatorClickStatus = undefined;
    test = undefined;
    incrementStatus = undefined;
    dontClear = undefined;
    decimalsClicked = undefined;
})

const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function () { 
    const displayArray = [];
    const splitted = (display.innerText).toString().split('');
    displayArray.push(splitted);
    splitted.pop();
    const joinedDisplay = splitted.join("");

    if (joinedDisplay == 0) {
        return;
    }

    display.innerText = Number(joinedDisplay);
    
    if (a == undefined) {
        a = Number(display.innerText);
    } else {
        b = Number(display.innerText);
    }
})

const decimals = document.querySelector(".decimals");

decimals.addEventListener("click", function () {
    let decimalsClicked = undefined;
    
    if (decimalsClicked == undefined) {
        display.innerText += "."
        decimals.disabled = true;
    } else {
        decimals.disabled = false;
        display.innerText += ".";
        decimals.disabled = true;
        decimalsClicked == undefined;
    }
})