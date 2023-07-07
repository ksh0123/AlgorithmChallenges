function solution(n, m) {
    let LCM = 1, GCD = 1;
   
    while(true){
        if((LCM % n == 0) && (LCM % m == 0)){
            break;
        }
        LCM++;
    }
    
    for(let i=2; i<=Math.min(n, n); i++){
        if(n % i === 0 && m % i === 0){
            GCD = i;
        }
    }
    
    return [GCD, LCM];
}
