function solution(numbers) {
    return numbers.reduce((acc, num) => acc.concat(num * 2), [])
}