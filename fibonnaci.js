
function fib(arr, total) {
    const series = arr
    while(series.length < total) {
        let num2 = series.pop()
        let num1 = series.pop()
        let sum = num2 + num1
        series.push(num1, num2, sum)
    }
    console.table(series)
}

fib([1, 1], 10)

function fibonnaci(n) {
    if (n <= 1) return n
    return fibonnaci(n - 1) + fibonnaci(n - 2)
}

console.log(fibonnaci(10))