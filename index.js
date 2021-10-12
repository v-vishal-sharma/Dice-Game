var randomnumber1 = Math.floor(Math.random()*6+1);
var randomnumber2 = Math.floor(Math.random()*6+1);

var dicenumber = "dice" + randomnumber1 + ".png";
var dicenumber2 = "dice" + randomnumber2 + ".png";

var diceimage = "images/" + dicenumber;
var diceimage2 = "images/" + dicenumber2;

document.querySelectorAll("img")[0].setAttribute("src" , diceimage);
document.querySelectorAll("img")[1].setAttribute("src" , diceimage2);


if (randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins" ;
}

else if (randomnumber2 > randomnumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩" ;
}

else {
  document.querySelector("h1").innerHTML = "DRAW!" ;
}
