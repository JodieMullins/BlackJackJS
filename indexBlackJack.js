let ageReq = 21

console.log("Are you old enough to play?")
if (ageReq < 21) {
    console.log("Your access is denied.")
} else {
    console.log("Welcome! Have fun playing BlackJack!")
}

let firstCard = 3
let secondCard = 8
 // decide fate of cards
let sum = firstCard + secondCard
// Has person won yet?
let hasBlackJack = false
// Is the person in the game (false means lost the game)?
let inGame = true

let message = " "

if (sum <= 20 ) {
    message = "Do you want to draw a new card?"
} else if (sum === 21 ) {
    message = "Congratulations! You've won Blackjack🥳 "
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    inGame = false
}

console.log(messaage)