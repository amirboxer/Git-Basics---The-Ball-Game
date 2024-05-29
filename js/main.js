'use strict'

function onBallClick() {
    var ball = document.querySelector('.ball')
    var ballDiameter = ball.clientHeight + 50
    ball.innerHTML = ballDiameter
    ball.style = `height: ${ballDiameter}px; width: ${ballDiameter}px;`
}