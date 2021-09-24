const inputAngle = document.querySelectorAll(".input-angle");
const btnOutput = document.querySelector("#btn-output");
const outputBox = document.querySelector("#output-box");

function calculateSumOFAngle(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2+ angle3
    return sumOfAngles;
}

function showOutput(){
    const sumOfAngles = calculateSumOFAngle(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));
    if(sumOfAngles === 180 && inputAngle[0].value>0 && inputAngle[1].value>0 && inputAngle[2].value>0){
        outputBox.innerText = "The input angles makes a Triangle";
    }
    else {
        outputBox.innerText = "The input angles don't makes a Triangle"
    }
}


function isTriangle() {
    var angle1 = inputAngle[0].value;
    var angle2 = inputAngle[1].value;
    var angle3 = inputAngle[2].value
    if(!angle1 || !angle2 || !angle3){
        outputBox.innerText = `Please enter all the fields`
    }
    
    else if(angle1 < 0 || angle2 < 0 || angle3 < 0){
        outputBox.innerText = `The value should not be negative`
    }
    else{
        showOutput(inputAngle.value)
    } 
}

btnOutput.addEventListener("click",isTriangle)

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