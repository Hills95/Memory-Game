const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }
}
createBoard()

function checkMatch() {
    const cards =  document.querySelectorAll('img')
    const optionsOneId = cardsChosenIds[0]
    const optionsTwoId = cardsChosenIds[1]
    if (optionsOneId == optionsTwoId) {
        cards[optionsOneId].setAttribute('src', 'images/blank.png')
        cards[optionsTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }

   if (cardsChosen[0] == cardsChosen[1]) {
       alert('You found a match!')
       cards[optionsOneId].setAttribute('src', 'images/white.png')
       cards[optionsTwoId].setAttribute('src', 'images/white.png')
       cards[optionsOneId].removeEventListener('click', flipCard)
       cards[optionsTwoId].removeEventListener('click', flipCard)
       cardsWon.push(cardsChosen)

   }
   else {
    cards[optionsOneId].setAttribute('src', 'images/blank.png')
    cards[optionsTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry, try again!')
   }
   resultDisplay.textContent = cards.length
   cardsChosen = []
   cardsChosenIds = []

   if (cardsWon.length == (cardArray.length/2)) {
        resultDisplay.textContent = 'Congratulations, you found them all!'
   }
}

function flipCard() {
   const cardId = this.getAttribute('data-id')
   cardsChosen.push(cardArray[cardId].name)
   cardsChosenIds.push(cardId)
   this.setAttribute('src', cardArray[cardId].img)
   if (cardsChosen.length === 2) {
       setTimeout(checkMatch, 500)
   }
}