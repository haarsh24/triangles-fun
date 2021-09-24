const inputSide = document.querySelectorAll(".input-side");
const btnCalculate = document.querySelector("#btn-calculate");
const outputBox = document.querySelector("#output-box");



function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares; 
}

function calculateLength(){
    const sumOfSquares = calculateSumOfSquares(Number(inputSide[0].value), Number(inputSide[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputBox.innerText = "The Length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2);
}

function calculateHypotenuse() {
    var side1 =inputSide[0].value;
    var side2 =inputSide[1].value;
    if(!side1 || !side2) {
        outputBox.innerText = `Please enter all the fields`
    }
    
    else if(side1 < 1 || side2 <1){
        outputBox.innerText = `The value should not be negative or zero`
    }
    else{
        calculateLength(inputSide.value)
    } 
    
    
}

btnCalculate.addEventListener("click", calculateHypotenuse)

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