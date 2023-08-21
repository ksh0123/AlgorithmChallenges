def solution(n_str):
    str_array = list(n_str)
    count = 0
    for x in str_array:
        if x == '0':
            count += 1
        else:
            break
    return ''.join(str_array[count::])