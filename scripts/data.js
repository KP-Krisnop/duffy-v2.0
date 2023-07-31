const rankNames = document.querySelectorAll('.name');
const rankScore = document.querySelectorAll('.score');
const rankAddedScore = document.querySelectorAll('.added-score');
const rankBookStreek = document.querySelectorAll('.book-streek');

const goals = document.querySelectorAll('.goals');
const results = document.querySelectorAll('.results');

const properties = ['name', 'score', 'addedScore', 'bookStreek'];
const rankProperties = [rankNames, rankScore, rankAddedScore, rankBookStreek];
const displayPrefix = ['', '', '+', ''];

let rankOrder = [];
let roundNumber = 16;

let playerData = [
  {
    name: 'Player 1',
    score: 0,
    addedScore: 0,
    bookStreek: 0,
    goal: 0,
    result: 0,
  },
  {
    name: 'Player 2',
    score: 0,
    addedScore: 0,
    bookStreek: 0,
    goal: 0,
    result: 0,
  },
  {
    name: 'Player 3',
    score: 0,
    addedScore: 0,
    bookStreek: 0,
    goal: 0,
    result: 0,
  },
  {
    name: 'Player 4',
    score: 0,
    addedScore: 0,
    bookStreek: 0,
    goal: 0,
    result: 0,
  },
];

let gameDataSet = [];
