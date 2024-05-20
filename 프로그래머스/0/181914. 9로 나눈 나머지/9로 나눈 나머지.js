function solution(number) {
    // let n = number.split('').reduce((acc,x) => acc += parseInt(x),0);
    // return n % 9;
    return [...number].reduce((a,b) => +a+(+b))%9;
}
