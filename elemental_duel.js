const choices = ["fire", "water", "plant"];
let playerScore = 0;
let computerScore = 0;
let scoreLimit = 5; // Default score limit


function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "fire" && computerSelection === "plant") ||
        (playerSelection === "water" && computerSelection === "fire") ||
        (playerSelection === "plant" && computerSelection === "water")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function setScoreLimit() {
    scoreLimit;
}

function updateMatchHistory(status) {
    const matchHistoryList = document.getElementById("match-history");
    const listItem = document.createElement("li");
    const player = document.getElementById("player-score").innerHTML;
    const computer = document.getElementById("computer-score").innerHTML;
    let result = "";
        result += "<h2>"+ status +"</h2>";
        result += "<span>"+ player +"</span>";
        result += "<span> - </span>";
        result += "<span>"+ computer +"</span>";                        
    listItem.innerHTML = result;
    listItem.style.marginBottom = "15px";
    listItem.style.listStyle = "none";
    matchHistoryList.insertBefore(listItem, matchHistoryList.firstElementChild);
}

function updateBattleLog(result) {
    const matchHistoryList = document.getElementById("battle-log");
    const listItem = document.createElement("li");
    listItem.innerHTML = result;
    listItem.style.marginBottom = "15px";
    listItem.style.listStyle = "none";
    matchHistoryList.insertBefore(listItem, matchHistoryList.firstElementChild);
}


function updateScoreDisplay() {
    const playerScoreDisplay = document.getElementById("player-score");
    const computerScoreDisplay = document.getElementById("computer-score");
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function checkGameResult() {
    if (playerScore >= scoreLimit) {
        alert("Congratulations! You win the game!");
        updateMatchHistory("WIN");
        resetGame();
    } else if (computerScore >= scoreLimit) {
        alert("Sorry, you lose the game.");
        updateMatchHistory("LOSE");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScoreDisplay();
    clearMatchHistory();
}

function logout(){
    window.location.href = 'index.html'
}

function clearMatchHistory() {
    const matchHistoryList = document.getElementById("battle-log");
    matchHistoryList.innerHTML = '';
}


//element trigger button (per button)
const buttonfire = document.getElementById("fire");
buttonfire.addEventListener("click", function () {
    setScoreLimit();
    let comp_elemental = "";
    const playerSelection = choices[0];
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (computerSelection == 'fire') {
        comp_elemental = "Fire_Elemental.webp";
    } else if (computerSelection == 'water') {
        comp_elemental = "Ice_Elemental.webp";
    } else if (computerSelection == 'plant') {
        comp_elemental = "Wind_Elemental.webp.gif";
    }

    // Set Hide Player Choices element
    document.getElementById("platform").classList.add("hide");
    // Set Battle Station
    document.getElementById("battle-station").classList.remove("hide");
    // Get Player Slot 
    document.getElementById("player").innerHTML = "<img src='gif/Fire_Elemental.webp' alt='fire'>";
    // Get Computer Slot 
    document.getElementById("computer").innerHTML = "<img src='gif/" + comp_elemental + "' alt='" + computerSelection + "'>";

    updateBattleLog(result);
    updateScoreDisplay();

    setTimeout(function () {
        checkGameResult();
        // Set Hide Player Choices element
        document.getElementById("platform").classList.remove("hide");
        // Set Battle Station
        document.getElementById("battle-station").classList.add("hide");
    }, 2000);
});

const buttonwater = document.getElementById("water");
buttonwater.addEventListener("click", function () {
    setScoreLimit();
    let comp_elemental = "";
    const playerSelection = choices[1];
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (computerSelection == 'fire') {
        comp_elemental = "Fire_Elemental.webp";
    } else if (computerSelection == 'water') {
        comp_elemental = "Ice_Elemental.webp";
    } else if (computerSelection == 'plant') {
        comp_elemental = "Wind_Elemental.webp.gif";
    }

    // Set Hide Player Choices element
    document.getElementById("platform").classList.add("hide");
    // Set Battle Station
    document.getElementById("battle-station").classList.remove("hide");
    // Get Player Slot 
    document.getElementById("player").innerHTML = "<img src='gif/Ice_Elemental.webp' alt='fire'>";
    // Get Computer Slot 
    document.getElementById("computer").innerHTML = "<img src='gif/" + comp_elemental + "' alt='" + computerSelection + "'>";

    updateBattleLog(result);
    updateScoreDisplay();

    setTimeout(function () {
        checkGameResult();
        // Set Hide Player Choices element
        document.getElementById("platform").classList.remove("hide");
        // Set Battle Station
        document.getElementById("battle-station").classList.add("hide");
    }, 2000);
});

const buttonplant = document.getElementById("plant");
buttonplant.addEventListener("click", function () {
    setScoreLimit();
    let comp_elemental = "";
    const playerSelection = choices[2];
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (computerSelection == 'fire') {
        comp_elemental = "Fire_Elemental.webp";
    } else if (computerSelection == 'water') {
        comp_elemental = "Ice_Elemental.webp";
    } else if (computerSelection == 'plant') {
        comp_elemental = "Wind_Elemental.webp.gif";
    }

    // Set Hide Player Choices element
    document.getElementById("platform").classList.add("hide");
    // Set Battle Station
    document.getElementById("battle-station").classList.remove("hide");
    // Get Player Slot 
    document.getElementById("player").innerHTML = "<img src='gif/Wind_Elemental.webp.gif' alt='fire'>";
    // Get Computer Slot 
    document.getElementById("computer").innerHTML = "<img src='gif/" + comp_elemental + "' alt='" + computerSelection + "'>";

    updateBattleLog(result);
    updateScoreDisplay();

    setTimeout(function () {
        checkGameResult();
        // Set Hide Player Choices element
        document.getElementById("platform").classList.remove("hide");
        // Set Battle Station
        document.getElementById("battle-station").classList.add("hide");
    }, 2000);
});


//modal functions

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}