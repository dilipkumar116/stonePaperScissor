const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options");


options.forEach((option) => {
    option.addEventListener("click", () => {
        player.src = "gameImages/"+option.value+"Player.png";

        const choice = ["stone", "paper", "scissors"];
        let arrayNo = Math.floor(Math.random() * 3);
        let computerChoice = choice[arrayNo];
        computer.src = "gameImages/"+computerChoice+"Computer.png";
  
        let cPoints = parseInt(computerPoints.innerHTML);
        let pPoints = parseInt(playerPoints.innerHTML);
  
        
        if (option.value == computerChoice) {
          // It's a draw
        } else if (
          (option.value == "stone" && computerChoice == "scissors") ||
          (option.value == "paper" && computerChoice == "stone") ||
          (option.value == "scissors" && computerChoice == "paper")
        ) {
          // Player wins
          playerPoints.innerHTML = pPoints + 1;
        } else {
          // Computer wins
          computerPoints.innerHTML = cPoints + 1;
          console.log(options.value)
        }

      })
})
