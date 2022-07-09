console.log(window);
// Pertinent variables
const startGame = document.querySelector('#start');
const questions = document.querySelector('#questions');
const correctAnswer = document.querySelector('.correctAnswer');
const incorrectAnswer = document.querySelector('.incorrectAnswer');
const nextQuestion = document.querySelector('.continue');
const hiddenCorrect = document.querySelector('.hiddenCorrect');
const hiddenIncorrect = document.querySelector('.hiddenIncorrect');
var score = 0;
// Var's for each question
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const hidden1 = document.getElementById('hidden1');

function init(){
  question1.style.display="none";
  nextQuestion.style.display="none";
  question2.style.display="none";
}

init();

startGame.addEventListener("click", function() {
    document.getElementById('introduction').style.display="none";
    question1.style.display="block";
    correctAnswer.style.display="none";
    incorrectAnswer.style.display="none";
    nextQuestion.style.display="none";
  });


var correctButton = function(){
    score = score + 10;
    console.log(score);
    correctAnswer.style.display="block";
    nextQuestion.style.display="inline";
    hiddenCorrect.classList.remove('hidden');
};

var incorrectButton = function(){
  incorrectAnswer.style.display="block";
  nextQuestion.style.display="inline";
  nextQuestion.style.display="inline";
  hiddenIncorrect.classList.remove('hidden');
};

var displayQuestion2 = function (){
  hiddenCorrect.classList.add('hidden');
  hiddenIncorrect.classList.add('hidden');
  question1.style.display="none";
  question2.style.display="block";
  incorrectAnswer.style.display="none";
}


