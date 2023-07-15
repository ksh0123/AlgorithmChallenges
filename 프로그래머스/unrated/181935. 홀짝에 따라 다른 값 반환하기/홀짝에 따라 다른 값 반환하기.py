def solution(n):
    num_list = []
    answer = 0
    for i in (n+1 for n in range(n)):
      num_list.append(i)
    
    if n % 2 == 0:
      for num in num_list:
        if num % 2 == 0:
           answer += num**2
    else:
      for num in num_list:
        if not num % 2 == 0:
           answer += num
           
    return answer