function solution(n) {
    let total = 0
    for (let i = 0; i <= n; i++){
        i % 2 == 0 ? total += i : total
    }
    return total
}