radio.onReceivedNumber(function (receivedNumber) {
    myControl += receivedNumber
})
input.onButtonPressed(Button.A, function () {
    myControl = 1
    basic.showNumber(1)
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    255,
    SuperBit.enMotors.M2,
    255
    )
    basic.pause(1000)
    myControl = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
    myControl = 8
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    -255,
    SuperBit.enMotors.M2,
    -255
    )
    basic.pause(1000)
    myControl = 0
})
let myControl = 0
radio.setGroup(1)
myControl = 0
SuperBit.RGB_Program().setBrightness(128)
basic.forever(function () {
    SuperBit.RGB_Program().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    SuperBit.RGB_Program().setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    SuperBit.RGB_Program().setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    SuperBit.RGB_Program().setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    SuperBit.RGB_Program().show()
    if (myControl == 1) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M2,
        255
        )
        basic.showNumber(1)
    } else if (myControl == 2) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M2,
        -255
        )
        basic.showNumber(2)
    } else if (myControl == 3) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M2,
        -255
        )
        basic.showNumber(3)
    } else if (myControl == 4) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M2,
        255
        )
        basic.showNumber(4)
    } else {
        basic.showNumber(0)
        SuperBit.MotorStopAll()
        myControl = 0
    }
})
