radio.onReceivedNumber(function (receivedNumber) {
    myControl = receivedNumber
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
    if (myControl == 1) {
        basic.showNumber(myControl)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M2,
        255
        )
    } else if (myControl == 2) {
        basic.showNumber(myControl)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -100,
        SuperBit.enMotors.M2,
        -100
        )
    } else if (myControl == 3) {
        basic.showNumber(myControl)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        100,
        SuperBit.enMotors.M2,
        -100
        )
    } else if (myControl == 4) {
        basic.showNumber(myControl)
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -100,
        SuperBit.enMotors.M2,
        100
        )
    } else if (myControl == 0) {
        basic.showNumber(myControl)
        SuperBit.MotorStopAll()
    } else {
    	
    }
})
