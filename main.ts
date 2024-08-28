whaleysans.showNumber(99)
SuperBit.RGB_Program().setBrightness(50)
basic.forever(function () {
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().show()
    basic.pause(2000)
    for (let index = 0; index < 4; index++) {
        SuperBit.RGB_Program().shift(1)
        SuperBit.RGB_Program().show()
        basic.pause(1000)
        SuperBit.RGB_Program().rotate(1)
        SuperBit.RGB_Program().show()
        basic.pause(1000)
    }
})
