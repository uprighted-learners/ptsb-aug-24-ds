/* 
    ? State Machines
    * system with finite and defined states
    * states are just information
    * the info is reliant upon logic in order to transition or be reassigned
*/

function getPoemTitle(author) {
    const poemTitles = {
        "Robert Frost": "Stopping by Woods on Snowy Evening",
        "Shiel Sylverstein": "Falling Up",
        "Sylvia Plath": ["The Bell Jar", "Lady Lazarus", "Tulips"]
    }

    return poemTitles[author]
}

console.log(getPoemTitle("Sylvia Plath"))

const light = {
    red: ["green", "yield"],
    yellow: ["red"],
    green: ["yellow"],
    yield: ["red"]
}

let currentState = "red"

function changeState(newState) {
    let availableStates = light[currentState]
    if (availableStates.includes(newState)) {
        currentState = newState
        console.log(currentState)
    } else {
        console.log(`Transition from ${currentState} to ${newState} not allowed`)
    }
}

changeState("red")

const stateLines = {
    in: ["il", "mo", "mi", "oh", "ky"],
    il: ["in", "wi", "ia", "mo", "tn"]
}

let existingState = "in"

function travelStates(newState) {
    const availableTransition = stateLines[existingState]
    if (availableTransition.includes(newState)) {
        existingState = newState
        console.log(existingState)
    } else {
        console.log("Transition not allowed")
    }
}

travelStates("ny")

const physicalState = {
    solid: ["liquid"],
    gas: ["liquid"],
    liquid: ["solid", "gas"]
}

let existingPhysicalState = "solid"

function changePhysicalState(newState) {
    let availableStates = physicalState[existingPhysicalState]
    if (availableStates.includes(newState)) {
        existingPhysicalState = newState
        console.log(existingPhysicalState)
    } else {
        console.log("Can't do it")
    }
}

changePhysicalState("gas")