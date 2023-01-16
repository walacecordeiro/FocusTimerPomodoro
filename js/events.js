import{
    buttonPlay,
    buttonPouse,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    buttonSet
} from "./elements.js"

export default function Events({controls, timer, sound}) {

    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })

    buttonPouse.addEventListener('click', function () {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonSoundOn.addEventListener('click', () => {
        buttonSoundOn.classList.add('hide')
        buttonSoundOff.classList.remove('hide')
        sound.bgAudio.pause()
    })
    
    buttonSoundOff.addEventListener('click', () => {
        buttonSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
        sound.bgAudio.play()
    })

    buttonSet.addEventListener('click', () => {
        let newMinutes = controls.getMinutes()

        if (!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })

}