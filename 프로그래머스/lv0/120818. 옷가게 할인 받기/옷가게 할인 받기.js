function solution(price) {
    let discount = 0
    if (price >= 100000) discount += 5
    if (price >= 300000) discount += 5
    if (price >= 500000) discount += 10
    
    let total = price - (price * (discount/100))
    return parseInt(total)
}