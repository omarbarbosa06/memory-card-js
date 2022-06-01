let data = [
  {
    imgSrc: './images/ash.jpeg',
    name: 'ash',
  },
  {
    imgSrc: './images/bebetter.jpeg',
    name: 'bebetter',
  },
  {
    imgSrc: './images/believe.jpeg',
    name: 'believe',
  },
  {
    imgSrc: './images/cr7.jpeg',
    name: 'cr7',
  },
  {
    imgSrc: './images/dj.jpeg',
    name: 'dj',
  },
  {
    imgSrc: './images/dj2.jpeg',
    name: 'dj2',
  },
  {
    imgSrc: './images/enchiladas.jpeg',
    name: 'enchiladas',
  },
  {
    imgSrc: './images/great.png',
    name: 'great',
  },
  {
    imgSrc: './images/ash.jpeg',
    name: 'ash',
  },
  {
    imgSrc: './images/bebetter.jpeg',
    name: 'bebetter',
  },
  {
    imgSrc: './images/believe.jpeg',
    name: 'believe',
  },
  {
    imgSrc: './images/cr7.jpeg',
    name: 'cr7',
  },
  {
    imgSrc: './images/dj.jpeg',
    name: 'dj',
  },
  {
    imgSrc: './images/dj2.jpeg',
    name: 'dj2',
  },
  {
    imgSrc: './images/enchiladas.jpeg',
    name: 'enchiladas',
  },
  {
    imgSrc: './images/great.png',
    name: 'great',
  },
]

//Constants

const cardArea = document.querySelector('.cardArea')
const livesCounter = document.querySelector('.player-lives')
const playerAttempts = document.querySelector('.player-attempts')
const checkbox = document.querySelector('.checkbox')
let minus1 = document.querySelector('.minus-1')

let lives = 3
let attempts = 0

livesCounter.textContent = lives
playerAttempts.textContent = attempts

checkbox.addEventListener('change', (event) => {
  const front = document.querySelectorAll('.front-content')
  if (event.target.checked) {
    front.forEach((item, index) => {
      item.textContent = index + 1
    })
  } else {
    front.forEach((item, index) => {
      item.textContent = 'OB'
    })
  }
})

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
  randomizeCardData.forEach((item, index) => {
    const card = document.createElement('div')
    const backCard = document.createElement('img')
    const frontCard = document.createElement('div')
    let frontCardContent = document.createElement('span')

    //Adding classes to each card
    card.classList = 'card'
    frontCard.classList = 'front'
    frontCardContent.classList = 'front-content'
    backCard.classList = 'back'

    frontCardContent.textContent = 'OB'

    //Attach info to card
    backCard.src = item.imgSrc
    card.setAttribute('name', item.name)

    //Append cards to card area
    cardArea.appendChild(card)
    card.appendChild(frontCard)
    card.appendChild(backCard)
    frontCard.appendChild(frontCardContent)

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
      minus1.style.opacity = '1'

      flippedCards.forEach((card) => {
        card.classList.remove('flipped')
        setTimeout(() => {
          card.classList.remove('toggleCard')
          minus1.style.opacity = '0'
        }, 1000)
      })
      loseLife()
      if (lives === 0) {
        restart()
        attempts++
        playerAttempts.textContent = attempts
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
    setTimeout(() => {
      console.log('2')
      cards[index].classList.remove('toggleCard')
    }, 500)
    setTimeout(() => {
      console.log('3')
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
