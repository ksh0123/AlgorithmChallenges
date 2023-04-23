function solution(n) {
    let arr = [];
    
    for (let i = 1; i <= n; i++){
        if (i % 2 === 0){
            arr.push('박');
        } else {
            arr.push('수');
        }
    };
    
    return arr.join('');
}