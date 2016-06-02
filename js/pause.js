$(document).on("keydown", function(event){
  if (event.which == 80) {
    pauseGame();
  }
})

function pauseGame(){
  alert("Game is Paused");
}
