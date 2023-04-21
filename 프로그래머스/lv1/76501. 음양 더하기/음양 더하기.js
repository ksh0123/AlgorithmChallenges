function solution(absolutes, signs) {
    let arr = [];
    let total = 0;
    
    for (let i = 0; i < absolutes.length; i++){
        let num = 0;
        if (signs[i] === true){
            num = absolutes[i];
        } else {
            num = -absolutes[i]

        }
        arr.push(num);
    }
    
    for (let j = 0; j < arr.length; j++){
        total += arr[j];
    }
    
    return total;
}