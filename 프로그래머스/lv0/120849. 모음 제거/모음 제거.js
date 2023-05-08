function solution(my_string) {
    let vowels = ['a','e','i','o','u']
    let answer = ''
    my_string.split('').forEach((el) => {
        vowels.includes(el) ? null :
        el == ' ' ? answer += ' ' : answer += el
    })
    return answer
}