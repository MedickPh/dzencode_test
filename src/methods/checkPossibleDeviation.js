export const checkPossibleDeviation = (newTime) => {
    const possibleDeviation = 43800000
    const currentDate = new Date()
    const manualTimeSet = new Date(newTime)

    if (currentDate > manualTimeSet && currentDate - manualTimeSet <= possibleDeviation) {
        return currentDate - manualTimeSet
    }
    if (currentDate < manualTimeSet && currentDate - manualTimeSet >= -possibleDeviation) {
        return currentDate - manualTimeSet
    }
    return false
}
