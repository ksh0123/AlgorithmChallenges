function solution(phone_book) {
    let sortedArray = phone_book.sort();
    for(let i = 0; i < sortedArray.length-1; i++){
        if(sortedArray[i+1].startsWith(sortedArray[i])) return false;
    }
    return true;
}