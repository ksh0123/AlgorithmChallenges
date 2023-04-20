function solution(arr, divisor) {
    let sortedArr = arr.sort(function(a, b){return a - b});
    var answer = [];
    
    for (let i = 0; i < sortedArr.length; i++){
        if(arr[i] % divisor == 0){
            answer.push(arr[i]);
        }
    }
    
    if (answer.length < 1){
        return [-1];
    } else {
        return answer;
    }
}