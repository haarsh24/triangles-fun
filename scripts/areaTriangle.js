const inputs = document.querySelectorAll(".inputs");
const btnCalculate = document.querySelector("#btn-calculate");
const outputBox = document.querySelector("#output-box");

function calculateInputs(base, height) {
    const baseHeightInput = base * height;
    return baseHeightInput;
}

function calculateArea() {
    const baseHeightInput = calculateInputs(Number(inputs[0].value), Number(inputs[1].value));
    const areaTriangle = 0.5 * baseHeightInput;
    outputBox.innerText = "The Area of Triangle is " + areaTriangle.toFixed(2) + "cm²";
}

function showOutput() {
    var input1 = inputs[0].value;
    var input2 = inputs[1].value

    if(!input1 || !input2) {
        outputBox.innerText = `Please enter all the fields`
    }
    else if(input1 < 1 || input2 <1){
        outputBox.innerText = `The value should not be negative or zero`
    }
    else{
        calculateArea(inputs.value)
    } 
}

btnCalculate.addEventListener("click", showOutput)

// for nav toggle
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-120%';
}