console.log(window);
// Pertinent variables
const startGame = document.querySelector('#start');
const questions = document.querySelector('#questions');
var countdown = document.querySelector('#countdown');
var finalScore = document.querySelector('#finalScore');
const endScreen = document.querySelector('#endScreen');
const highScores = document.querySelector('#highScores');
var score = 0;
var setInterval;
var countdownTimer;
var timeInterval;
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
const question5 = document.querySelector('#question5');
// Question 4 results
const hiddenCorrect4 = document.querySelector('#hiddenCorrect4');
const hiddenIncorrect4 = document.querySelector('#hiddenIncorrect4');

function init(){
  question1.style.display="none";
  question2.style.display="none";
  question3.style.display="none";
  question4.style.display="none";
  question5.style.display="none";
  endScreen.style.display="none";
  highScores.style.display="none";
}

init();

// Display question 1
startGame.addEventListener("click", function() {
    document.getElementById('introduction').style.display="none";
    question1.style.display="block";
    countdownTimer();
  });

  function countdownTimer() {
    secondsLeft= 60;
    timeInterval = setInterval(function () {
      secondsLeft--;
      countdown.textContent = secondsLeft;
      if(secondsLeft === 0) {

        clearInterval(timeInterval);
        question1.style.display="none";
        question2.style.display="none";
        question3.style.display="none";
        question4.style.display="none";
        question5.style.display="none";
        endScreen.style.display="block";
      }
      }, 1000);
    };


  // Display question 2
var displayQuestionCorrect2 = function (){
  hiddenCorrect1.classList.remove('hidden');
  hiddenIncorrect1.classList.add('hidden');
  question1.style.display="none";
  question2.style.display="block";
  score = score + 10;
  finalScore.textContent = score + "/50";
}

var displayQuestionIncorrect2 = function (){
  hiddenCorrect1.classList.add('hidden');
  hiddenIncorrect1.classList.remove('hidden');
  question1.style.display="none";
  question2.style.display="block";
  secondsLeft = secondsLeft - 10;
  finalScore.textContent = score + "/50";
}

// Display question 3
var displayQuestionCorrect3 = function (){
  hiddenCorrect2.classList.remove('hidden');
  hiddenIncorrect2.classList.add('hidden');
  question2.style.display="none";
  question3.style.display="block";
  score = score + 10;
  finalScore.textContent = score + "/50";
}

var displayQuestionIncorrect3 = function (){
  hiddenCorrect2.classList.add('hidden');
  hiddenIncorrect2.classList.remove('hidden');
  question2.style.display="none";
  question3.style.display="block";
  secondsLeft = secondsLeft - 10;
  finalScore.textContent = score + "/50";
}

// Display question 4
var displayQuestionCorrect4 = function (){
  hiddenCorrect3.classList.remove('hidden');
  hiddenIncorrect3.classList.add('hidden');
  question3.style.display="none";
  question4.style.display="block";
  score = score + 10;
  finalScore.textContent = score + "/50";
}

var displayQuestionIncorrect4 = function (){
  hiddenCorrect3.classList.add('hidden');
  hiddenIncorrect3.classList.remove('hidden');
  question3.style.display="none";
  question4.style.display="block";
  secondsLeft = secondsLeft - 10;
  finalScore.textContent = score + "/50";
}

// Display question 5
var displayQuestionCorrect5 = function (){
  hiddenCorrect4.classList.remove('hidden');
  hiddenIncorrect4.classList.add('hidden');
  question4.style.display="none";
  question5.style.display="block";
  score = score + 10;
  finalScore.textContent = score + "/50";
}

var displayQuestionIncorrect5 = function (){
  hiddenCorrect4.classList.add('hidden');
  hiddenIncorrect4.classList.remove('hidden');
  question4.style.display="none";
  question5.style.display="block";
  secondsLeft = secondsLeft - 10;
  finalScore.textContent = score + "/50";
}

// End game/End answer 5
var correctEndGame = function(){
 question5.style.display="none";
 endScreen.style.display="block";
 score = score + 10;
 finalScore.textContent = score + "/50";
 clearInterval(timeInterval);
}

var incorrectEndGame = function(){
  question5.style.display="none";
  endScreen.style.display="block";
  finalScore.textContent = score + "/50";
  clearInterval(timeInterval);
 }

//  End of game logic
var list = document.getElementById('list')
const submitBtn = document.querySelector("#submit");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitBtn.addEventListener("click", function () {
  clearInterval(timeInterval);
  var initials = document.querySelector("#initials").value;
  var userScore = (initials + ": " + score);
  console.log(userScore);
  localStorage.setItem('userScore', JSON.stringify(userScore));
  endScreen.style.display="none";
  addHighScore();
  highScores.style.display="block";

  function addHighScore (){
    var ol = document.getElementById("list");
    var li = document.createElement("li");
    txtNode = document.createTextNode(localStorage.getItem('userScore', JSON.stringify(userScore)));
    li.appendChild(txtNode);
    ol.appendChild(li);
    localStorage.setItem('list', list.innerHTML);
  }

});

// High score board

function highScoreBoard(){
  document.getElementById('introduction').style.display="none";
  clearInterval(timeInterval);
  question1.style.display="none";
  question2.style.display="none";
  question3.style.display="none";
  question4.style.display="none";
  question5.style.display="none";
  endScreen.style.display="none";
  highScores.style.display="block";
}

function back(){
  document.getElementById('introduction').style.display="block";
  question1.style.display="none";
  question2.style.display="none";
  question3.style.display="none";
  question4.style.display="none";
  question5.style.display="none";
  endScreen.style.display="none";
  highScores.style.display="none";
}

// Display saved scores to scoreboard 
var saved = localStorage.getItem('list');
  if (saved) {
    list.innerHTML = saved;
  }

function clearData(){
  window.localStorage.clear();
}