def solution(num, k):
    num_arr = list(str(num))
    item = str(k)
    if item in num_arr:
        return num_arr.index(item) + 1
    else:
        return -1