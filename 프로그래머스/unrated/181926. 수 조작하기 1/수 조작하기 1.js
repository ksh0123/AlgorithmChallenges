function solution(n, control) {
    let answer = n
    for(let i = 0; i < control.length; i++){
        control[i] == 'w' ? answer += 1 : null
        control[i] == 's' ? answer -= 1 : null
        control[i] == 'd' ? answer += 10 : null
        control[i] == 'a' ? answer -= 10 : null
    }
    
    return answer
}