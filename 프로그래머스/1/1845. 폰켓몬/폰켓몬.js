function solution(nums) {
    let half = Math.floor(nums.length/2);
    let newSet = [...new Set(nums)].length

    return newSet < half ? newSet : half;
}