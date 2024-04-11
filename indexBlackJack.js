let ageReq = 21

console.log("Are you old enough to play?")
if (ageReq < 21) {
    console.log("Your access is denied.")
} else {
    console.log("Welcome! Have fun playing BlackJack!")
}

let firstCard = getRandomCard()
let secondCard = getRandomCard()

// cards array
let totalHand = [firstCard, secondCard]

 // decide fate of cards
let sum = firstCard + secondCard
// Has person won yet?
let hasBlackJack = false
// Is the person in the game (false means lost the game)?
let inGame = true

let message = ""
let messageEl = document.getElementById("mssg-el")


//let sumEl = document.getElementById("sum-el")
// use query selector instead for ^ sumEl
let sumEl = document.querySelector("#sum-el")
// use the # as an id selector
// use the . as a class selector


let cardEl = document.getElementById("card-el")


function startGame() {
    renderGame()
} 

// create function to create a random card that always returns the number 5
// creates hoisted variable
function getRandomCard() {
    return 5
}


function renderGame() {
    
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < totalHand.length; i++) { 
        cardEl.textContent += totalHand[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20 ) {
    // render out first card and second card
    //cardEl.textContent = "First Card: " + firstCard + " & Second Card: " + secondCard
    
    // render out all cards
//    cardEl.textContent = "First Card: " + totalHand[0] + " & Second Card: " + totalHand[1]
    
    message = "Do you want to draw a new card?"
    } else if (sum === 21 ) {
    message = "You've won Blackjack🥳 "
    hasBlackJack = true
    } else {
    message = "You're out of the game!"
    inGame = false
    }

    messageEl.textContent = message
} //end game function

function drawCard() {
    console.log("Drawing a new card from the deck!")
    let cardVar = getRandomCard()
  //  sum = sum + cardVar
    sum += cardVar
    // Push card to totalHand
    totalHand.push(cardVar)
    console.log(totalHand)
 //   sumEl.textContent = "Sum: " + sum
    renderGame()

}