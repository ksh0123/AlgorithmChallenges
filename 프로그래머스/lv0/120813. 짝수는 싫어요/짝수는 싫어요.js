function solution(n) {
    var answer = []
    for (let i = 0; i <= n; i++){
        i % 2 == 0 ? null : answer.push(i)
    }
    return answer.sort((a,b) => a - b)
}