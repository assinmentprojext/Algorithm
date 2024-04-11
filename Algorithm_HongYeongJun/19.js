/*
1. 입력: 공백으로 구분된 두 숫자(a b): str 변수에 저장
2. 출력: a ** b
3. 문자열 구분 함수: split() https://hianna.tistory.com/377
4. numArray = str.split(" ")
5. result = numArray[0] ** numArray[1]
*/

str = "2 4";
numArray = str.split(" ");
result = numArray[0] ** numArray[1];
console.log(result);
