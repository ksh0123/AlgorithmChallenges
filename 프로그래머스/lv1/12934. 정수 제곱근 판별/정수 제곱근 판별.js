function solution(n) {
    let x = Math.sqrt(n);

    if(x >= 0 && x == Math.round(x)){
        let answer = (x + 1)**2;
        return answer;
    } else {
        return -1;
    };
}