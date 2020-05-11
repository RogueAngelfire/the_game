// Card one

let flipCardContainer1 = document.querySelector(".flip-card-container1");
      flipCardContainer1.addEventListener("click", function() {
          console.log("flipCardContainer1 clicked");
        flipCardContainer1.classList.toggle("flip");
      });

// Card two

let flipCardContainer2 = document.querySelector(".flip-card-container2");
      flipCardContainer2.addEventListener("click", function() {
          console.log("flipCardContainer2 clicked");
        flipCardContainer2.classList.toggle("flip");
      });


// all atrributes cards alphabetically presented with Characters

let cards = [
  
  {
    'name': 'Bearz',
    'image_link': 'assets/images/cards/Bear_card.png',
    'strength': 10,
    'weight': 140,
    'power': 10,
    'age': 5,
    'magic': 0.5,
  },
  {
    'name': 'Boobee',
    'image_link': 'assets/images/cards/boobee_card.png',
    'strength': 2,
    'weight': 2,
    'power': 5,
    'age': 12,
    'magic': 10,
  },
    {
    'name': 'Catboy',
    'image_link': 'assets/images/cards/Catboy_card.png',
    'strength': 10,
    'weight': 130,
    'power': 10,
    'age': 3,
    'magic': 9,
  },
  {
    'name': 'Cat Castle',
    'image_link': 'assets/images/cards/Catcalstle_card.png',
    'strength': 10,
    'weight': 10000,
    'power': 10,
    'age': 200,
    'magic': 10,
  },
  {
    'name': 'Catdog',
    'image_link': 'assets/images/cards/Catdog_card.png',
    'strength': 7,
    'weight': 10,
    'power': 8,
    'age': 22,
    'magic': 7,
  },
  {
    'name': 'Daah',
    'image_link': 'assets/images/cards/Daadee_card.png',
    'strength': 8,
    'weight': 85,
    'power': 8,
    'age': 30,
    'magic': 10,
  },
  {
    'name': 'Darbin',
    'image_link': 'assets/images/cards/Darbin_card.png',
    'strength': 10,
    'weight': 117,
    'power': 9,
    'age': 45,
    'magic': 10,
  },
  {
    'name': 'Frog',
    'image_link': 'assets/images/cards/Frog_card.png',
    'strength': 5,
    'weight': 1,
    'power': 6,
    'age': 900,
    'magic': 1,
  },
  {
    'name': 'Geko',
    'image_link': 'assets/images/cards/Geko_card.png',
    'strength': 6,
    'weight': 5,
    'power': 7,
    'age': 25,
    'magic': 8,
  },
  {
    'name': 'Ghost',
    'image_link': 'assets/images/cards/ghost_card.png',
    'strength': 7,
    'weight': 0,
    'power': 8,
    'age': 1000,
    'magic': 8,
  },
  {
    'name': 'Glammy',
    'image_link': 'assets/images/cards/Glammy_card.png',
    'strength': 7,
    'weight': 60,
    'power': 7,
    'age': 49,
    'magic': 10,
  },
  {
    'name': 'Grand',
    'image_link': 'assets/images/cards/grand_card.png',
    'strength': 10,
    'weight': 250,
    'power': 8,
    'age': 75,
    'magic': 8,
  },
  {
    'name': 'Karr',
    'image_link': 'assets/images/cards/Karr_card.png',
    'strength': 8,
    'weight': 90,
    'power': 8,
    'age': 21,
    'magic': 6,
  },
  {
    'name': 'Kay-kee',
    'image_link': 'assets/images/cards/Kaykee_card.png',
    'strength': 2,
    'weight': 0.1,
    'power': 2,
    'age': 1,
    'magic': 8,
  },
  {
    'name': 'Knotting-Mouth',
    'image_link': 'assets/images/cards/Knottingmouth_card.png',
    'strength': 10,
    'weight': 400,
    'power': 9,
    'age': 100,
    'magic': 9,
  },
  {
    'name': 'Mar-Mee-duc',
    'image_link': 'assets/images/cards/Marmee_card.png',
    'strength': 5,
    'weight': 68,
    'power': 6,
    'age': 28,
    'magic': 8,
  },
  {
    'name': 'Moo',
    'image_link': 'assets/images/cards/Moo_card.png',
    'strength': 10,
    'weight': 300,
    'power': 9,
    'age': 35,
    'magic': 7,
  },
  {
    'name': 'Mook',
    'image_link': 'assets/images/cards/Mook_card.png',
    'strength': 3,
    'weight': 0.1,
    'power': 3,
    'age': 3,
    'magic': 7,
  },
  {
    'name': 'Mum-Mers',
    'image_link': 'assets/images/cards/Mummers_card.png',
    'strength': 6,
    'weight': 70,
    'power': 8,
    'age': 70,
    'magic': 9,
  },
  {
    'name': 'Oppih',
    'image_link': 'assets/images/cards/oppih_card.png',
    'strength': 7,
    'weight': 300,
    'power': 7,
    'age': 18,
    'magic': 8,
  },
  {
    'name': 'Pee-Peels',
    'image_link': 'assets/images/cards/Peapeel_card.png',
    'strength': 10,
    'weight': 150,
    'power': 9,
    'age': 2000,
    'magic': 7,
  },
  {
    'name': 'Peet',
    'image_link': 'assets/images/cards/Peet_card.png',
    'strength': 9,
    'weight': 94,
    'power': 7,
    'age': 42,
    'magic': 7,
  },
  {
    'name': 'Raaaa',
    'image_link': 'assets/images/cards/Raaaaa_card.png',
    'strength': 10,
    'weight': 450,
    'power': 9,
    'age': 50,
    'magic': 9,
  },
  {
    'name': 'Rory Dragon',
    'image_link': 'assets/images/cards/Rory_Dragon_card.png',
    'strength': 10,
    'weight': 1000,
    'power': 10,
    'age': 700,
    'magic': 9,
  },
  {
    'name': 'T-Ruck',
    'image_link': 'assets/images/cards/Truck_card.png',
    'strength': 8,
    'weight': 100,
    'power': 8,
    'age': 200,
    'magic': 7,
  },
  {
    'name': 'Twoo',
    'image_link': 'assets/images/cards/Twoo_card.png',
    'strength': 7,
    'weight': 9,
    'power': 8,
    'age': 400,
    'magic': 7,
  },
  {
    'name': 'Upsteps',
    'image_link': 'assets/images/cards/Upsteps_card.png',
    'strength': 9,
    'weight': 200,
    'power': 8,
    'age': 46,
    'magic': 8,
  },
  {
    'name': 'Weewoo',
    'image_link': 'assets/images/cards/Weewoo_card.png',
    'strength': 7,
    'weight': 3,
    'power': 8,
    'age': 7,
    'magic': 9,
  },
  {
    'name': 'Whistle',
    'image_link': 'assets/images/cards/Whistle_card.png',
    'strength': 7,
    'weight': 90,
    'power': 9,
    'age': 47,
    'magic': 8,
  },
   {
    'name': 'Winky-Face',
    'image_link': 'assets/images/cards/Winky_Face_card.png',
    'strength': 4,
    'weight': 8,
    'power': 4,
    'age': 2,
    'magic': 10,
  }

];

