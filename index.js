let homeScore = 0;
let awayScore = 0;

function incrementScore(team) {
  if (team === 'home') {
    homeScore++;
    document.getElementById('homeScore').textContent = homeScore;
  } else if (team === 'away') {
    awayScore++;
    document.getElementById('awayScore').textContent = awayScore;
  }
}
