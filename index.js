
// alert("working");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "./images/" + "dice" + randomNumber1 + ".png"; 
var randomDiceImage2 = "./images/" + "dice" + randomNumber2 + ".png";//dice1-6.png ./images/dice6.png"

var imageSource1 = document.querySelectorAll('img')[0].setAttribute('src', randomDiceImage1);

var imageSource2 = document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2);


if(randomNumber1 > randomNumber2){

    document.querySelector('h2').innerHTML = "Player 1 Won";

} else if (randomNumber2 > randomNumber1){

    document.querySelector('h2').innerHTML = "Player 2 Won";

}else {

    document.querySelector('h2').innerHTML = "Draw, try again";
}