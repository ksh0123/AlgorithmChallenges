function solution(s) {
    let arr = s.split('');
    let half = Math.round(arr.length / 2);
    if (arr.length % 2 == 0){
        return arr[half-1] + arr[half];
    }
    else {
        return arr[half-1];
    }
}