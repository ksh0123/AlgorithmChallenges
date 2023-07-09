function solution(s) {
    var answer = 0;
    while(s.includes('zero')) s = s.replace('zero','0')
    while(s.includes('one')) s = s.replace('one', '1');
    while(s.includes('two')) s = s.replace('two', '2');
    while(s.includes('three')) s = s.replace('three', '3');
    while(s.includes('four')) s = s.replace('four', '4');
    while(s.includes('five')) s = s.replace('five', '5');
    while(s.includes('six')) s = s.replace('six', '6');
    while(s.includes('seven')) s = s.replace('seven', '7');
    while(s.includes('eight')) s = s.replace('eight', '8');
    while(s.includes('nine')) s = s.replace('nine', '9');
    answer = parseInt(s);
    return answer;
}