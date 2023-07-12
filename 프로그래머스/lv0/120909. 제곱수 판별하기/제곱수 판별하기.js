function solution(n) {
    let squareRoot = Math.sqrt(n)
    return squareRoot == parseInt(squareRoot) ? 1 : 2
}