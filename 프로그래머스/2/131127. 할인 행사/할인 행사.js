function solution(want, number, discount) {
    var answer = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const res = want.reduce((acc, curr, idx) => {
            acc[curr] = 0;
            return acc;
        }, {});

        for (let j = 0; j < 10; j++) {
            if (discount[i + j] in res) res[discount[i + j]]++;
        }

        let match = true;
        for (let k = 0; k < want.length; k++) {
            if (res[want[k]] !== number[k]) {
                match = false;
                break;
            }
        }

        if (match) answer++;
    }
    
    return answer;
}
