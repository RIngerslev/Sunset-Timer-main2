function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    
};

function changeColor(button){
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
};

function toHoursAndMinutes(remainingTime){
  let minutes = remainingTime % 60;
  let hours = Math.floor(remainingTime / 60);

  return hours + ':' + minutes;
};

// variable to store count
var remainingTime = 180;

// variable to store time interval
var timer;

// Variable to track whether timer is running or not
var isStopped = true;

//Button Element


// Function to start Timer
const startTimer = (countContainer) => {
  if (isStopped) {
    isStopped = false;
    countContainer.innerHTML = toHoursAndMinutes(remainingTime);
    alert(countContainer + remainingTime);
    timer = setInterval(renderTime, 60000);
  }
};


  // Function to stop Timer
const stopTimer = () => {
  isStopped = true;
  if (timer) {
    clearInterval(timer);
  }
};

  // Function to reset Timer
const resetTimer = () => {
  isStopped = true;
  clearInterval(timer);
  remainingTime = toHoursAndMinutes(180);
  countContainer.innerHTML = remainingTime;
};

// Attach onclick event to buttons


// function to display time
const renderTime = () => {
  // decement time
  remainingTime -= 1;
  // render count on the screen
  countContainer.innerHTML = toHoursAndMinutes(remainingTime);
  // timeout on zero
  if (remainingTime === 0) {
    isStopped = true;
    clearInterval(timer);
    remainingTime = toHoursAndMinutes(180);
  }
};

const buttonIceberg = document.getElementById('buttonIceberg');
const buttonPickles = document.getElementById('buttonPickles');
const buttonOnion = document.getElementById('buttonOnion');
const buttonCheese = document.getElementById('buttonCheese');
const buttonRedOnion = document.getElementById('buttonRedOnion');
const buttonSalatmix = document.getElementById('buttonSalatmix');
const buttonTomato = document.getElementById('buttonTomato');
const buttonCucumber = document.getElementById('buttonCucumber');

/*
buttonIceberg.addEventListener('click', function onClick(){
    changeColor(buttonIceberg);
    startTimer();
});

buttonOnion.addEventListener('click', function onClick() {
    changeColor(buttonOnion);
    countdownTimer(document.getElementById("timerOnion"), buttonCheese);
  });

buttonCheese.addEventListener('click', function onClick() {
    changeColor(buttonCheese);
    countdownTimer(document.getElementById("timerCheese"), buttonCheese);
  });

buttonRedOnion.addEventListener('click', function onClick() {
    changeColor(buttonRedOnion);
    countdownTimer(document.getElementById("timerRedOnion"), buttonRedOnion);
  });

buttonSalatmix.addEventListener('click', function onClick() {
    changeColor(buttonSalatmix);
    countdownTimer(document.getElementById("timerSalatmix"), buttonSalatmix);
  });

buttonTomato.addEventListener('click', function onClick() {
    changeColor(buttonTomato);
    countdownTimer(document.getElementById("timerTomato"), buttonTomato);
  });

buttonCucumber.addEventListener('click', function onClick() {
    changeColor(buttonCucumber);
    countdownTimer(document.getElementById("timerCucumber"), buttonCucumber);
  });

buttonPickles.addEventListener('click', function onClick(){
    changeColor(buttonPickles);
    countdownTimer(document.getElementById("timerPickles"), buttonPickles);
});
*/