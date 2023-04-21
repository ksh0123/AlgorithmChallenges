function solution(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    
    let index = arr.indexOf(min);
    arr.splice(index, 1);
    
    if (arr.length == 0){
        return [-1]
    } else {
        return arr;
    }
}