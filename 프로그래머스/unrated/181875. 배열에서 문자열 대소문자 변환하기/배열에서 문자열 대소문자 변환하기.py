def solution(strArr):
    for x in strArr:
        index = strArr.index(x)
        if (index % 2) == 0:
            strArr[index] = x.lower()
        else:
            strArr[index] = x.upper()
    return strArr