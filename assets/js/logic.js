console.log(window);
// Pertinent variables
const startGame = document.querySelector('#start');
const questions = document.querySelector('#questions');
const nextQuestion = document.querySelector('.continue');
var score = 0;
// Const's for each question and their answers
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
// Question 1 results
const hiddenCorrect1 = document.querySelector('#hiddenCorrect1');
const hiddenIncorrect1 = document.querySelector('#hiddenIncorrect1');
const question3 = document.querySelector('#question3');
// Question 2 results
const hiddenCorrect2 = document.querySelector('#hiddenCorrect2');
const hiddenIncorrect2 = document.querySelector('#hiddenIncorrect2');
const question4 = document.querySelector('#question4');
// Question 3 results
const hiddenCorrect3 = document.querySelector('#hiddenCorrect3');
const hiddenIncorrect3 = document.querySelector('#hiddenIncorrect3');

function init(){
  question1.style.display="none";
  question2.style.display="none";
  question3.style.display="none";
  question4.style.display="none";
}

init();

startGame.addEventListener("click", function() {
    document.getElementById('introduction').style.display="none";
    question1.style.display="block";
  });

var displayQuestionCorrect2 = function (){
  hiddenCorrect1.classList.remove('hidden');
  hiddenIncorrect1.classList.add('hidden');
  question1.style.display="none";
  question2.style.display="block";
}

var displayQuestionIncorrect2 = function (){
  hiddenCorrect1.classList.add('hidden');
  hiddenIncorrect1.classList.remove('hidden');
  question1.style.display="none";
  question2.style.display="block";
}

var displayQuestionCorrect3 = function (){
  hiddenCorrect2.classList.remove('hidden');
  hiddenIncorrect2.classList.add('hidden');
  question2.style.display="none";
  question3.style.display="block";
}

var displayQuestionIncorrect3 = function (){
  hiddenCorrect2.classList.add('hidden');
  hiddenIncorrect2.classList.remove('hidden');
  question2.style.display="none";
  question3.style.display="block";
}

var displayQuestionCorrect4 = function (){
  hiddenCorrect3.classList.remove('hidden');
  hiddenIncorrect3.classList.add('hidden');
  question3.style.display="none";
  question4.style.display="block";
}

var displayQuestionIncorrect4 = function (){
  hiddenCorrect3.classList.add('hidden');
  hiddenIncorrect3.classList.remove('hidden');
  question3.style.display="none";
  question4.style.display="block";
}


