const testArr = ["BMW", "Porsche", "Mercedes"]

const addToFront = (arr, item) => {
    return [item, ...arr]
}

addToFront(testArr, "Potato")
console.log(testArr)