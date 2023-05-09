function solution(money) {
    let cups = Math.floor(money / 5500)
    let change = money % 5500
    return [cups,change]
}