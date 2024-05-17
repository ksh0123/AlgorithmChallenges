function solution(n) {
    var answer = 0;
    while (n > 3){
        let count = 0;
        for(let i = 1; i <= n; i++){
            if(n % i == 0){
                count++;
            } else {
                continue;
            }   
        }
        if (count >= 3) answer++;
        n--;
    }
    return answer;
}