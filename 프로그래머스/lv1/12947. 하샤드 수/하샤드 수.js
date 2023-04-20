function solution(x) {
    let arr = x.toString().split('');
    let div = 0;    
    for (let i = 0; i < arr.length; i++){
        div = div + parseInt(arr[i]);
    };
        
    if(x % div === 0){
        return true;
    } else {
        return false;
    };
}