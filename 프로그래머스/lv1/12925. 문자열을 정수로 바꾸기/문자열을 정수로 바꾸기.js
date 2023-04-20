function solution(s) {
    let arr = s.split('');
    let sign = '';
    let num = '';
    
    if (arr[0] == '+' || '-'){
        sign = arr[0];
        for(let i = 1; i < arr.length; i++){
            num += arr[i];
        }
        return parseInt(sign + num);
    } else {
        for(let i = 0; i < arr.length; i++){
            num += arr[i];
        }
        return parseInt(num);
    }
}