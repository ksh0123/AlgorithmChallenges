function solution(array, commands) {
    let answer = []
    for (let i = 0; i < commands.length; i++){
        const [from, to, index] = commands[i]
        let temp = array.slice(from-1, to).sort((a, b) => a - b)
        answer.push(temp[index-1])
    }
    return answer
}