function rollSingleDice()
{
    return Math.floor(Math.random()*6+1);
}

//Make the rollDice function roll dice,
//check for doubles, and return the
//total score achieved by all rolls
function rollDice(player) {
var score = 0;
var roll1; var roll2;
var playerScore;
    do {
        roll1 = rollSingleDice();
        roll2 = rollSingleDice();
        score = roll1 + roll2;
        player.addToScore(score);
        playerScore = player.getScore();
        console.log("Roll 1: " + roll1 + " Roll 2: " + roll2 + " Total Score: " + playerScore);

        if (roll1 == roll2) {
            if (roll1 === 1) {
                console.log("Snake Eyes!");
                return true;
            } else {
                console.log("Congrats! Double Thrown!");
            }
        }
    } while (roll1 === roll2);
    return false;
}


function Player(name) {
  this.name = name;
  var score = 0; // this is a private attribute
  this.addToScore = function(points) {
    score = score + points;
  };
  this.getScore = function() {
    return score;
  };
}

var player1 = new Player("Bobby");
var snakeEyes = false;
while(snakeEyes === false) {
    snakeEyes = rollDice(player1);
}
