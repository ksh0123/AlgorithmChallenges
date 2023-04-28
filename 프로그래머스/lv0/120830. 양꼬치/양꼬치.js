function solution(n, k) {
    let mealPrice = 12000
    let drinkPrice = 2000
    
    let totalPrice = mealPrice * n + drinkPrice * k
    let discountedPrice = totalPrice - (drinkPrice * Math.floor(n/10))
    return discountedPrice
    

}