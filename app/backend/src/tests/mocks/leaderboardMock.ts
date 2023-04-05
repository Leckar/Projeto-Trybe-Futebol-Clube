const getAll = [
  {
  id: 16,
  teamName: 'São Paulo',
  homeMatches: [
    { homeTeamGoals: 1, awayTeamGoals: 1 },
    { homeTeamGoals: 3, awayTeamGoals: 0 }
  ],
  awayMatches: [
    { homeTeamGoals: 2, awayTeamGoals: 1 },
    { homeTeamGoals: 2, awayTeamGoals: 3 },
    { homeTeamGoals: 1, awayTeamGoals: 1 }
  ]
  },{
    id: 9,
    teamName: 'Internacional',
    homeMatches: [
      { homeTeamGoals: 1, awayTeamGoals: 1 },
      { homeTeamGoals: 0, awayTeamGoals: 4 },
      { homeTeamGoals: 3, awayTeamGoals: 1 }
    ],
    awayMatches: [
      { homeTeamGoals: 0, awayTeamGoals: 2 },
      { homeTeamGoals: 0, awayTeamGoals: 1 }
    ]
  },{
    id: 4,
    teamName: 'Corinthians',
    homeMatches: [
      { homeTeamGoals: 3, awayTeamGoals: 0 },
      { homeTeamGoals: 3, awayTeamGoals: 1 }
    ],
    awayMatches: [
      { homeTeamGoals: 0, awayTeamGoals: 1 },
      { homeTeamGoals: 0, awayTeamGoals: 4 },
      { homeTeamGoals: 2, awayTeamGoals: 1 }
    ]
  },{
    id: 3,
    teamName: 'Botafogo',
    homeMatches: [
      { homeTeamGoals: 0, awayTeamGoals: 0 },
      { homeTeamGoals: 0, awayTeamGoals: 4 },
      { homeTeamGoals: 2, awayTeamGoals: 0 }
    ],
    awayMatches: [
      { homeTeamGoals: 1, awayTeamGoals: 0 },
      { homeTeamGoals: 3, awayTeamGoals: 1 }
    ]
  }
];

const getAllJson = [
  {
    "name": "Corinthians",
    "totalPoints": 12,
    "totalVictories": 4,
    "totalDraws": 0,
    "totalLosses": 1,
    "totalGames": 5,
    "goalsFavor": 12,
    "goalsOwn": 3,
    "goalsBalance": 9,
    "efficiency": 80
  },
  {
    "name": "Internacional",
    "totalPoints": 10,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 1,
    "totalGames": 5,
    "goalsFavor": 7,
    "goalsOwn": 6,
    "goalsBalance": 1,
    "efficiency": 66.67
  },
  {
    "name": "São Paulo",
    "totalPoints": 8,
    "totalVictories": 2,
    "totalDraws": 2,
    "totalLosses": 1,
    "totalGames": 5,
    "goalsFavor": 9,
    "goalsOwn": 6,
    "goalsBalance": 3,
    "efficiency": 53.33
  },
  {
    "name": "Botafogo",
    "totalPoints": 4,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 3,
    "totalGames": 5,
    "goalsFavor": 3,
    "goalsOwn": 8,
    "goalsBalance": -5,
    "efficiency": 26.67
  }
]

const getAllAway = [
  {
    id: 8,
    teamName: 'Grêmio',
    awayMatches: [
      { homeTeamGoals: 1, awayTeamGoals: 1 },
      { homeTeamGoals: 2, awayTeamGoals: 3 },
      { homeTeamGoals: 4, awayTeamGoals: 1 }
    ]
  },{
    id: 14,
    teamName: 'Santos',
    awayMatches: [
      { homeTeamGoals: 1, awayTeamGoals: 1 },
      { homeTeamGoals: 2, awayTeamGoals: 2 }
    ]
  },{
    id: 11,
    teamName: 'Napoli-SC',
    awayMatches: [
      { homeTeamGoals: 3, awayTeamGoals: 0 },
      { homeTeamGoals: 5, awayTeamGoals: 1 },
      { homeTeamGoals: 2, awayTeamGoals: 0 }
    ]
  },{
    id: 2,
    teamName: 'Bahia',
    awayMatches: [
      { homeTeamGoals: 0, awayTeamGoals: 0 },
      { homeTeamGoals: 2, awayTeamGoals: 2 }
    ]
  }
];

