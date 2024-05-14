/*
1. Add two fractions
2. Simplify the fractions -> Find the greatest common divisor (GCD), divide both the numerator and the denominator by the GCD.
*/

function solution(numer1, denom1, numer2, denom2) {
    // Add two fractions
    let numerator = numer1 * denom2 + numer2 * denom1;
    let denominator = denom1 * denom2;
    
    let divisor = gcd(numerator, denominator);

    // Divide the numerator and denominator by the GCD
    return [numerator / divisor, denominator / divisor]
    
}

// Find the greatest common divisor (GCD)
function gcd(a, b){
    while (b != 0){
        let temp = b;
        b = a % b;
        a = temp;        
    }
    return a;
}
