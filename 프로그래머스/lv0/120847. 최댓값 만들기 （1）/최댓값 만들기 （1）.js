function solution(numbers) {
    let sortedNum = numbers.sort((a, b) => a - b).reverse()
    return sortedNum[0] * sortedNum[1]
}