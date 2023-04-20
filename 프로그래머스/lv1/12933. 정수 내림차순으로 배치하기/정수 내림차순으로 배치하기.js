function solution(n) {
    let arr = n.toString().split('').sort().reverse();
    let answer = parseInt(arr.join(''));
    
    return answer;
}