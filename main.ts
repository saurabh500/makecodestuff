controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    currentSetIndex += 1
    if (currentSetIndex >= rhymingSets.length) {
        // Wrap around to the first set
        currentSetIndex = 0
    }
    // Start at the first word of the new set
    currentWordIndex = 0
    showCurrentWord()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    currentWordIndex += 1
    if (currentWordIndex >= rhymingSets[currentSetIndex].length) {
        // Wrap around to the first word in the set
        currentWordIndex = 0
    }
    showCurrentWord()
})
function showCurrentWord () {
    // Clear the sprite image to a
    // Grab the current word
    word = rhymingSets[currentSetIndex][currentWordIndex]
    textSprite.setText(word)
}
let word = ""
let currentWordIndex = 0
let currentSetIndex = 0
let textSprite: TextSprite = null
let rhymingSets: string[][] = []
rhymingSets = [
["cat", "bat", "mat"],
["dog", "hog", "log"],
["pin", "tin", "win"],
["pet", "let", "set"],
["mop", "top", "hop"],
["can", "fan", "pan"],
["red", "bed", "fed"],
["run", "fun", "sun"],
["bug", "dug", "hug"],
["lip", "sip", "dip"]
]
textSprite = textsprite.create("", 15, 3)
textSprite.setMaxFontHeight(20)
textSprite.setPosition(10, 60)
showCurrentWord()
