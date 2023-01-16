//DOM
//Document Object Model

//Refatoring
    //Changing code to make it more understandable
    //Make the code more performant
    //Without changing its functionality
    
    //Event-driven
    //Imperative programing
    // Calback


//Default import
import Controls from "./controls.js"

import Timer from "./timer.js"

import Events from "./events.js"

import {
    buttonPlay,
    buttonPouse,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

import Sound from "./sounds.js"

const controls = Controls({
    buttonPlay,
    buttonPouse,
    buttonStop,
    buttonSet
})

const timer = Timer ({
    minutesDisplay,
    secondsDisplay, 
    resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})
