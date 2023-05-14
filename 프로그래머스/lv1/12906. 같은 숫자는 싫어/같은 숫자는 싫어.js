function solution(arr)
{
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        arr[i-1] == arr[i] ? null : answer.push(arr[i])
    }
    
    return answer;
}