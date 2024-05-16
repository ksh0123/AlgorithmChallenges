function solution(box, n) {
    // return parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n)
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
}
