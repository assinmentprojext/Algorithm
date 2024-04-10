/*
1. 입력: 반복 횟수(정수 n)
2. 출력(i번째)
    별 출력 개수: 2i - 1
    별 출력 위치
        n -> n-1~n+1->n-2~n+2->...->n-(i-1)~n+(i-1)->1~2n-1
    별 출력 위치가 아닌 장소는 공백으로 채우기
3. 세로줄: for문(i=1; i <= n; i++)
    가로줄: for문(j = 1; j < 2n - 1 < j++)
        별 출력 위치?
            맞으면 * 출력
            아니면 공백 출력        
*/
let input = 5;

function star(input) {
    let n = input;
    let starArray = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 2 * n - 1; j++) {
            let minStarPlace = n - (i - 1);
            let maxStarPlace = n + (i - 1);
            if (j >= minStarPlace && j <= maxStarPlace) starArray.push("*");
            else starArray.push(" ");
        }
        starArray.push("\n");
    }
    result = starArray.join("");
    console.log(result);
}
star(input);
