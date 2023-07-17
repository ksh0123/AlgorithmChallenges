def solution(s):
    answer = []
    s = s.lower().split(' ')
    
    for word in s:
        i = 0
        new = ''
        for c in word:
            if i % 2 == 0:
                new += c.upper()
            else: new += c
            i += 1
        answer.append(new)
    
    return ' '.join(answer)