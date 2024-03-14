function solution(n) {
    let nextNum = n + 1;
    
    let convertBin = (_n) => {
        return (_n >>> 0).toString(2).replace(/0/g,'');
    }
    
    let compareBin = (a,b) => {
        return a === b ? true : false;
    }
    
    while(1){
        if(compareBin(convertBin(n), convertBin(nextNum))){
            break;
        } else {
            nextNum++;
        }
    }
    
    return nextNum;
}