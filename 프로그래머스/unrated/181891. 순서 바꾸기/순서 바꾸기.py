def solution(num_list, n):
    answer = []
    answer.extend(num_list[n:len(num_list)])
    if n > 0:
        j = 0
        while j < n:
            answer.append(num_list[j])
            j += 1
    return answer