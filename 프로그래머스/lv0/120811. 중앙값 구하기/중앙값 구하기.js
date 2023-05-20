function solution(array) {
    let sortedArray = array.sort((a,b) => a - b)
    console.log(sortedArray)
    let index = Math.floor(sortedArray.length / 2)
    return sortedArray[index]
}