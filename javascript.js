var sps = document.querySelectorAll(".option");
var stone = document.getElementById("stone");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var paragraph = document.getElementsByClassName("computer-choice")[0];
var yourScoreCard = document.getElementById("your-score-card");
var computerScoreCard = document.getElementById("computer-score-card");
var i;


function gameStart() {
    var computerChoice, yourScore = 0,
        computerScore = 0,
        yourChoice;
    yourScore = +yourScore;
    computerScore = +computerScore;
    yourScore = 0;
    computerScore = 0;
    sps.forEach(choose);
    var highestTurn = window.prompt("Enter the number of turns you want to play.")
    var turns = 0;
    var nextGameChoice;
    yourScoreCard.innerHTML = yourScore;
    computerScoreCard.innerHTML = computerScore;
    paragraph.innerHTML = " ";

    function choose(choice, index) {
        choice.addEventListener("click", function () {
            yourChoice = index + 1;
            computerChoice = Math.floor(Math.random() * 3) + 1;
            turns++;
            if (computerChoice == 1) {
                paragraph.innerHTML = "Computer Choice: Stone";
            } else if (computerChoice == 2) {
                paragraph.innerHTML = "Computer Choice: Paper";
            } else {
                paragraph.innerHTML = "Computer Choice: Scissor";
            }


            if (yourChoice == computerChoice) {
                paragraph.innerHTML = "This is a Tie";
                computerScoreCard.innerHTML = computerScore;
                yourScoreCard.innerHTML = yourScore;
            } 
            
            else if (((yourChoice == 3) && (computerChoice == 1)) || ((yourChoice == 1) && (computerChoice == 3))) {
                if (yourChoice > computerChoice) {
                    computerScore++;
                    computerScoreCard.innerHTML = computerScore;
                    yourScoreCard.innerHTML = yourScore;
                } 
                else if(yourChoice < computerChoice){
                    yourScore++;
                    computerScoreCard.innerHTML = computerScore;
                    yourScoreCard.innerHTML = yourScore;
                }
            } 
            
            else if (yourChoice > computerChoice) {
                yourScore++;
                yourScoreCard.innerHTML = yourScore;
                computerScoreCard.innerHTML = computerScore;
            }
            
            else {
                computerScore++;
                computerScoreCard.innerHTML = computerScore;
                yourScoreCard.innerHTML = yourScore;
            }

            if (turns == highestTurn) {
                if(computerScore==yourScore)
                    alert("It's a tie");
                else if (computerScore > yourScore)
                    alert("Computer Won SCORE- you: " + yourScore + " computer: " + computerScore);
                else
                    alert("You Won SCORE- you: " + yourScore + " computer: " + computerScore);
                nextGameChoice = window.confirm("Do you want to play another game?");
                if (nextGameChoice == 1)
                    gameStart();
                else {
                    alert("Thanks for playing, Bye!");

                }
            }


        })
    }

}
gameStart();
