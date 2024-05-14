function solution(numer1, denom1, numer2, denom2) {
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;
    
    let div = gcd(numerator, denominator);
    
    return [numerator / div, denominator / div]
    
}
    
function gcd(a, b){
    while (b != 0){
        let temp = b;
        b = a % b;
        a = temp;        
    }
    return a;
}