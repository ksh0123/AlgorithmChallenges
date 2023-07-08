function solution(n, arr1, arr2) {
    var answer = [];
    let padding = '0'.repeat(n)

    for(let i = 0; i < n; i++){
        arr1[i] = (padding + arr1[i].toString(2)).substr(-padding.length)
        arr2[i] = (padding + arr2[i].toString(2)).substr(-padding.length)
    }
    
    for(let j = 0; j < n; j++){
        let result = ''
        for (let k = 0; k < arr1[j].length; k++){
            if(arr1[j][k] | arr2[j][k] == 1) result += '#'
            else result += ' '
        }
        answer.push(result)
    }
    
    return answer;
}