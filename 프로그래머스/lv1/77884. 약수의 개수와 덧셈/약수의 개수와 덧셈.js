function solution(left, right) {
    let factorArr = {};
    let total = 0
    for (let i = left; i <= right; i++){
        let count = 0
        for (let j = 1; j <= i; j++){
            if (i % j == 0) count++
            }
        
        count % 2 == 0 ? total += i : total -= i
        }
    return total
}