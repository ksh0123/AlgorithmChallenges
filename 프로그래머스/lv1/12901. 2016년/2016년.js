function solution(a, b) {
    const days = {
        0: 'SUN',
        1: 'MON',
        2: 'TUE',
        3: 'WED',
        4: 'THU',
        5: 'FRI',
        6: 'SAT'
    }
    let inputDate = new Date(`2016-${a}-${b}`)
    console.log(inputDate.toUTCString())
    return days[inputDate.getDay()]
}