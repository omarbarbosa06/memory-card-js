import data from '../data.json' assert { type: 'json' }

//Constants

const cardArea = document.querySelector('.cardArea')
const livesCounter = document.querySelector('span')

const lives = 6

livesCounter.textContent = lives

//Random data order
const randomizeData = () => {
  return data.sort(() => Math.random() - 0.5)
}

//Generate html cards
const cardGenerator = () => {
  const randomizeCardData = randomizeData()
  //Generate HTML
  randomizeCardData.forEach((item) => {
    const card = document.createElement('div')
    const frontCard = document.createElement('img')
    const backCard = document.createElement('div')

    //Adding classes to each card
    card.classList = 'card'
    frontCard.classList = 'front'
    backCard.classList = 'back'

    //Attach info to card
    frontCard.src = item.imgSrc

    //Append cards to card area
    cardArea.appendChild(card)
    card.appendChild(frontCard)
    card.appendChild(backCard)

    addCardEventListener(card)
  })
}

const addCardEventListener = (card) => {
  card.addEventListener('click', (e) => {
    card.classList.toggle('toggleCard')
  })
}

//Check Cards
const checkCards = (e) => {
  const clickedCard = e.target
}
cardGenerator()
