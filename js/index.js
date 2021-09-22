const calculator1 = document.querySelector("#cal1");
const putValue1 = document.querySelector(".cal-input1");

const calculator2 = document.querySelector("#cal2");
const putValue2 = document.querySelector(".cal-input2");

const calculator3 = document.querySelector("#cal3");
const putValue3 = document.querySelector(".cal-input3");

const result = document.querySelector(".result");

//calculator1의 innerText에 value 입력 
function add1 (first) {
    first.preventDefault()
}
calculator1.addEventListener("submit", add1);

function up1() {
    result.innerText = putValue1.value;
}
calculator1.addEventListener("keyup", up1);


//calculator2의 innerText에 button click 할 때 value 입력 
function add2 (second) {
    second.preventDefault()
}
calculator2.addEventListener("submit", add2);

function up3 () {
    result.innerText = putValue2.value
}
calculator2.addEventListener("keyup",up3)



//calculator3의 innerText에 value 입력 
function add3 (third) {
    third.preventDefault()
}
calculator3.addEventListener("submit", add3);

function up2() {
    if (putValue2.value === "+") {
    result.innerText = parseInt(putValue1.value) + parseInt(putValue3.value);
} else if (putValue2.value === "-") {
    result.innerText = parseInt(putValue1.value) - parseInt(putValue3.value);
} else if (putValue2.value === "*") {
    result.innerText = parseInt(putValue1.value) * parseInt(putValue3.value);
} else if (putValue2.value === "/") {
    result.innerText = parseInt(putValue1.value) / parseInt(putValue3.value);
} else {result.innerText = "Please write plus minus multiple divide";
result.classList.remove("result")
result.classList.add("hiddenResult")}
}
calculator3.addEventListener("keyup", up2);

