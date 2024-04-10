/*
1. 입력: 세 과목 점수
2. 출력: 평균
3. 평균 구하고 floor 함수로 버림하기
*/

function avg(lan, math, eng) {
    avg = (lan + math + eng) / 3;
    result = Math.floor(avg);
    return result;
}

console.log(avg(20, 30, 40));
