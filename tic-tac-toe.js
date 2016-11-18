// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var buttonClicked = 0
var rectColor="white"
function topLeft()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("topLeft")
  if (buttonClicked == 0)
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
    buttonClicked = 1
  }
}






var secondButtonClicked="no"
function topMiddle()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("topMiddle")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
}






var thirdButtonClicked="no"
function topRight()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("topRight")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
}





var fourthButtonClicked="no"
function middleLeft()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("middleLeft")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
}





var fifthButtonClicked="no"
function mid()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("mid")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
}





var sixthButtonClicked="no"
function middleRight()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("middleRight")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
}




var seventhButtonClicked="no"
function bottomLeft()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("bottomLeft")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
}




var eighthButtonClicked="no"
function bottomMiddle()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("bottomMiddle")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
}





var ninthButtonClicked="no"
function bottomRight()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("bottomRight")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
}
