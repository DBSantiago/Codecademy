const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
    {
      firstName: "Marta",
      lastName: "Lopez",
      age: 12,
    },
    {
      firstName: "Juan",
      lastName: "García",
      age: 13,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Bronquitos",
      teamPoints: 35,
      opponentPoints: 34,
    },
    {
      opponent: "Broncatos",
      teamPoints: 22,
      opponentPoints: 47,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age,
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Bulls", 76, 28);
team.addGame("Cows", 46, 44);
team.addGame("Birds", 28, 76);

console.log(team.games);
