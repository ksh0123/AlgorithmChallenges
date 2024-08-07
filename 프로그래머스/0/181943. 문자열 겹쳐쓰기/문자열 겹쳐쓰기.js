function solution(my_string, overwrite_string, s) {
    let start = s;
    let finish = s + overwrite_string.length;
    return my_string.slice(0,start) + overwrite_string + my_string.slice(finish);
}