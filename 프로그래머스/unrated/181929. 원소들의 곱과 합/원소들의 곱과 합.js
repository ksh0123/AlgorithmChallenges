function solution(num_list) {
    const sum = num_list.reduce((acc, curr) => acc + curr)
    const mult = num_list.reduce((acc, curr) => acc * curr)
    return mult < sum**2 ? 1 : 0

}