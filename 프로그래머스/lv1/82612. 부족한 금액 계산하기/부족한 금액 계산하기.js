function solution(price, money, count) {
    let balance = money
    for(let i = 1; i <= count; i++){
        balance = balance - (price * i)
    }
    return balance < 0 ? Math.abs(balance) : 0
}