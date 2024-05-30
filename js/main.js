'use strict'

function onBallClick(initialDiameter) {
    var ball = document.querySelector('.ball')
    var ballDiameter = +initialDiameter
    ball.onclick = () => {
        var incrementAmount = getRandomInt(20, 60)
        ballDiameter = ballDiameter + incrementAmount > 400 ? 100 : ballDiameter + incrementAmount
        ball.innerHTML = ballDiameter
        ball.style = `height: ${ballDiameter}px; width: ${ballDiameter}px;`
    }
    ball.onclick()
}