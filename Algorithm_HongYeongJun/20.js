/*
1. 입력: 공백으로 구분된 두 숫자(a b): str 변수에 저장
2. 출력: 몫과 나머지 공백으로 구분해서 출력(백틱 사용)
3. 문자열 구분 함수: split() https://hianna.tistory.com/377
4. numArray = str.split(" ")
5. share = Math.trunc(a / b) remain = a % b
*/

str = "10 3";
numArray = str.split(" ");
share = Math.trunc(numArray[0] / numArray[1]);
remain = numArray[0] % numArray[1];
console.log(`${share} ${remain}`);
