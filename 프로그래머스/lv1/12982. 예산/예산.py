def solution(d, budget):
    total = 0
    answer = 0
    d.sort()
    for num in d:
        if total + num <= budget:
            total += num
            answer += 1
    return answer