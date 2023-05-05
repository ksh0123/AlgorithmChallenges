function solution(sides) {
    let max = Math.max(...sides)
    let total = sides.reduce((acc,curr) => acc + curr, 0)
    return total - max > max ? 1 : 2
}