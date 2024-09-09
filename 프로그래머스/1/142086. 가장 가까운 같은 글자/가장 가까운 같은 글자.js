function solution(s) {
    var answer = [];
    let record = {};
    for(let i = 0; i < s.length; i++){
        let key = s[i];
        if(record[key] == undefined){
            record[key] = i;
            answer.push(-1);
        } else {
            answer.push(i - record[key]);
            record[key] = i;
        }
    }
    return answer;
}