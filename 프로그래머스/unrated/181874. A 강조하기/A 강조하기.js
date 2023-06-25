function solution(myString) {
    var answer = '';
    for(let i = 0; i < myString.length; i++){
        let temp = myString[i].toLowerCase();
        temp == 'a' ? answer += temp.toUpperCase() : answer += temp;
    }
    return answer;
}