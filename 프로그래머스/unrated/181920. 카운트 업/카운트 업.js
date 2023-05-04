function solution(start, end) {
    let answer = []
    let tmp = start
    for(let i = start; i <= end; i ++){
        tmp <= i ? answer.push(i) : null
    }
    
    return answer
}