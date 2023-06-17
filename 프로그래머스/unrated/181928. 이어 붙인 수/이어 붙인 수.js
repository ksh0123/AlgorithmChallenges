function solution(num_list) {
    let odds = ''
    let evens = ''
    for (let i = 0; i < num_list.length; i++){
        if (num_list[i] % 2 == 0) evens += num_list[i]
        else odds += num_list[i]
    }
    return parseInt(odds) + parseInt(evens)
}