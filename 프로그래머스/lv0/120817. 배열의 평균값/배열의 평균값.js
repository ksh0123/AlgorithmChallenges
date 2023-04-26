function solution(numbers) {
    let total = numbers.reduce((acc,curr) => acc += curr, 0)
    return total / numbers.length
}