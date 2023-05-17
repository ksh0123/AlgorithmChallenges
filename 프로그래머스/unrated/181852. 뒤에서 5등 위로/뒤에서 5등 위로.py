def solution(num_list):
    num_list.sort()
    last_index = len(num_list)
    first_index = 5
    return num_list[first_index:last_index]