function solution(num) {
    count = 0;
    if (num == 1){
        return 0;
    } else {
        while(num != 1){
            if(num % 2 == 0){
                num = num / 2;
                count++;
            } else {
                num = (num * 3) + 1;
                count++
            }
        }
        
        if (count >= 500){
            return -1;
        } else {
            return count;
        }
    }
}