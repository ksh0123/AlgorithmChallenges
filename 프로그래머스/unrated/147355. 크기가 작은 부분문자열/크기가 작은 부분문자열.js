function solution(t, p) {
    let partialString = [];
    for (let i = 0; i < t.length; i++){
        let substring = t.slice(i, i+p.length)
        !partialString.includes(+substring) &&
            +substring <= +p && 
            substring.length == p.length ?
            partialString.push(substring) : null
    }
    return partialString.length;
}