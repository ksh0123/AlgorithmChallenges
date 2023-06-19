function solution(num_list) {
    let last = num_list[num_list.length - 1]
    let beforeLast = num_list[num_list.length - 2]
    if(last > beforeLast) num_list.push(last - beforeLast)
    else num_list.push(last * 2)
    return num_list
}