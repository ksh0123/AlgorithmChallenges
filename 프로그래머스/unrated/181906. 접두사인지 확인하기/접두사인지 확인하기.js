function solution(my_string, is_prefix) {
    let result = my_string.split(is_prefix)
    if(result[0] == '') return 1
    else return 0
}