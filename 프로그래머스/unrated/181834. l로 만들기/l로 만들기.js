function solution(myString) {
    let stringArr = myString.split('')
    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i] < 'l') stringArr[i] = 'l'
        else continue
    }
    return stringArr.join('')
}