function solution(my_string, num1, num2) {
    var answer = '';
    let array = my_string.split('');
    for(let i = 0; i < array.length; i++){
        if(i == num1){
            answer += array[num2];
        } else if (i == num2){
            answer += array[num1];
        } else {
            answer += array[i];
        }
    }
    return answer;
}