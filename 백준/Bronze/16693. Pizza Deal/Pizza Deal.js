const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let [A1, P1] = input[0].split(' ').map(Number);
let [R2, P2] = input[1].split(' ').map(Number);
let A2 = R2 * R2 * Math.PI;

if ((A1 / P1) > (A2 / P2)){
    console.log("Slice of pizza");
} else {
    console.log("Whole pizza");
}