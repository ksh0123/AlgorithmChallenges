function solution(numbers) {
    let answer = [];
    while (numbers.length > 0) {
        let base = numbers.shift()
        numbers.map(el => answer.includes(base + el) ? console.log(base+el) : answer.push(base + el))
    }
    return answer.sort((a,b)=>a-b);
}