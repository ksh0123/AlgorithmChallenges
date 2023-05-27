function solution(s) {
    let regex = /[A-Z]/gi
    if(s.length == 4 || s.length == 6){
        return s.match(regex) ? false : true
    } else {
    return false
    }
}
