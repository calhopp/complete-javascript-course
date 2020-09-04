/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, gamePlaying, previousRoll, previousRoll2, winningScore;

init();

function togglePlayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    previousRoll = 0;
    previousRoll2 = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    previousRoll = 0;
    winningScore = document.querySelector('.win-score').value;
    if (winningScore == "") {
        winningScore = 100;
    }

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        //1. Generate random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = "dice-"+dice+".png";
        var diceDom2 = document.querySelector('.dice2');
        diceDom2.style.display = 'block';
        diceDom2.src = "dice-"+dice2+".png";
        //3. Update round score if dice != 1
        if (dice === 1 || dice2 === 1) {
            togglePlayer();
        } else if (dice === 6 || dice2 == 6) {
            if (previousRoll === 6 || previousRoll2 === 6 || dice === dice2) {
                score[activePlayer] = 0;
                roundScore = 0;
                document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
                togglePlayer();
            } else {
                roundScore += dice + dice2;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
        } else {
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        previousRoll = dice;
        previousRoll2 = dice2;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //add roundScore to score[activePlayer]
        score[activePlayer] += roundScore;
        //update score UI
        document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];
        //check if player won the game
        if (score[activePlayer] >= winningScore) {
            //win the game
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            togglePlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);