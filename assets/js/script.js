// Get the text and button elements
const textElement = document.getElementById('game-text')
const optionElement = document.getElementById('game-options')

// the state variable will keep track on the inventory
let state = {}

function startGame() {
    // Starting the game and set the state and options to where it is supposed to be
    state = {}
    showText(1)

}

function showText(textIndex) {

}

function selectOption(option) {

}

const textOptions = [
    {
        id: 1,
        text: "Lorem ipsum",
        options: [
            {
                text: "Option 1",
            },
            {
                text: "Option 2"
            }
        ]
    }
]

startGame()