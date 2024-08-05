const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const T = parseInt(input[0],10);

for(let i = 1; i <= T; i++){
    let [V,E] = input[i].split(' ').map(Number);
    console.log(2-V+E);
}