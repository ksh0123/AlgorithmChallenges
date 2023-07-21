def solution(hp):
    ants = 0
    while hp >= 5:
        hp -= 5
        ants += 1
    while hp >= 3:
        hp -= 3
        ants += 1
    while hp > 0:
        hp -= 1
        ants += 1
    return ants
            