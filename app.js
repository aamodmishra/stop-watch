document.getElementById("timer-el").innerText="0:0:0"
var count = 0
let countEl=document.getElementById("timer-el")
let resetEl=document.getElementById("reset-el")
function start() {
    intervalId = setInterval(() => {
      const counterDisplay = document.getElementById("counter");
      countEl.textContent ="0"+":"+"0"+":"+ count ; 
      count++; 
    }, 150); 
  }
function stop(){
    clearInterval(intervalId)
}
function reset(){
    count=0
    countEl.innerHTML=count+":"+"0"+":"+"0"
    stop()
}
 


