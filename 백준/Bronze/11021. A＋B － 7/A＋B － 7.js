const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
const T = parseInt(input[0],10);

for (let i = 1; i <= T; i++){
    let [A,B] = input[i].split(' ').map(Number);
    console.log("Case #" + i + ": " + (A+B));
}