input.onButtonPressed(Button.A, function () {
    music.playTone(440, music.beat(BeatFraction.Quarter))
    diceRoll = randint(1, 6)
    basic.showString("" + (diceRoll))
    diceRolled = 1
    if (diceRoll == 1) {
        diceSide1 += 1
    } else if (diceRoll == 2) {
        diceSide2 += 1
    } else if (diceRoll == 3) {
        diceSide3 += 1
    } else if (diceRoll == 4) {
        diceSide4 += 1
    } else if (diceRoll == 5) {
        diceSide5 += 1
    } else {
        diceSide6 += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (diceRolled) {
        music.playTone(587, music.beat(BeatFraction.Quarter))
        basic.showString("1: ")
        result = 100 * (diceSide1 / (diceSide1 + (diceSide2 + (diceSide3 + (diceSide4 + (diceSide5 + diceSide6))))))
        basic.showNumber(result)
        basic.showString("%")
        music.playTone(659, music.beat(BeatFraction.Quarter))
        basic.showString("2: ")
        result = 100 * (diceSide2 / (diceSide1 + (diceSide2 + (diceSide3 + (diceSide4 + (diceSide5 + diceSide6))))))
        basic.showNumber(result)
        basic.showString("%")
        music.playTone(698, music.beat(BeatFraction.Quarter))
        basic.showString("3: ")
        result = 100 * (diceSide3 / (diceSide1 + (diceSide2 + (diceSide3 + (diceSide4 + (diceSide5 + diceSide6))))))
        basic.showNumber(result)
        basic.showString("%")
        music.playTone(784, music.beat(BeatFraction.Quarter))
        basic.showString("4:")
        result = 100 * (diceSide4 / (diceSide1 + (diceSide2 + (diceSide3 + (diceSide4 + (diceSide5 + diceSide6))))))
        basic.showNumber(result)
        basic.showString("%")
        music.playTone(880, music.beat(BeatFraction.Quarter))
        basic.showString("5:")
        result = 100 * (diceSide5 / (diceSide1 + (diceSide2 + (diceSide3 + (diceSide4 + (diceSide5 + diceSide6))))))
        basic.showNumber(result)
        basic.showString("%")
        music.playTone(988, music.beat(BeatFraction.Quarter))
        basic.showString("6:")
        result = 100 * (diceSide6 / (diceSide1 + (diceSide2 + (diceSide3 + (diceSide4 + (diceSide5 + diceSide6))))))
        basic.showNumber(result)
        basic.showString("%")
        music.playMelody("G A B C5 C - - - ", 158)
    } else {
        basic.showString("ERROR!")
    }
})
let diceRolled = 0
let result = 0
let diceSide6 = 0
let diceSide5 = 0
let diceSide4 = 0
let diceSide3 = 0
let diceSide2 = 0
let diceSide1 = 0
let diceRoll = 0
diceRoll = 0
diceSide1 = 0
diceSide2 = 0
diceSide3 = 0
diceSide4 = 0
diceSide5 = 0
diceSide6 = 0
result = 0
diceRolled = 0
basic.forever(function () {
	
})
