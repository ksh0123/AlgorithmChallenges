function solution(numbers, n) {
    let total = 0
    for (let i = 0; i < numbers.length; i++){
        total <= n ? total += numbers[i] : null
    }
    return total
}