function solution(age) {
    const ageMap = ['a','b','c','d','e','f','g','h','i','j'];
    var answer = '';
    let ageArr = age.toString().split('');
    for(let i = 0; i < ageArr.length; i++){
        let index = ageArr[i];
        answer += ageMap[index];
    }
    return answer;
}