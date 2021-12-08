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

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextGameNodeId = option.nextText
    if (nextGameNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showGameOptions(nextGameNodeId)
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
                setState: {sword: true},
                nextText: 2
            },
            {
                text: "Option 2",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "Lorem ipsum two",
        options: [
            {
                text: "Option 1",
                requiredState: (currentState) => currentState.sword,
                setState: {sword: false, goblet: true},
                nextText: 3
            },
            {
                text: "Run",
                nextText: 3

            }
        ]
    }
]

startGame()