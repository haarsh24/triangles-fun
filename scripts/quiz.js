const quizForm = document.querySelector("#quiz-form");
const btnSubmit = document.querySelector("#btn-submit");
const outputBox = document.querySelector("#output-box")


const correctAnswers = [
    "right",
    "Equilateral",
    "2 congruent sides",
    "180 degrees",
    "3", 
    "90°",
    "Equilateral triangle",
    "One right angle",
    "a + b + c",
    "no"
];

function calculateScore(e){
    e.preventDefault();
    let score = 0;
    let index = 0;

    const formScores = new FormData(quizForm);
    for(let value of formScores.values()) {
        if(value === correctAnswers[index] && value !== ''){
            score = score + 1;
        }
        index = index + 1;
    }
    outputBox.innerText = "Your Score of the Triangle Quiz is " + score;
}

quizForm.addEventListener("submit",calculateScore)


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