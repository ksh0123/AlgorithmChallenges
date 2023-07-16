def solution(myString):
    answer = []
    for x in myString.split('x'): answer.append(len(x))
    return answer