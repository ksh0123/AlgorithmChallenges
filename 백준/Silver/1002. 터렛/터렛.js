const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const T = parseInt(input[0], 10);

for (let i = 1; i <= T; i++) {
    const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);
    let possibility = 0;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
    if (distance === 0) {
        if (r1 === r2) {
            possibility = -1;  // Infinite intersections
        } else {
            possibility = 0;   // No intersections
        }
    } else if (distance === r1 + r2) {
        possibility = 1;  // Externally tangent
    } else if (distance === Math.abs(r1 - r2)) {
        possibility = 1;  // Internally tangent
    } else if (Math.abs(r1 - r2) < distance && distance < r1 + r2) {
        possibility = 2;  // Two intersections
    } else {
        possibility = 0;  // No intersections
    }
    
    console.log(possibility);
}
