// Get the text and button elements
const textElement = document.getElementById('game-text')
const optionElement = document.getElementById('game-options')

// the state variable will keep track on the inventory
let state = {}

function startGame() {
    // Starting the game and set the state and options to where it is supposed to be
    state = {}
    showOptions(1)

}

function showOptions(optionsIndex) {
    // Get what gameOptions to show
    // Push text to textElement
    // Remove option buttons and only show if needed
    const textId = gameOptions.find(textId => textId.id === optionsIndex) 
    console.log(textId);
    textElement.innerText = textId.text
    while (optionElement.firstChild) {
        optionElement.removeChild(optionElement.firstChild)
    }
}

function selectOption(option) {

}

// gameOptions is an array containing all the challanges and options for each challange
// aswell as keeping track of the state
const gameOptions = [
    {
        id: 1,
        text: "Lorem ipsum",
        options: [
            {
                text: "Option 1",
                setState: {},
                nextText: 2
            },
            {
                text: "Option 2",
                nextText: 2
            }
        ]
    },
    {
        id: 2
    }
]

startGame()