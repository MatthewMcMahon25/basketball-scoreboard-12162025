let homeScoreText = document.getElementById("home-score-el")
let guestScoreText = document.getElementById("guest-score-el")

let homeScore = 0
let guestScore = 0

function homeAddOne() {
    homeScore += 1
    homeScoreText.textContent = homeScore
}

function homeAddTwo() {
    homeScore += 2
    homeScoreText.textContent = homeScore
}

function homeAddThree() {
    homeScore += 3
    homeScoreText.textContent = homeScore
}

function guestAddOne() {
    guestScore += 1
    guestScoreText.textContent = guestScore
}

function guestAddTwo() {
    guestScore += 2
    guestScoreText.textContent = guestScore
}

function guestAddThree() {
    guestScore += 3
    guestScoreText.textContent = guestScore
}