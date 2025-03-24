const premierLeague = [
  'Arsenal',
  'Aston Villa',
  'Bournemouth',
  'Brentford',
  'Brighton & Hove Albion',
  'Chelsea',
  'Crystal Palace',
  'Everton',
  'Fulham',
  'Ipswich Town',
  'Leicester City',
  'Liverpool',
  'Manchester City',
  'Manchester United',
  'Newcastle United',
  'Nottingham Forest',
  'Southampton',
  'Tottenham Hotspur',
  'West Ham United',
  'Wolverhampton Wanderers',
];

const homeTeam = premierLeague.splice(
  (Math.random() * premierLeague.length) | 0,
  1
)[0];
const awayTeam = premierLeague.splice(
  (Math.random() * premierLeague.length) | 0,
  1
)[0];

function poissonRandom(mean) {
  const L = Math.exp(-mean);
  let k = 0;
  let p = 1;
  do {
    k++;
    p *= Math.random();
  } while (p > L);
  return k - 1;
}

const homeTeamGoals = poissonRandom(1.5);
const awayTeamGoals = poissonRandom(1.2);

console.log(
  `Match Score: ${homeTeam} ${homeTeamGoals} - ${awayTeamGoals} ${awayTeam}`
);
