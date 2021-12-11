// Get the text and button elements
const textElement = document.getElementById('game-text');
const optionElement = document.getElementById('game-options');


// the state variable will keep track on the inventory
let state = {};

function startGame() {
    // Starting the game and set the state and options to where it is supposed to be
    let startContainer = document.getElementById('start-container');
    let gameContainer = document.getElementById('game-container');
    startContainer.style.display = "none";
    gameContainer.style.display = "flex";
    state = {};
    showGameOptions(1);

}

function showGameOptions(gameNodeIndex) {
    // Get what gameOptions to show
    // Push text to textElement
    // Remove option buttons and only show if needed
    const gameNode = gameOptions.find(gameNode => gameNode.id === gameNodeIndex);
    textElement.innerText = gameNode.text;
    while (optionElement.firstChild) {
        optionElement.removeChild(optionElement.firstChild);
    }

    gameNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('button');
            button.addEventListener('click', () => selectOption(option));
            optionElement.appendChild(button);
        }
    });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextGameNodeId = option.nextText;
    if (nextGameNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState);
    showGameOptions(nextGameNodeId);
}


// gameOptions is an array containing all the challanges and options for each challange
// aswell as keeping track of the state
const gameOptions = [
    {
        id: 1,
        text: "Where am i? I'm feeling dizzy :s I hear a dog bark, wonder what to do...",
        options: [
            {
                text: "Bark back",
                setState: {sword: true},
                nextText: 2
            },
            {
                text: "Go to the bark",
                nextText: 5
            }
        ]
    },
    {
        id: 2,
        text: "Bow wow! Hmm... no response. Wonder who it was. This smell though, it feels familiar somehow. Could it be...",
        options: [
            {
                text: "Follow the smell",
                nextText: 3
            },
            {
                text: "Run to the barking dog",
                nextText: 5
            }
        ]
    },
    {
        id: 3,
        text: "Sausages!!! My favorite food, just love everything about it",
        options: [
            {
                text: "Steal a sausage",
                setState: {sausage: true},
                nextText: 4
            },
            {
                text: "Bark on the Sausage Man",
                setState: {sausage: true},
                nextText: 4
            },
            {
                text: "Mark my territory",
                nextText: 50
            }
        ]
    },
    {
        id: 4,
        text: "I got my Sausage, yummy! And there is that bark again, it's so cute. Wonder who it is",
        options: [
            {
                text: "Eat the sausage and follow the bark",
                setState: {sausage: false},
                nextText: 5
            },
            {
                text: "Save the Sausage and follow the bark",
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: "Of course, it's Daisy! I've always had a crush on her.",
        options: [
            {
                text: "Ask for directions to a nearby toilet",
                nextText: 51
            },
            {
                text: "Share Sausage and ask for a date",
                requiredState: (currentState) => currentState.sausage,
                setState: {sausage: false},
                nextText: 6
            },
            {
                text: "Ask for a date",
                nextText: 49
            }
        ]
    },
    {
        id: 6,
        text: "I wouldn't never thought she would say yes to a date with me. Must have been the power of the sausage",
        options: [
            {
                text: "Go to the date",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "What a nice date. And at the dog daycare. They will help me get home safe tonight.",
        options: [
            {
                text: "Well done, wanna play again?",
                nextText: -1
            }
        ]
    },
    {
        id: 49,
        text: "That date didn't go so well. Wonder what I did wrong.",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 50,
        text: "Oh no, the Sausage man didn't like that. He took me to the Dog center",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    },
    {
        id: 51,
        text: "Oh no, she took me to the Dog center",
        options: [
            {
                text: "Restart",
                nextText: -1
            }
        ]
    }
];