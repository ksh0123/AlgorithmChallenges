def solution(myString, pat):
    myString = list(myString)
    answer = ''
    for i in myString:
        if i == 'A':
            answer += 'B'
        elif i == 'B':
            answer += 'A'
    if pat in answer:
        return 1
    else:
        return 0