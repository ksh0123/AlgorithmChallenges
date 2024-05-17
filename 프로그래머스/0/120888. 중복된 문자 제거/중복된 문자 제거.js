function solution(my_string) {
    var answer = '';
    my_string.split('').map((v)=>{
        if(!answer.includes(v)) answer += v;
    })
    return answer;
}