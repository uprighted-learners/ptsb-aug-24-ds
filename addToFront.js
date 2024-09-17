const testArr = ["BMW", "Porsche", "Mercedes"]

const addToFront = (arr, item) => {
//    const result = [item]
//    for (i of arr) {
//     result[result.length] = i
//    }
//    return result
    return [item, ...arr]
}

console.log(addToFront(testArr, "Potato"))