function solution(n) {
    let num = n;
    let str = num.toString();
    let arr = str.split('');
    let answer = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        answer.push(parseInt(arr[i]));
    };
    
    return answer;
}