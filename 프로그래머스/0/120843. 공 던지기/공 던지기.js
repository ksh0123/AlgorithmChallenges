function solution(numbers, k) {
    var answer = 0;
    var index = 0;
    for(i = 0; i < k; i++){
        answer = numbers[index];
        
        if(index == numbers.length - 2){
            index = 0;
        } else if (index == numbers.length - 1){
            index = 1;
        } else {
            index += 2;
        }
    }
    return answer;
}