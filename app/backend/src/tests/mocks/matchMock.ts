const createReturn = {
  id: 7,
  homeTeamId: 16,
  awayTeamId: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true
};

const duplicateTeamJson = {
  "homeTeamId": 1,
  "awayTeamId": 1,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

const newMatchJson = {
  "id": 7,
  "homeTeamId": 16,
  "awayTeamId": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2,
  "inProgress": true
}

const newMatchDataJson = {
  "homeTeamId": 16,
  "awayTeamId": 8,
  "homeTeamGoals": 2,
  "awayTeamGoals": 2
}

const findAllReturn = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo',
    },
    awayTeam: {
      teamName: 'Grêmio',
    },
  },
  {
    id: 2,
    homeTeamId: 9,
    homeTeamGoals: 1,
    awayTeamId: 14,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional',
    },
    awayTeam: {
      teamName: 'Santos',
    },
  },
  {
    id: 3,
    homeTeamId: 4,
    homeTeamGoals: 3,
    awayTeamId: 11,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Corinthians',
    },
    awayTeam: {
      teamName: 'Napoli-SC',
    },
  },{
    id: 4,
    homeTeamId: 4,
    homeTeamGoals: 1,
    awayTeamId: 12,
    awayTeamGoals: 1,
    inProgress: true,
    homeTeam: {
      teamName: 'Corinthians',
    },
    awayTeam: {
      teamName: 'Palmeiras',
    },
  },
  {
    id: 5,
    homeTeamId: 8,
    homeTeamGoals: 1,
    awayTeamId: 14,
    awayTeamGoals: 2,
    inProgress: true,
    homeTeam: {
      teamName: 'Grêmio',
    },
    awayTeam: {
      teamName: 'Santos',
    },
  },
  {
    id: 6,
    homeTeamId: 13,
    homeTeamGoals: 1,
    awayTeamId: 2,
    awayTeamGoals: 1,
    inProgress: true,
    homeTeam: {
      teamName: 'Real Brasília',
    },
    awayTeam: {
      teamName: 'Bahia',
    },
  }
];

const finishedMatchesJson = [
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeamId": 9,
    "homeTeamGoals": 1,
    "awayTeamId": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeamId": 4,
    "homeTeamGoals": 3,
    "awayTeamId": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  }
]

const matchesJson = [
  {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 1,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "São Paulo"
    },
    "awayTeam": {
      "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeamId": 9,
    "homeTeamGoals": 1,
    "awayTeamId": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Internacional"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 3,
    "homeTeamId": 4,
    "homeTeamGoals": 3,
    "awayTeamId": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Napoli-SC"
    }
  },{
    "id": 4,
    "homeTeamId": 4,
    "homeTeamGoals": 1,
    "awayTeamId": 12,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 5,
    "homeTeamId": 8,
    "homeTeamGoals": 1,
    "awayTeamId": 14,
    "awayTeamGoals": 2,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 6,
    "homeTeamId": 13,
    "homeTeamGoals": 1,
    "awayTeamId": 2,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  }
]

const matchUpdateJson = {
  "homeTeamGoals": 3,
  "awayTeamGoals": 1
}

const ongoingMatchesJson = [
  {
    "id": 4,
    "homeTeamId": 4,
    "homeTeamGoals": 1,
    "awayTeamId": 12,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Corinthians"
    },
    "awayTeam": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 5,
    "homeTeamId": 8,
    "homeTeamGoals": 1,
    "awayTeamId": 14,
    "awayTeamGoals": 2,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Grêmio"
    },
    "awayTeam": {
      "teamName": "Santos"
    }
  },
  {
    "id": 6,
    "homeTeamId": 13,
    "homeTeamGoals": 1,
    "awayTeamId": 2,
    "awayTeamGoals": 1,
    "inProgress": true,
    "homeTeam": {
      "teamName": "Real Brasília"
    },
    "awayTeam": {
      "teamName": "Bahia"
    }
  }
]

export {
  createReturn,
  duplicateTeamJson,
  findAllReturn,
  finishedMatchesJson,
  matchesJson,
  matchUpdateJson,
  newMatchDataJson,
  newMatchJson,
  ongoingMatchesJson,
}
