function solution(my_string) {
    let total = 0
    my_string.split('').map(el => Number.isInteger(parseInt(el)) ? total += parseInt(el) : null )
    return total 
}