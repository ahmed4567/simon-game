let inputStake = ["red" , "blue", "green" , "yellow"];
let gamePattern =[];
let userChosenColoor=[];
let level = 0 ;
let start = false;  
let gamestat = true;
function nextColor(){
    userChosenColoor=[];
    let newInput = Math.floor(Math.random()*4);
    let chosenColor = inputStake[newInput];
    gamePattern.push(chosenColor);
    level++
    $("#level-title").text("level" + level)
    setTimeout(function() {
        makeSound(chosenColor);
        $("#" + chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    }, 200); 
}
$(document).keypress(function(){
  if (!start){
    $("#level-title").text("level" + level)
    nextColor()
    start = true;
  }
});
$(".btn").click(function(){
    userChosenColoor.push($(this).attr("id"));
    let ChosenColoor = $(this).attr("id")
    makeSound(ChosenColoor);
    animatePress(ChosenColoor);
    checkAnswer(userChosenColoor.length-1);
    console.log(userChosenColoor , gamePattern)
});
function checkAnswer(currentlevel) {
   
  if (gamePattern[currentlevel]=== userChosenColoor[currentlevel]){
    if (userChosenColoor.length === gamePattern.length){
      setTimeout(function () {
        nextColor();
      }, 1000);
    }
  }else{
    console.log(userChosenColoor , gamePattern)
    gamestat=false;
    makeSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("game over , press any key to restart")
    setTimeout(function(){
      $("body").removeClass("game-over")
    }, 200);
    startOver()
  }
  
}
function makeSound(key) {
    switch (key) {
      case "red":
        var redA = new Audio("sounds/red.mp3");
        redA.play();
        break;
      case "blue":
        var blueA = new Audio("sounds/blue.mp3");
        blueA.play();
        break;
      case "green":
        var greenA = new Audio("sounds/green.mp3");
        greenA.play();
        break;
      case "yellow":
        var yellowA = new Audio("sounds/yellow.mp3");
        yellowA.play();
        break;
      case "weong":
        var wrongA = new Audio("sounds/wrong.mp3")
    }
  }
  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  function startOver() {
    level = 0
    gamestat =true
    start = false
    gamePattern = [];
    userChosenColoor=[];
  }