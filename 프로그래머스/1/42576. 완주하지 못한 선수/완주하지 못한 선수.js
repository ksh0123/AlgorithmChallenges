function solution(participant, completion) {
    let records = new Map();
    let answer = '';
    
    participant.map((el) => {
        if(records[el] >= 1){
            records[el]++;
        } else {
            records[el] = 1;         
        }
    });
    
    completion.map(el => records[el]--);
        
    participant.map(el => {
        if(records[el] == 1){
            answer = el;
        }
    })
    
    return answer;

}