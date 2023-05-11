function solution(start, end) {
    let answer = []
    while(start >= end){
        answer.push(start)
        start--
    }
    return answer
}