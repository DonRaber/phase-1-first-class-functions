const spies = "spies"
const chai = "chai"

function spy() {
    return spies
}

function receivesAFunction(callback) {
    callback(spies)
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function(){}
}