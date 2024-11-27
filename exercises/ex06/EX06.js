// Exercise 6a
function jsStyle() {
    var paragraph = document.getElementById('text');
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "20px";
}

function moveText() {
    var paragraph = document.getElementById('text');
    var currentLeft = parseInt(paragraph.style.left) || 0;
    paragraph.style.position = "relative";
    paragraph.style.left = (currentLeft + 10) + "px";
}

// Exercise 6b
function howmany() {
    var form = document.getElementById('regForm');
    var inputs = form.getElementsByTagName('input');
    var totalInputs = inputs.length;
    var textInputs = 0;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text") {
            textInputs++;
        }
    }

    console.log("Total input elements: " + totalInputs);
    console.log("Text input elements: " + textInputs);
}

// Exercise 6c
function colorchanger() {
    var selectedColor = document.getElementById('mySelect').value;
    document.getElementById('colorDiv').style.backgroundColor = selectedColor;
}

// Exercise 6d
function changeColor() {
    var selectedColor = document.getElementById('mySelect').value;
    document.getElementById('rb').style.color = selectedColor;
}

function resetColor() {
    document.getElementById('rb').style.color = "black";
}

// Exercise 6e
function multiply() {
    var firstOperand = parseInt(document.getElementById("firstoperand").value);
    var secondOperand = parseInt(document.getElementById("secondoperand").value);
    var result = firstOperand * secondOperand;

    displayResult(result);
}

function divide() {
    var firstOperand = parseInt(document.getElementById("firstoperand").value);
    var secondOperand = parseInt(document.getElementById("secondoperand").value);

    var result = secondOperand === 0 ? "Cannot divide by zero!" : firstOperand / secondOperand;
    displayResult(result);
}

function displayResult(result) {
    var resultNode = document.getElementById("result");
    while (resultNode.firstChild) {
        resultNode.removeChild(resultNode.firstChild);
    }
    var textNode = document.createTextNode(result);
    resultNode.appendChild(textNode);
}
