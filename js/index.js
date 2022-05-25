import data from '../data.json' assert { type: 'json' }

//Constants

const cardArea = document.querySelector('.cardArea')
const livesCounter = document.querySelector('span')

const lives = 6

livesCounter.textContent = lives
