function solution(phone_number) {
    let arr = phone_number.toString().split('');
    let repCount = arr.length - 4;
    let visNum = arr.slice(-4);
    let answer = [];
    
    for (let i = 0; i < repCount; i++){
        answer.push('*');
    }
    
    return answer.join('') + visNum.join('');

}