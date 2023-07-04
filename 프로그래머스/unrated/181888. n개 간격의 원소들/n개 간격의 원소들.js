function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length; i+=n){
        if(num_list[i]) answer.push(num_list[i]);
        else break
    }
    return answer;
}