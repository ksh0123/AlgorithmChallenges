function solution(rny_string) {
    let answer = rny_string.split('');
    for(let i = 0; i < answer.length; i++){
        answer[i] == 'm' ? answer[i] = 'rn' : null;
    }
    return answer.join('');
}