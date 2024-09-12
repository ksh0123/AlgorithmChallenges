function solution(A,B){ 
    var answer = 0;
    const A2 = A.sort((a,b)=> a-b)
    const B2 = B.sort((a,b)=> b-a)
    for(let i = 0; i < A2.length; i++){
      answer += A2[i] * B2[i];
    }
    return answer;
}