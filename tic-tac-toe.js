// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var buttonClicked = "no"
var rectColor="white"
function topLeft()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("topLeft")
  if (buttonClicked == "no")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
    buttonClicked = "yes"
  }
}






var secondButtonClicked="no"
function topMiddle()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("topMiddle")
  if (secondButtonClicked == "no")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"

  }
  secondButtonClicked="yes"
}






var thirdButtonClicked="no"
function topRight()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("topRight")
  if (thirdButtonClicked=="no")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"

  }
  thirdButtonClicked="yes"
}





var fourthButtonClicked="no"
function middleLeft()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("middleLeft")
  if(fourthButtonClicked=="no")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
  fourthButtonClicked="yes"
}





var fifthButtonClicked="no"
function mid()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("mid")
  if(fifthButtonClicked=="no")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
  fifthButtonClicked="yes"
}





var sixthButtonClicked="no"
function middleRight()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("middleRight")
  if(sixthButtonClicked=="no")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
  sixthButtonClicked="yes"
}




var seventhButtonClicked="no"
function bottomLeft()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("bottomLeft")
  if(seventhButtonClicked=="no")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
  seventhButtonClicked="yes"
}




var eighthButtonClicked="no"
function bottomMiddle()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("bottomMiddle")
  if(eighthButtonClicked=="no")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
  eighthButtonClicked="yes"
}





var ninthButtonClicked="no"
function bottomRight()
{
  var canvas = document.getElementById("game-board")
  var rect = document.getElementById("bottomRight")
  if(ninthButtonClicked=="no")
  if (rectColor=="orange") {
    rect.setAttribute("fill", "white")
    rectColor="white"
  } else{
    rect.setAttribute("fill", "orange")
    rectColor="orange"
  }
  ninthButtonClicked="yes"
}
