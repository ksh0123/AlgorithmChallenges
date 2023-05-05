function solution(n) {
    console.log(Math.ceil(n/7))
    return n <= 7 ? 1 : Math.ceil(n/7)
}