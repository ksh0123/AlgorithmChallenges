const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const T = parseInt(input[0], 10);

for (let i = 1; i <= T; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
    if (distance === 0) {
        if (r1 === r2) {
            console.log(-1);
        } else {
            console.log(0);
        }
    } else if (distance === r1 + r2) {
        console.log(1);
    } else if (distance === Math.abs(r1 - r2)) {
        console.log(1);
    } else if (Math.abs(r1 - r2) < distance && distance < r1 + r2) {
        console.log(2);
    } else {
        console.log(0);
    }
}
