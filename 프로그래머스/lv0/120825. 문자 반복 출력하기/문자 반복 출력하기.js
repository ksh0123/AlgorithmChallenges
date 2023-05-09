function solution(my_string, n) {
    let answer = []
    let my_string_arr = my_string.split('')
    my_string_arr.map(x => answer.push(x.repeat(n)))
    return answer.join('')
}