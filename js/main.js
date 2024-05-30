'use strict'

function onBallClick(elBall, maxDiameter) {
    var ballDiameter = +elBall.innerHTML
    elBall.onclick = () => {
        var incrementAmount = getRandomInt(20, 60)
        var newColor = getRandomColor()
        ballDiameter = ballDiameter + incrementAmount > maxDiameter ? 100 : ballDiameter + incrementAmount
        elBall.innerHTML = ballDiameter
        elBall.style = `height: ${ballDiameter}px; width: ${ballDiameter}px; background-color: ${newColor};`
    }
    elBall.onclick()
}