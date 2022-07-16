var randomNumber1 = Math.ceil(6*Math.random());
var sol = "images/"+"dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",sol)

var randomNumber2 = Math.ceil(6*Math.random());
var sol2 = "images/"+"dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",sol2)

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins"
}else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins"
}else{
  document.querySelector("h1").innerHTML = "Draw"
}
