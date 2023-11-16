enum RadioMessage {
    message1 = 49434,
    hello = 49337
}
input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("hehe")
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("H")
})
input.onButtonPressed(Button.A, function () {
    let myImage: Image = null
    radio.sendString("Y")
    myImage.showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("?")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("N")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendMessage(RadioMessage.message1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("M")
})
radio.onReceivedMessage(RadioMessage.message1, function () {
	
})
radio.setGroup(47)
