function solution(num_list) {
    let numArr = num_list.sort((x,y) => x - y)
    return numArr.splice(0,5)
}