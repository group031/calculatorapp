var numOne, numTwo, res, temp;
// if (numOne && numTwo) {
// temp = document.getElementById("res");
// temp.style.display = "block";
function add() {
    numOne = parseInt(document.getElementById("one").value);
    numTwo = parseInt(document.getElementById("two").value);
    res = numOne + numTwo;
    console.log(res)
    document.getElementById("add").value = res;
}
function sub() {
    numOne = parseInt(document.getElementById("one").value);
    numTwo = parseInt(document.getElementById("two").value);
    res = numOne - numTwo;
    document.getElementById("subtract").value = res;
}
function mul() {
    numOne = parseInt(document.getElementById("one").value);
    numTwo = parseInt(document.getElementById("two").value);
    res = numOne * numTwo;
    document.getElementById("multiply").value = res;
}

function div() {
    numOne = parseInt(document.getElementById("one").value);
    numTwo = parseInt(document.getElementById("two").value);
    res = numOne / numTwo;
    document.getElementById("divide").value = res;
}
function squ() {
    numOne = parseInt(document.getElementById("one").value);
    res = numOne*numOne
    document.getElementById("square").value = res;
}

// }
