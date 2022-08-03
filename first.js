function multiplyNumber(numberList) {

    if (numberList.length < 1) {
        // here I may throw a custom error
        throw new Error("array cannot be empty")
    }
    const newNumbersList = []

    for (let i = 0; i < numberList.length; i++) {
        const newNumber = Math.pow(numberList[i], 2)
        newNumbersList.push(newNumber)
    }

    const sortedList = newNumbersList.sort((a,b) => a-b)
    
    return sortedList
}

export { multiplyNumber }

const multiply = multiplyNumber([-1, -2, 1, 2, 3, 4, 5])

console.log(multiply)