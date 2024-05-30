'use strict'

function onBallClick(initialDiameter) {
    var ball = document.querySelector('.ball')
    var ballDiameter = +initialDiameter
    ball.onclick = () => {
        ballDiameter = ballDiameter + 50 > 400 ? 100 : ballDiameter + 50
        ball.innerHTML = ballDiameter
        ball.style = `height: ${ballDiameter}px; width: ${ballDiameter}px;`
    }
    ball.onclick()
}