const getAllAwayJson = [
  {
    "name": "Grêmio",
    "totalPoints": 4,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "totalGames": 3,
    "goalsFavor": 5,
    "goalsOwn": 7,
    "goalsBalance": -2,
    "efficiency": 44.44
  },
  {
    "name": "Santos",
    "totalPoints": 2,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 0,
    "totalGames": 2,
    "goalsFavor": 3,
    "goalsOwn": 3,
    "goalsBalance": 0,
    "efficiency": 33.33
  },
  {
    "name": "Bahia",
    "totalPoints": 2,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 0,
    "totalGames": 2,
    "goalsFavor": 2,
    "goalsOwn": 2,
    "goalsBalance": 0,
    "efficiency": 33.33
  },
  {
    "name": "Napoli-SC",
    "totalPoints": 0,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 3,
    "totalGames": 3,
    "goalsFavor": 1,
    "goalsOwn": 10,
    "goalsBalance": -9,
    "efficiency": 0
  }
]

const getAllHome = [
  {
    id: 16,
    teamName: 'São Paulo',
    homeMatches: [
      { homeTeamGoals: 1, awayTeamGoals: 1 },
      { homeTeamGoals: 3, awayTeamGoals: 0 }
    ]
  },{
    id: 9,
    teamName: 'Internacional',
    homeMatches: [
      { homeTeamGoals: 1, awayTeamGoals: 1 },
      { homeTeamGoals: 0, awayTeamGoals: 4 },
      { homeTeamGoals: 3, awayTeamGoals: 1 }
    ]
  },{
    id: 4,
    teamName: 'Corinthians',
    homeMatches: [
      { homeTeamGoals: 3, awayTeamGoals: 0 },
      { homeTeamGoals: 3, awayTeamGoals: 1 },
      { homeTeamGoals: 2, awayTeamGoals: 1 }
    ]
  },{
    id: 3,
    teamName: 'Botafogo',
    homeMatches: [
      { homeTeamGoals: 0, awayTeamGoals: 0 },
      { homeTeamGoals: 0, awayTeamGoals: 4 },
      { homeTeamGoals: 2, awayTeamGoals: 0 }
    ]
  }
];

const getAllHomeJson = [
  {
    "name": "Corinthians",
    "totalPoints": 9,
    "totalVictories": 3,
    "totalDraws": 0,
    "totalLosses": 0,
    "totalGames": 3,
    "goalsFavor": 8,
    "goalsOwn": 2,
    "goalsBalance": 6,
    "efficiency": 100
  },
  {
    "name": "São Paulo",
    "totalPoints": 4,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 0,
    "totalGames": 2,
    "goalsFavor": 4,
    "goalsOwn": 1,
    "goalsBalance": 3,
    "efficiency": 66.67
  },
  {
    "name": "Internacional",
    "totalPoints": 4,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "totalGames": 3,
    "goalsFavor": 4,
    "goalsOwn": 6,
    "goalsBalance": -2,
    "efficiency": 44.44
  },
  {
    "name": "Botafogo",
    "totalPoints": 4,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "totalGames": 3,
    "goalsFavor": 2,
    "goalsOwn": 4,
    "goalsBalance": -2,
    "efficiency": 44.44
  }
]

export {
  getAll,
  getAllAway,
  getAllAwayJson,
  getAllHome,
  getAllHomeJson,
  getAllJson,
}