input.onSound(DetectedSound.Loud, function () {
    lichten_aan = !(lichten_aan)
    if (lichten_aan) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lichten_aan = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
