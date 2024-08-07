const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

for (let i = 0; i < input.length-1; i++){
    let [A,B] = input[i].split(' ').map(Number);
    console.log(A+B);
}