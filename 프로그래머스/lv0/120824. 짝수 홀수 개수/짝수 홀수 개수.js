function solution(num_list) {
    let answer = []
    let evens = 0
    let odds = 0
    for(let i = 0; i < num_list.length; i++){
        num_list[i] % 2 == 0 ? evens++ : odds++
    }
    
    answer.push(evens)
    answer.push(odds)
    
    return answer
}