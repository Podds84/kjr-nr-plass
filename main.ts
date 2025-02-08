basic.forever(function () {
    if (bitbot.sonar(BBPingUnit.Centimeters) < 5) {
        bitbot.stop(BBStopMode.Coast)
    } else {
        bitbot.go(BBDirection.Forward, 40)
    }
})
