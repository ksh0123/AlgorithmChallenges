function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++){
        var sum = num = i;
        while(sum <= n){
            if (sum === n){
                answer++;
                break;
            } else {
                sum += ++num;
            }
        }
    }
    return answer;
}