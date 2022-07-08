// Pertinent variables
var startGame = document.querySelector('#start');
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
var correct = document.querySelector('#correct');
var score = 0;

function init(){
  document.getElementById('question1').style.display="none";
  document.getElementById('correctAnswer').style.display="none";
  document.getElementById('incorrectAnswer').style.display="none";
}

init();

startGame.addEventListener("click", function() {
    document.getElementById('introduction').style.display="none";
    document.getElementById('question1').style.display="block";
  });


correct.addEventListener('click', function(){
    score = score + 10;
    console.log(score);
    document.getElementById('correct').style.backgroundColor="#d36464";
})

