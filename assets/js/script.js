// Get the text and button elements
const textElement = document.getElementById('game-text')
const optionElement = document.getElementById('game-options')

// the state variable will keep track on the inventory
let state = {}

function startGame() {
    // Starting the game and set the state and options to where it is supposed to be
    state = {}
    showGameOptions(1)

}

function showGameOptions(gameNodeIndex) {
    // Get what gameOptions to show
    // Push text to textElement
    // Remove option buttons and only show if needed
    const gameNode = gameOptions.find(gameNode => gameNode.id === gameNodeIndex) 
    textElement.innerText = gameNode.text
    while (optionElement.firstChild) {
        optionElement.removeChild(optionElement.firstChild)
    }

    gameNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('button')
            button.addEventListener('click', () => selectOption(option))
            optionElement.appendChild(button)
        }
    })
}

// Will be added later
function showOption(option) {
    return true
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