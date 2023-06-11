function solution(strArr) {
    let answer = []
    strArr.map(x => {
        !x.includes("ad") ? answer.push(x) : null
    })
    
    return answer
}