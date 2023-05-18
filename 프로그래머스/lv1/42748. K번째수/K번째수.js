function solution(array, commands) {
    let answer = []
    for (let i = 0; i < commands.length; i++){
        var from = commands[i][0] - 1
        var to = commands[i][1]
        var index = commands[i][2] - 1
        var temp = array.slice(from, to).sort((a, b) => a - b)
        answer.push(temp[index])
    }
    return answer
}