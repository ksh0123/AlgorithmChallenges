function solution(n) {
    var temp = []
    while(n > 0){
        const remainder = n % 3
        temp.push(remainder)
        n = Math.floor(n / 3)
    }
    temp.reverse()
    let answer = 0
    for(let i = 0; i < temp.length; i++){
        answer += temp[i] * 3 ** i
    }
    return answer;
}