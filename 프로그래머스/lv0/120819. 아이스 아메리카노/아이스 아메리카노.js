function solution(money) {
    let answer = []
    let cups = Math.floor(money / 5500)
    let change = money % 5500
    answer.push(cups)
    answer.push(change)
    return answer
}