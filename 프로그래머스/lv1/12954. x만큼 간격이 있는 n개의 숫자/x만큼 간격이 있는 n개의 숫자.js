function solution(x, n) {
    let arr = [x];
    if ( x >= -10000000 && x <= 10000000){
        for (let i = 0 ; i < n-1; i++){
            arr.push(arr[i] + x);
        }   
    }
    return arr;   
}
