import data from '../data.json' assert { type: 'json' }

//Constants

const cardArea = document.querySelector('.cardArea')
const livesCounter = document.querySelector('span')

let lives = 3

livesCounter.textContent = lives

//Random data order
const randomizeData = () => {
  return data.sort(() => Math.random() - 0.5)
}
const loseLife = () => {
  lives--
  livesCounter.textContent = lives
}
//Generate html cards
const cardGenerator = () => {
  const randomizeCardData = randomizeData()
  //Generate HTML
  randomizeCardData.forEach((item) => {
    const card = document.createElement('div')
    const backCard = document.createElement('img')
    const frontCard = document.createElement('div')

    //Adding classes to each card
    card.classList = 'card'
    frontCard.classList = 'front'
    backCard.classList = 'back'

    //Attach info to card
    backCard.src = item.imgSrc
    card.setAttribute('name', item.name)

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
    checkCards(e)
  })
}
//Check Cards
const checkCards = (e) => {
  const clickedCard = e.target
  clickedCard.classList.add('flipped')
  const flippedCards = document.querySelectorAll('.flipped')
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute('name') ===
      flippedCards[1].getAttribute('name')
    ) {
      console.log('match')
      flippedCards.forEach((card) => {
        card.classList.remove('flipped')
        card.style.pointerEvents = 'none'
      })
    } else {
      console.log('not mtch')
      flippedCards.forEach((card) => {
        card.classList.remove('flipped')
        setTimeout(() => {
          card.classList.remove('toggleCard')
        }, 1000)
      })
      loseLife()
      if (lives === 0) {
        restart()
      }
    }
  }
}
//restart
const restart = () => {
  let data = randomizeData()
  let back = document.querySelectorAll('.back')
  let cards = document.querySelectorAll('.card')
  cardArea.style.pointerEvents = 'none'
  data.forEach((item, index) => {
    cards[index].classList.remove('toggleCard')
    setTimeout(() => {
      cards[index].style.pointerEvents = 'all'
      back[index].src = item.imgSrc
      cards[index].setAttribute('name', item.name)
      cardArea.style.pointerEvents = 'all'
    }, 1000)
  })
  lives = 3
  livesCounter.textContent = lives
}
cardGenerator()
