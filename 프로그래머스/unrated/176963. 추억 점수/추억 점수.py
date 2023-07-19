def solution(name, yearning, photo):
    scores = {}
    photo_score = []
    i = 0
    while i < len(name):
        scores[name[i]] = yearning[i]
        i += 1
    print(scores)
    for x in photo:
        score = 0
        for y in x:
            if y in scores.keys():
                score += scores[y]
            else: score += 0
        photo_score.append(score)
    return photo_score