function solution(n, k) {
    var answer = [];
    let counter = 1;
    while(counter * k <= n){
        answer.push(counter * k);
        counter++;
    } 
    return answer;
}