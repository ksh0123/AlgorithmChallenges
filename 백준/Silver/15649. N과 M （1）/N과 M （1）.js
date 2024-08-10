const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const [N, M] = input.split(' ').map(Number);

const result = [];
const visited = Array(N + 1).fill(false);
const sequence = [];

function backtrack(depth) {
    if (depth === M) {
        result.push(sequence.join(' '));
        return;
    }
    
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            sequence.push(i);
            backtrack(depth + 1);
            sequence.pop();
            visited[i] = false;
        }
    }
}

backtrack(0);
console.log(result.join('\n'));
