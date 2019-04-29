var roll1 = Math.floor(Math.random()*6)+1;
var roll2 = Math.floor(Math.random()*6)+1;

var image1 = document.querySelector(".img1").parentNode.querySelector("img");
image1.setAttribute("src", "images/dice"+roll1+".png");
var image2 = document.querySelector(".img2").parentNode.querySelector("img");
image2.setAttribute("src", "images/dice"+roll2+".png");

if(roll1 > roll2) { //roll1 wins
  console.log("Player1 wins!");
  document.querySelector("h1").innerHTML = "🚩Player1 wins!";
} else if (roll2 > roll1) { //roll2 wins
  console.log("Player2 wins!");
  document.querySelector("h1").innerHTML = "Player2 wins!🚩";
} else { //draw
  console.log("Draw!");
  document.querySelector("h1").innerHTML = "Draw!";
}
