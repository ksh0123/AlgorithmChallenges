function solution(s) {
    var arr = s.split(' ').sort((a,b)=>a-b)
    return `${arr[0]} ${arr[arr.length-1]}`
}