function solution(s) {
    let arr = s.split(' ')
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i].charAt(0) !== 'number'){
            arr[i] = arr[i].toLowerCase()
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        } else continue;
    }
    return arr.join(' ')
}