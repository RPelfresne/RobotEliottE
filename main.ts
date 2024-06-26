input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("S")
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("R")
    basic.showIcon(IconNames.Sword)
})
radio.setGroup(1)
basic.forever(function () {
	
})
