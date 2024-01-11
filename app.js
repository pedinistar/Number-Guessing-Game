const min = 1;
const max = 100;
const ansNum = Math.floor(Math.random()*max)+1;


let attempts = 0;
const result = document.getElementById("result");
const button = document.getElementById("btn")


button.onclick = function(){
  let guess = document.getElementById("guess").value;
  if(isNaN(guess)){
      result.innerText = "Please enter a valid Number.";
    }
  else if(guess < min || guess > max){
      result.innerText = "Please enter a number within the range provided!"
    }
  else{
    attempts++;
    if(guess<ansNum){
        result.innerText = "Too Low, Try Again!"
      }
    else if (guess>ansNum){
        result.innerText = "Too High, Try Again!"
      }
    else{
        result.innerText = `Correct! 🌈, the answer was ${ansNum}. It took you ${attempts} attempts.`
        gameOn = false
      }
    }
}

 