// cards.length - 0 to 29. Use Math.random().

let playerOneScore = 0
let playerTwoScore = 0
let numTurnsPlayed = 0
let reset = document.querySelector('#reset');
const maxTurns = 4 //increase this once game running

$(function() {
    $('.cardy').click(function(e) {
        e.preventDefault();
        var number = Math.floor(Math.random()*cards.length);
        $(this).children('div').children('div').children('img').attr('src', cards[number].image_link);
        if(e.currentTarget.id === 'player-one-card'){
            playerOneScore = playerOneScore + cards[number].strength 
            numTurnsPlayed = numTurnsPlayed + 1
            document.getElementById("score1").innerHTML = playerOneScore;
        }
        else if(e.currentTarget.id === 'player-two-card'){
            playerTwoScore = playerTwoScore + cards[number].strength 
            numTurnsPlayed = numTurnsPlayed + 1
        document.getElementById("score2").innerHTML = playerTwoScore; // check this 
            if(maxTurns === numTurnsPlayed) {

                // Call winner using an alert
                resetGame() 

            }
            

        } 
    });
});

function resetGame(){
     playerOneScore = 0
    playerTwoScore = 0
    numTurnsPlayed = 0
}

/*
// Game score update 09/05/20 remove below information Remove the following code before submitting.

let playerOneCard = document.querySelector("#playerOneCard");
let p1s = document.querySelector("#score1");
let score1 = 0;

let playerTwoCard = document.querySelector("#playerTwoCard");
let p2s = document.querySelector("#score2");
let score2 = 0;


let winner = document.querySelector("#winner");

cards.addEventlistener("click", function(){

  let limit = document.querySelector("#limit").value;

  score1++;

  p1s.textContent = score1;
});

if( score1 == limit || (score1>score2 && score1>limit)){
p1s.classList.add("green");
  cards.setAttribute("disabled", "true");

printWinner();
}

reset.addEventListener("click", function(){ // Taken from code below where addEventlistener not working
  cards.removeAttribute("disabled");
  p1s.classList.remove("green");
  p2s.classList.remove("green");

  score1,score2 = 0;

  p1s.textContent = score1;
  p2s.textContent = Score2;

  document.querySelector("#limit"); value = 15;

  winner.textContent = "";
});

cards.addEventlistener("click", function(){

  var limit = document.querySelector("#limit").value;
  
  score1++;

  p2s.textContent = score1;

  if( score2 == limit || (score2>score1 && score2>limit)){
p2s.classList.add("green");
  cards.setAttribute("disabled", "true");

 printWinner();
}

});

reset.addEventListener("click", function(){
  cards.removeAttribute("disabled");
  p1s.classList.remove("green");
  p2s.classList.remove("green");

  score1,score2 = 0;

  p1s.textContent = score1;
  p2s.textContent = Score2;

  document.querySelector("#limit"); value = 15;

  winner.textContent = "";
});

function printWinner()

if(score1>Score2); {
  winner.textContent = "Player1";
}
else;
{
  winner.textContent = "Player2";
});  

/*

let Score = 0;


let playerOneScore = 0;
let playerTwoScore = 0;

let strength = document.createElement('span');
strength.innerText = cards.strength;
cards.appendChild(strength);

function getScore(playerOneScore, playerTwoScore) {
  if (playerOneScore.strength.cards > playerTwoScore.strength.cards) {
	return [2, 0];
  }
 
  else if (playerOneScore.strength.cards < playerTwoScore.strength.cards) {
	return [0, 2];
  }
 
  else {
    return [1, 1];
    

  }
 
}
console.log(getScore);

// var chooseRandomCharacter =();

// Player One Choses attribute(). below makes a difference since playTurn added

function playTurn(cardsID) {
let playerOne = chooseRandomCharacter(); 
let playerOneCharacter = chooseRandomCharacter(); // Wait for player 1 to click on their card onclick
 
let playerTwoCharacter = chooseRandomCharacter();// Wait for player 2 to click on their card  onclick

// if (cards.innerHTML != ;
 
  // Score should be some data structure that holds the scores for both players
  // There's probably a better way to do this, but for now, make it an array of two numbers.

let score = getScore(playerOneCharacter, playerTwoCharacter);
 
  // When the game is done, use an if statement to say who's the winner. Not
  // sure if this has to be in this function or another. Will let you decide.
 
}
 */
// Given two characters, compare them and return a score.
 
// Args:
  // characterOne, characterTwo: character objects. The characters to compare
 
//  Returns:
  // array of two numbers: The scores for characterOne and characterTwo respectively.

// Selecting a random character -- pick a random number between 0 and the 
// cards.length - 1. Use Math.random(). Getting a random integer between two values in the document below*/

// below section worked on test



/* BELOW CODE WHERE CONFLICTS ARE

// Choose a character from the list of characters in the characters array.

function chooseCharacter(){
 
}

function playTurn(cardsID); { // run this with cardID test from index.html
  let player-one = chooseRandomCharacter();
  let cards = document.getElementById(cardsID);
}

if (cards.innerHTML !=''); {}

if (cardsID === 'player-one');
else if (cardsID === 'player-two');

console.log(game);

let player1 = document.createElement('span');
player1.innertext = character.name;
cards.appendChild(playerOne);


let strength = document.createElement('span');
strength.innerText = Character.strength;
cards.appendChild(strength);

let cardsImage = document.createElement('img');
let cardsImage = document.createElement('img');
cardsImage.SetAttribute('scr', imageDirectory + character.image);
cards.appendChild(cardsImage);

if (game.playerTwoTurnsSoFar === game.currentGameRound);

}

} */
