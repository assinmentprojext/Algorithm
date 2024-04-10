/*
0. 내장함수 쓰면 노잼
1. 입력: 문자열
2. 출력: 거꾸로 된 문자열
3. 결과 문자열 배열, 입력 문자열 길이 max(length.) 선언
4. for (int i = max - 1; i >= 0; i--)
    결과 문자열 배열[(max - 1) - i] = 문자열[i]
5. 결과 문자열 배열을 문자열로 변환 후 출력
*/

let inputString = "거꾸로";
let output = [];
let max = inputString.length;

for (let i = max - 1; i >= 0; i--) {
    output[max - 1 - i] = inputString[i];
}

console.log(output.join(""));
