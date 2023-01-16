export default function Controls({
    buttonPlay,
    buttonPouse,
    buttonStop,
    buttonSet
}) {

    function play() {
        buttonPlay.classList.add('hide')
        buttonPouse.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause() {
        buttonPouse.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function reset() {
        buttonPouse.classList.add('hide')
        buttonPlay.classList.remove('hide')
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')

        if (!newMinutes) {
            return false
        }

        return newMinutes
    }

    return {
        play,
        pause,
        reset,
        getMinutes
    }
}
