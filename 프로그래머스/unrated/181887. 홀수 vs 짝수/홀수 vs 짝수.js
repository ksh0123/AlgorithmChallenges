function solution(num_list) {
    let odds = 0
    let evens = 0
    for(let i = 0; i < num_list.length; i++){
        i % 2 == 0 ? odds += num_list[i] : evens += num_list[i]
    }
    return odds > evens ? odds : evens
}