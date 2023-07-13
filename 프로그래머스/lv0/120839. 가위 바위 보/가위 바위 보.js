function solution(rsp) {
    let answer = ''
    const winCombo = {
        2: 0,
        0: 5,
        5: 2
    }
    for(let i = 0; i < rsp.length; i++){
        answer += winCombo[rsp[i]]
    }
    return answer
}