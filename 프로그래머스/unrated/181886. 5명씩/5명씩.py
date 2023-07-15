def solution(names):
    index = 0
    name_list = []
    while index < len(names):
        name_list.append(names[index])
        index += 5
    return name_list
        