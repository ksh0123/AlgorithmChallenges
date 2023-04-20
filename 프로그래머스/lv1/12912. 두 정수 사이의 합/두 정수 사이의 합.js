function solution(a, b) {   
    if (a == b){
        return a;
    } else {
        let arr = [];
        let num = 0;
        let count = 0;
        let total = 0;
        
        if (a < b) {
            num = a;
            count = b - a;
        } else {
            num = b;
            count = a - b;
        };

        for (let i = num; i <= num + count; i++){
            arr.push(i);
        };
        
        for (let k = 0; k < arr.length; k++){
            total += arr[k];
        };
        
        return total; 
    };
}