console.log(window);
// Pertinent variables
const startGame = document.querySelector('#start');
const questions = document.querySelector('#questions');
const correctAnswer = document.querySelector('.correctAnswer');
const incorrectAnswer = document.querySelector('.incorrectAnswer');
const nextQuestion = document.querySelector('.continue');
var score = 0;
// Var's for each question
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');

function init(){
  question1.style.display="none";
  nextQuestion.style.display="none";
  question2.style.display="none";
  // document.querySelectorAll('correctAnswer').style.display="none";
  // document.querySelectorAll('incorrectAnswer').style.display="none";
  // document.querySelectorAll('continue').style.display="none";
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
};

var incorrectButton = function(){
  incorrectAnswer.style.display="block";
  nextQuestion.style.display="inline";
};

var displayQuestion2 = function (){
  question1.style.display="none";
  question2.style.display="block";
  correctAnswer.style.display="none";
  incorrectAnswer.style.display="none";
  nextQuestion.style.display="none";
}

