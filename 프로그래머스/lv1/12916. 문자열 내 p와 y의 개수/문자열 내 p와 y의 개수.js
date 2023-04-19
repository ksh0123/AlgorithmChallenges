function solution(s){
    let string = s;
    let strArr = string.split('');
    
    function checkP(char) {
      if (char == 'p')
        return true;
      else if (char == 'P')
        return true;
      else
        return false;
    }
    
    function checkY(char) {
      if (char == 'y')
        return true;
      else if (char == 'Y')
        return true;
      else
        return false;
    }
    
    let filterP = strArr.filter(checkP);
    let filterY = strArr.filter(checkY);

    let pCount = filterP.length;
    let yCount = filterY.length;
    
    if(strArr.length < 51 && (pCount == yCount)){
        return true;
    } else if(strArr.length < 51 && pCount == 0 && yCount == 0) {
        return true;
    } else {
        return false;
    }
    
}