function saturdayFun(activity) {
    if (activity === undefined) {activity = 'roller-skate'}
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity) {
    if (activity === undefined) {activity = 'go to the office'}
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(addedSymbol){
    if (addedSymbol === undefined) {addedSymbol = '*'}
    return function (adjective){
        if (adjective === undefined) {adjective = 'special'}
        return `You are ${addedSymbol}${adjective}${addedSymbol}!`
    }
}