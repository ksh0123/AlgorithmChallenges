function solution(my_string, letter) {
    var answer = [];
    for(let i = 0; i < my_string.length; i++){
        my_string[i] !== letter ? answer.push(my_string[i]) : null
    }
    
    return answer.join('')
}