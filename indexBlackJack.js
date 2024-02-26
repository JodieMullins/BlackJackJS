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
let messageEl = document.getElementById("mssg-el")


//let sumEl = document.getElementById("sum-el")
// use query selector instead for ^ sumEl
let sumEl = document.querySelector("#sum-el")
// use the # as an id selector
// use the . as a class selector


function startGame(){

if (sum <= 20 ) {
    sumEl.textContent = "Sum: " + sum
    message = "Do you want to draw a new card?"
} else if (sum === 21 ) {
    message = "You've won Blackjack🥳 "
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    inGame = false
}

messageEl.textContent = message

}